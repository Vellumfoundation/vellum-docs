# Run an RPC Node

Operators or applications with strict latency or rate budgets can run their own Vellum RPC node. This page outlines the steps and considerations.

## When to run your own node

| Reason | Why |
|---|---|
| Heavy read traffic | Avoid public RPC rate limits |
| Strict latency requirements | Reduce hops |
| Custom indexing | Run your own subscribers |
| Compliance | Operate within your own boundary |

## Requirements

| Resource | Recommended |
|---|---|
| CPU | 4 to 8 cores |
| Memory | 16 to 32 GB |
| Disk | NVMe SSD with growth headroom |
| Network | Stable, low-latency to Base RPC |
| Connectivity | Outbound to Base RPC and to peer Vellum nodes |

Disk usage grows with chain history. Plan for snapshotting and pruning where supported.

## High-level steps

1. Prepare the host with the recommended resources.
2. Install the Vellum node binary at the published version.
3. Configure the node with:
   - Vellum chain ID.
   - Path to the Base L2 RPC.
   - Bootnodes or peer list.
   - JSON-RPC and WebSocket listen addresses.
4. Start the node and let it sync from genesis or from a recent snapshot.
5. Wait until the node reports itself in sync with the chain head.
6. Place the node behind a reverse proxy or load balancer.

Specific binaries, version numbers, and configuration files will be published alongside the public testnet and mainnet readiness milestones.

## Configuration template

```yaml
chainId: TBD
l2RpcUrl: TBD          # base L2 RPC for parent chain reads
sequencerUrl: TBD      # for forwarding transactions, where applicable
peerSet:
  - TBD
rpc:
  enabled: true
  listen: 0.0.0.0:8545
ws:
  enabled: true
  listen: 0.0.0.0:8546
metrics:
  enabled: true
  listen: 0.0.0.0:9090
```

## Health checks

| Check | Description |
|---|---|
| Liveness | Process is running |
| Readiness | Node has caught up to chain head |
| Sync gap | Distance between node head and known chain head |
| Peer count | Above a configured minimum |

## Behind a load balancer

- Terminate TLS at the load balancer.
- Use sticky sessions only if needed for WebSocket connections.
- Drain on deploy.
- Run health checks at a frequency that detects failure within seconds.

## Rate limits

Even self-hosted nodes benefit from request quotas applied at the proxy:

- Per-IP limits.
- Per-API-key limits if you front the node with an API gateway.
- Maximum payload sizes.

## Monitoring

Track the metrics in [Monitoring](monitoring.md), including `rpc_request_count`, `rpc_error_rate`, `rpc_latency_p95`, `chain_head`, and `node_peer_count`.

## Backups

Snapshot the data directory periodically. Test restores. See [Backups](backups.md).

## Related pages

- [Node Architecture](node-architecture.md)
- [Monitoring](monitoring.md)
- [Backups](backups.md)
- [No-Downtime Operations](no-downtime-operations.md)
