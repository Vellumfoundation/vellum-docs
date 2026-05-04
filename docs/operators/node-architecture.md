# Node Architecture

This page describes the node and service topology that operators run to support Vellum.

## Components

| Component | Function |
|---|---|
| Sequencer | Orders Vellum transactions and produces blocks |
| RPC nodes | Serve JSON-RPC traffic to users and applications |
| Replica nodes | Replay Vellum from posted Base data, used for verification and read traffic |
| Batch submitter | Posts Vellum batches to Base |
| Output proposer | Posts output roots to Base |
| Indexers | Power explorer and bridge UIs |
| Monitoring stack | Metrics, logs, alerting |
| Bridge frontend | UI for bridging |
| Status page | Public component health and incidents |

## Topology

```text
[Public users]
       |
[Load balancer]
   /    |    \
[RPC A] [RPC B] [RPC C]    [WebSocket nodes]
       |
   [Sequencer]
       |
   [Batch submitter] -> Base
   [Output proposer] -> Base

[Indexers] <- chain head
[Monitoring] <- metrics from all components
```

## Networking

- RPC and WebSocket endpoints sit behind a load balancer with health checks.
- Internal services use a private network where possible.
- Public surfaces only expose what is needed: RPC, WebSocket, explorer, bridge UI, status page.

## Storage

| Component | Storage |
|---|---|
| Sequencer | Chain state, mempool |
| RPC nodes | Chain state, indexed history |
| Indexers | Indexed data store |
| Monitoring | Metrics and logs |

State storage grows with chain history. Plan for horizontal scaling and snapshotting.

## Process supervision

- Run nodes under a supervisor (systemd, container orchestrator) that restarts on crash.
- Use readiness checks before serving traffic.
- Emit logs to a centralized log store.

## Failure isolation

- Avoid single-point dependencies between RPC and sequencer where possible.
- Run multiple RPC instances across availability zones.
- Run the batch submitter and output proposer with active monitoring and a tested failover.

## Deployments

- Use blue-green or rolling deploys.
- Drain RPC nodes from the load balancer before redeploying.
- Run smoke checks before re-adding to traffic.

## Configuration management

- Treat configuration as code.
- Track configuration changes in version control.
- Avoid manual SSH-and-edit changes on production.

## Related pages

- [Run an RPC Node](run-an-rpc-node.md)
- [Run Indexing Services](run-indexing-services.md)
- [Monitoring](monitoring.md)
- [No-Downtime Operations](no-downtime-operations.md)
