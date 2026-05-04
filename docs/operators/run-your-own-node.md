# Run Your Own Node

This page walks through running your own Vellum node from the published genesis and rollup config. It is a concrete, end-to-end guide using the actual chain config.

A Vellum node is two processes running side by side:

| Process | Role |
|---|---|
| `op-geth` | The L2 execution client. Holds Vellum state and serves JSON-RPC. |
| `op-node` | The rollup node. Derives Vellum blocks from data posted to the L1 (Base) and feeds them to `op-geth`. |

You will also need access to a Base RPC endpoint, which is the L1 from Vellum's perspective.

{% hint style="info" %}
The configs documented here are for the Vellum testnet, which settles to Base Sepolia. Mainnet configs will be published when mainnet is live.
{% endhint %}

## Chain at a glance

| Field | Value |
|---|---|
| Network | Vellum testnet |
| L2 chain ID | 80411 |
| L1 chain (settlement) | Base Sepolia (chain ID 84532) |
| Block time | 1 second |
| Native gas token | ETH |
| Genesis timestamp | 1777891838 (2026-05-04 10:50:38 UTC) |
| Active hardforks at genesis | regolith, canyon, delta, ecotone, fjord, granite, holocene, isthmus, jovian |
| Batch inbox (L1) | `0x0090e27e19eb68d7eb1aeb00d3b499f497650dbc` |
| Deposit contract / Portal (L1) | `0xf3b6462c821ba276f1bd18d008482b6ce6a44ed7` |
| L1 SystemConfig | `0xe939c1a1c50e254a19efea4ac87b68a262433365` |

These values are taken directly from the published [`rollup.json`](../../configs/testnet/rollup.json) and [`genesis.json`](../../configs/testnet/genesis.json) in the `configs/testnet/` directory of the docs repo.

## When you should run your own node

| Reason | Why |
|---|---|
| Heavy read traffic | Avoid public RPC rate limits |
| Strict latency requirements | Reduce hops |
| Custom indexing | Run your own subscribers |
| Compliance | Operate within your own boundary |
| Independent verification | Replay batches from Base and confirm Vellum state |

## Requirements

| Resource | Recommended |
|---|---|
| CPU | 4 to 8 cores |
| Memory | 16 to 32 GB |
| Disk | NVMe SSD with growth headroom (start with 200 GB) |
| Network | Stable, low-latency to a Base Sepolia RPC |
| OS | Linux (Ubuntu 22.04+ or similar) |
| Software | Docker + Docker Compose, or `op-geth` and `op-node` binaries |

You will also need a Base RPC URL. You can use a public Base Sepolia RPC for testing or run your own Base node for production.

## Step 1. Get the configs

Clone the docs repo to get the genesis and rollup config:

```bash
git clone https://github.com/Vellumfoundation/vellum-docs.git
cd vellum-docs/configs/testnet
ls
# genesis.json   rollup.json   README.md
```

You can also download them directly from the repo if you prefer.

Verify the basics with `jq`:

```bash
jq '.l2_chain_id, .l1_chain_id' rollup.json
# 80411
# 84532

jq '.config.chainId' genesis.json
# 80411
```

## Step 2. Set environment variables

```bash
# Where you want your node data stored
export VELLUM_DATA_DIR=$HOME/vellum-node

# A Base Sepolia RPC (HTTPS)
export L1_RPC_URL=https://sepolia.base.org

# A Base Sepolia beacon endpoint (for blob retrieval, ecotone+ requires this)
export L1_BEACON_URL=https://sepolia.base.org   # replace with a beacon-capable endpoint

# Path to the configs you cloned
export VELLUM_CONFIG_DIR=$(pwd)
```

{% hint style="warning" %}
`L1_BEACON_URL` must be a beacon-API endpoint that serves blobs for Base Sepolia. A standard JSON-RPC endpoint will not work for blob retrieval. Some providers expose this; otherwise run your own consensus client.
{% endhint %}

## Step 3. Initialize op-geth

`op-geth` needs to be initialized once with the genesis file before it can start.

### With Docker

