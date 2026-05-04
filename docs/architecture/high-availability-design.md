# High Availability Design

Vellum is designed so that public-facing components do not have a single point of failure that blocks normal user activity. This page summarizes that design.

## Goals

| Goal | Description |
|---|---|
| Public RPC remains available during single-node failures | Multiple RPC nodes behind a load balancer |
| Explorer remains queryable during indexer restarts | Indexers run in redundancy with health checks |
| Bridge frontend remains usable | Bridge UI is statically deployable and cacheable |
| Sequencer outage is detectable and recoverable | Active monitoring with documented runbook |
| Batch submission and output proposals continue under normal load | Submitter and proposer are monitored and funded |

## Topology

```text
[Users] -> [Load balancer] -> [RPC node A]
                            -> [RPC node B]
                            -> [RPC node C]

[Indexer A] <- chain head
[Indexer B] <- chain head

[Sequencer] -> [Batch submitter] -> Base
            -> [Output proposer] -> Base
```

## Redundancy

| Component | Redundancy approach |
|---|---|
| Public RPC | Multiple nodes behind load balancer |
| WebSocket RPC | Multiple endpoints |
| Indexers | Active and standby instances |
| Bridge frontend | Static or lightweight dynamic deployment with CDN |
| Monitoring | Independent monitoring stack |

## Health checks

- Liveness: process is up and responding.
- Readiness: node has caught up to the chain head and is serving traffic.
- Indexer lag: time between chain head and indexed head.
- Submitter lag: time between latest block and last posted batch.
- Proposer lag: time between latest finalized block and last posted output root.

## Deploy strategy

- Use blue-green or rolling deploys for RPC nodes.
- Drain a node from the load balancer before redeploying.
- Run smoke checks before re-adding to traffic.
- Stagger deploys so that not all instances cycle at once.

## Backups

- Snapshot data periodically.
- Store snapshots off-host and ideally off-region.
- Test restore from snapshot regularly.

## Maintenance windows

- Communicate maintenance windows on the [Network Status](../network/network-status.md) page.
- Avoid windows that overlap with high-volume bridge or settlement activity.
- Have a rollback plan before starting.

## SLOs

| Component | Target |
|---|---|
| Public RPC uptime | 99.9% or better |
| Explorer uptime | 99.9% or better |
| Bridge frontend uptime | 99.9% or better |
| Sequencer availability | 99.9% or better |
| Batch submission monitoring | 24/7 |
| Incident response | Under 15 minutes for critical issues |

These are operational targets, not guarantees.

## Related pages

- [No-Downtime Operations](../operators/no-downtime-operations.md)
- [Monitoring](../operators/monitoring.md)
- [Incident Response](../operators/incident-response.md)
- [Network Status](../network/network-status.md)
