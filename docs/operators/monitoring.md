# Monitoring

Monitoring is a first-class deliverable for Vellum operators. This page lists the core metrics, the recommended stack, and the targets that define healthy operation.

## Stack

| Tool | Purpose |
|---|---|
| Prometheus | Metrics collection |
| Grafana | Dashboards |
| Loki | Logs |
| Alertmanager | Alert routing |
| External uptime checks | Independent reachability tests |

## Core metrics

| Metric | What it measures |
|---|---|
| `chain_head` | Latest Vellum block known to a node |
| `safe_head` | Latest block included in a Base batch |
| `finalized_head` | Latest block whose data is finalized on Base |
| `rpc_request_count` | RPC traffic volume |
| `rpc_error_rate` | Share of RPC requests returning errors |
| `rpc_latency_p95` | 95th percentile RPC latency |
| `sequencer_blocks_produced` | Blocks produced by the sequencer over time |
| `sequencer_lag` | Time since last sequenced block |
| `batch_submission_lag` | Time between latest block and last batch posted |
| `bridge_deposit_count` | Deposits in a window |
| `bridge_withdrawal_count` | Withdrawals in a window |
| `withdrawal_finalization_lag` | Time between proving and finalization eligibility |
| `explorer_indexer_lag` | Distance between chain head and indexed head |
| `node_peer_count` | Peer count per node |
| `disk_usage` | Storage utilization |
| `memory_usage` | Memory utilization |
| `cpu_usage` | CPU utilization |

## Dashboards

At minimum, run dashboards for:

- Chain head and sync state across nodes.
- RPC traffic, errors, and latency.
- Sequencer health.
- Batch submission and output proposer health.
- Bridge activity.
- Explorer indexer lag.
- Host metrics.

## Logging

- Centralize logs across all nodes and services.
- Structure logs as JSON where possible.
- Tag logs with environment, component, and instance ID.
- Retain logs long enough to investigate cross-service incidents.

## Uptime checks

Run uptime checks from outside your infrastructure to detect connectivity issues your internal monitoring may miss:

- Public RPC reachability.
- WebSocket reachability.
- Block explorer reachability.
- Bridge frontend reachability.

## Alerting

See [Alerting](alerting.md) for routing, severity, and escalation rules.

## Health budget

Treat each metric as having a health budget. If a metric breaches budget, the team takes action. Continued breaches without action erode the value of monitoring.

## Related pages

- [Alerting](alerting.md)
- [Incident Response](incident-response.md)
- [No-Downtime Operations](no-downtime-operations.md)
- [Network Status](../network/network-status.md)
