# Run Indexing Services

Indexing services consume Vellum chain data and serve it through structured APIs. They power the explorer, the bridge UI, and analytics.

## What gets indexed

| Data | Used for |
|---|---|
| Blocks and transactions | Explorer, analytics |
| Logs and events | Dapp UIs, bridge UIs |
| Bridge deposits and withdrawals | Bridge frontend |
| Token transfers | Wallets, explorers |
| Address activity | Explorer |

## Components

- Block follower: subscribes to new blocks via WebSocket or polls via HTTP.
- Backfiller: reads historical blocks for cold start or gap recovery.
- Decoder: applies ABIs to decode logs and calls.
- Storage: a database optimized for the workload.
- API: serves the indexed data to consumers.

## Data sources

| Source | Use |
|---|---|
| Vellum RPC node | Primary chain data |
| Vellum WebSocket | Live updates |
| Base RPC | Bridge events on the parent side |

## Reliability patterns

- Always run two indexers, active and standby, with health checks.
- Track and alert on indexer lag.
- Persist last processed block per indexer to enable safe restarts.
- Detect and handle reorgs at every layer.

## Indexer lag

`explorer_indexer_lag` should be a primary alerting metric. Lag means the explorer or bridge UI shows stale data, which leads to user confusion and support load.

| Lag | Severity |
|---|---|
| Under 1 minute | Healthy |
| 1 to 5 minutes | Warn |
| Over 5 minutes | Page |

## Schema discipline

- Track schema migrations explicitly.
- Run migrations before pointing the API at the new schema.
- Avoid breaking changes during a release window.

## Capacity planning

- Project growth based on chain throughput.
- Provision storage with headroom.
- Plan reindex cost into deploy time.

## Resilience tests

- Reorg simulation.
- Cold-start backfill.
- Database failover.
- RPC source failover.

## Related pages

- [Node Architecture](node-architecture.md)
- [Monitoring](monitoring.md)
- [Backups](backups.md)
- [Block Explorer](../network/block-explorer.md)