```bash
docker run --rm \
  -v $VELLUM_DATA_DIR:/data \
  -v $VELLUM_CONFIG_DIR/genesis.json:/genesis.json:ro \
  us-docker.pkg.dev/oplabs-tools-artifacts/images/op-geth:latest \
  init --datadir=/data /genesis.json
```

### With a local binary

```bash
op-geth init \
  --datadir=$VELLUM_DATA_DIR \
  $VELLUM_CONFIG_DIR/genesis.json
```

You should see a message confirming that the genesis state was written.

## Step 4. Generate a JWT for op-geth ↔ op-node

`op-node` and `op-geth` authenticate to each other using a shared JWT.

```bash
openssl rand -hex 32 > $VELLUM_DATA_DIR/jwt.txt
```

## Step 5. Start op-geth

`op-geth` runs the EVM and serves JSON-RPC.

### With Docker

```bash
docker run -d --name vellum-geth \
  -v $VELLUM_DATA_DIR:/data \
  -p 8545:8545 -p 8546:8546 -p 8551:8551 \
  us-docker.pkg.dev/oplabs-tools-artifacts/images/op-geth:latest \
  --datadir=/data \
  --networkid=80411 \
  --syncmode=full \
  --gcmode=archive \
  --http \
  --http.addr=0.0.0.0 \
  --http.port=8545 \
  --http.api=eth,net,web3,debug,txpool \
  --http.corsdomain=* \
  --http.vhosts=* \
  --ws \
  --ws.addr=0.0.0.0 \
  --ws.port=8546 \
  --ws.api=eth,net,web3,debug,txpool \
  --ws.origins=* \
  --authrpc.addr=0.0.0.0 \
  --authrpc.port=8551 \
  --authrpc.vhosts=* \
  --authrpc.jwtsecret=/data/jwt.txt \
  --rollup.disabletxpoolgossip=true \
  --rollup.sequencerhttp=https://TBD-sequencer-rpc \
  --verbosity=3
```

### Notes on the flags

- `--networkid=80411` matches the L2 chain ID.
- `--gcmode=archive` keeps full historical state. Use `full` if you do not need archive history.
- `--rollup.disabletxpoolgossip=true` is the standard OP Stack setting for non-sequencing nodes.
- `--rollup.sequencerhttp` should be the public Vellum sequencer RPC; replace with the official URL when published.
- `--authrpc.*` exposes the engine API on port 8551 for `op-node`.

## Step 6. Start op-node

`op-node` reads batches from Base Sepolia and feeds them to `op-geth` over the engine API.

### With Docker

```bash
docker run -d --name vellum-node \
  -v $VELLUM_DATA_DIR:/data \
  -v $VELLUM_CONFIG_DIR/rollup.json:/rollup.json:ro \
  --link vellum-geth \
  -p 9545:9545 -p 7300:7300 \
  us-docker.pkg.dev/oplabs-tools-artifacts/images/op-node:latest \
  op-node \
  --l1=$L1_RPC_URL \
  --l1.beacon=$L1_BEACON_URL \
  --l1.trustrpc=false \
  --l2=http://vellum-geth:8551 \
  --l2.jwt-secret=/data/jwt.txt \
  --rollup.config=/rollup.json \
  --rpc.addr=0.0.0.0 \
  --rpc.port=9545 \
  --metrics.enabled=true \
  --metrics.addr=0.0.0.0 \
  --metrics.port=7300 \
  --syncmode=execution-layer \
  --p2p.disable=true
```

### Notes on the flags

- `--l1` and `--l1.beacon` are the Base Sepolia execution and beacon endpoints.
- `--l2` points to `op-geth`'s engine API.
- `--rollup.config=/rollup.json` is the testnet rollup config.
- `--syncmode=execution-layer` lets `op-geth` sync via snap / full and uses the rollup node only to keep up with new blocks. Use `--syncmode=consensus-layer` for full L1-derived sync from genesis.
- `--p2p.disable=true` skips peer discovery; turn it on if you want to peer with other Vellum nodes.

## Step 7. Verify the node is syncing

Wait a few minutes, then check sync state.

### Chain head

```bash
curl -s -X POST http://localhost:8545 \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  | jq -r .result
```

