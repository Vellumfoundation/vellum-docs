# Monitoring

Vellum operators should monitor the chain, RPC, bridge, explorer, and infrastructure.

## Metrics

| Metric | Purpose |
|---|---|
| `chain_head` | Latest observed L3 head |
| `safe_head` | Safe head tracking |
| `finalized_head` | Finalized head tracking |
| `rpc_request_count` | RPC traffic volume |
| `rpc_error_rate` | RPC failure rate |
| `rpc_latency_p95` | User-facing latency |
| `sequencer_blocks_produced` | Sequencer liveness |
| `sequencer_lag` | Sequencer delay |
| `batch_submission_lag` | Settlement delay |
| `bridge_deposit_count` | Deposit activity |
| `bridge_withdrawal_count` | Withdrawal activity |
| `withdrawal_finalization_lag` | Withdrawal delay |
| `explorer_indexer_lag` | Explorer freshness |
| `node_peer_count` | Network connectivity |
| `disk_usage` | Storage pressure |
| `memory_usage` | Memory pressure |
| `cpu_usage` | CPU pressure |

## Stack

- Prometheus for metrics.
- Grafana for dashboards.
- Loki for logs.
- Alertmanager for paging.
- Uptime checks for public endpoints.

{% hint style="warning" %}
Monitor sequencer, batch submission, proposer, RPC, bridge, and explorer systems. A green RPC alone does not mean the network is healthy.
{% endhint %}

## Related pages

- [Alerting](alerting.md)
- [No-Downtime Operations](no-downtime-operations.md)
- [Incident Response](incident-response.md)
