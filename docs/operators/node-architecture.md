# Node Architecture

Vellum operations rely on execution nodes, rollup services, RPC gateways, indexers, and monitoring.

## Reference components

| Component | Role |
|---|---|
| Execution node | Stores and executes Vellum state |
| Rollup node | Tracks rollup protocol state |
| Sequencer | Produces blocks |
| Batcher | Submits batches to Base |
| Proposer | Posts output roots |
| RPC gateway | Routes public RPC traffic |
| Explorer indexer | Indexes blocks and contracts |
| Monitoring stack | Tracks health and alerts |

{% hint style="info" %}
Separate public RPC nodes from privileged operational nodes. Do not expose admin RPC methods publicly.
{% endhint %}

## Related pages

- [Run an RPC Node](run-an-rpc-node.md)
- [Monitoring](monitoring.md)
- [No-Downtime Operations](no-downtime-operations.md)