The result should advance over time.

### Chain ID sanity check

```bash
curl -s -X POST http://localhost:8545 \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}' \
  | jq -r .result
# 0x13a1b   (= 80411)
```

### Rollup sync status

```bash
curl -s -X POST http://localhost:9545 \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"optimism_syncStatus","params":[],"id":1}' \
  | jq
```

`unsafe_l2`, `safe_l2`, and `finalized_l2` should advance, with `safe_l2` lagging behind once batches catch up.

## Step 8. Place behind a load balancer

For production:

- Terminate TLS at the load balancer.
- Health check `eth_blockNumber` and check that the head is advancing.
- Drain on deploy.
- Run multiple replicas across availability zones.

See [No-Downtime Operations](no-downtime-operations.md) and [Node Architecture](node-architecture.md).

## Optional: Docker Compose template

A minimal `docker-compose.yml` to run both processes together. Adjust paths and ports for your environment.

```yaml
version: "3.9"

services:
  vellum-geth:
    image: us-docker.pkg.dev/oplabs-tools-artifacts/images/op-geth:latest
    command:
      - --datadir=/data
      - --networkid=80411
      - --syncmode=full
      - --gcmode=archive
      - --http
      - --http.addr=0.0.0.0
      - --http.port=8545
      - --http.api=eth,net,web3,debug,txpool
      - --http.corsdomain=*
      - --http.vhosts=*
      - --ws
      - --ws.addr=0.0.0.0
      - --ws.port=8546
      - --ws.api=eth,net,web3,debug,txpool
      - --ws.origins=*
      - --authrpc.addr=0.0.0.0
      - --authrpc.port=8551
      - --authrpc.vhosts=*
      - --authrpc.jwtsecret=/data/jwt.txt
      - --rollup.disabletxpoolgossip=true
      - --verbosity=3
    volumes:
      - ./data:/data
    ports:
      - "8545:8545"
      - "8546:8546"

  vellum-node:
    image: us-docker.pkg.dev/oplabs-tools-artifacts/images/op-node:latest
    depends_on:
      - vellum-geth
    command:
      - op-node
      - --l1=${L1_RPC_URL}
      - --l1.beacon=${L1_BEACON_URL}
      - --l2=http://vellum-geth:8551
      - --l2.jwt-secret=/data/jwt.txt
      - --rollup.config=/rollup.json
      - --rpc.addr=0.0.0.0
      - --rpc.port=9545
      - --syncmode=execution-layer
      - --p2p.disable=true
    volumes:
      - ./data:/data
      - ./rollup.json:/rollup.json:ro
    ports:
      - "9545:9545"
```

Run with:

```bash
L1_RPC_URL=https://sepolia.base.org \
L1_BEACON_URL=https://your-beacon-endpoint \
docker compose up -d
```

## Troubleshooting

### `op-geth init` fails with "database already contains genesis"

You have already initialized this data directory with a different genesis. Either point `--datadir` at a fresh path or wipe the existing one (only safe if you do not need the existing data).

### `op-node` reports "L1 head is behind"

Your L1 endpoint is unhealthy or rate-limited. Use a different Base Sepolia RPC, or run your own.

### Blocks are not advancing

Check both processes:

```bash
docker logs vellum-geth --tail 50
docker logs vellum-node --tail 50
```

Common causes:

- L1 beacon endpoint cannot serve blobs.
- Wrong rollup.json mounted.
- Wrong genesis used at `op-geth init`.
- JWT mismatch between `op-geth` and `op-node`.

### High disk usage

`--gcmode=archive` keeps full state history. Switch to `--gcmode=full` if archive is not needed. Snapshot and prune as documented in [Backups](backups.md).

## Next steps

- Add monitoring per [Monitoring](monitoring.md).
- Configure alerting per [Alerting](alerting.md).
- Plan backups per [Backups](backups.md).
- Set up incident response per [Incident Response](incident-response.md).

## Related pages

- [Run an RPC Node](run-an-rpc-node.md)
- [Node Architecture](node-architecture.md)
- [Monitoring](monitoring.md)
- [No-Downtime Operations](no-downtime-operations.md)
