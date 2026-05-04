# Interact with RPC

Vellum exposes standard Ethereum JSON-RPC. This page covers common methods, with examples.

## Endpoint

```bash
export VELLUM_RPC_URL=TBD
```

See [RPC Endpoints](../network/rpc-endpoints.md).

## Quick check

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
```

A healthy response returns the chain ID as a hex string.

## Common methods

| Method | Purpose |
|---|---|
| `eth_chainId` | Returns the Vellum chain ID |
| `eth_blockNumber` | Returns the latest block number |
| `eth_getBalance` | Returns the ETH balance of an address |
| `eth_getTransactionByHash` | Returns transaction details by hash |
| `eth_getTransactionReceipt` | Returns the receipt for a transaction |
| `eth_call` | Executes a read-only call |
| `eth_estimateGas` | Estimates gas for a transaction |
| `eth_sendRawTransaction` | Submits a signed transaction |
| `eth_getLogs` | Queries logs by filter |

## Examples

### Latest block

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

### Balance of an address

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0xYOUR_ADDRESS","latest"],"id":1}'
```

### Transaction by hash

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xTX_HASH"],"id":1}'
```

### Transaction receipt

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0xTX_HASH"],"id":1}'
```

### Read-only call

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{
    "jsonrpc":"2.0",
    "method":"eth_call",
    "params":[{"to":"0xYOUR_ADDRESS","data":"0x..."},"latest"],
    "id":1
  }'
```

### Estimate gas

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{
    "jsonrpc":"2.0",
    "method":"eth_estimateGas",
    "params":[{"to":"0xYOUR_ADDRESS","data":"0x..."}],
    "id":1
  }'
```

### Send raw transaction

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xSIGNED_TX"],"id":1}'
```

### Get logs

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{
    "jsonrpc":"2.0",
    "method":"eth_getLogs",
    "params":[{
      "address":"0xYOUR_ADDRESS",
      "fromBlock":"0x0",
      "toBlock":"latest"
    }],
    "id":1
  }'
```

## Rate limits

Public RPC endpoints apply rate limits. Production applications should:

- Cache reads.
- Batch requests where possible.
- Handle 429 responses with backoff.
- Consider self-hosting for heavy workloads. See [Run an RPC Node](../operators/run-an-rpc-node.md).

## Related pages

- [RPC Endpoints](../network/rpc-endpoints.md)
- [Send Transactions](send-transactions.md)
- [Read Chain Data](read-chain-data.md)
