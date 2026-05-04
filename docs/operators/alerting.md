# Alerting

Alerts route metric breaches to the operators on call. This page covers severity, routing, and escalation.

## Severity levels

| Severity | Definition | Action |
|---|---|---|
| Page | User-facing impact or imminent failure | Wake on-call, immediate response |
| Warn | Degraded but not user-impacting yet | Investigate during business hours |
| Info | Notable but not actionable | Reviewed during regular cadences |

## Example alert rules

| Metric | Condition | Severity |
|---|---|---|
| `rpc_error_rate` | Above 5% for 5 minutes | Page |
| `rpc_latency_p95` | Above target for 10 minutes | Warn |
| `chain_head` | Stale for over 1 minute | Page |
| `sequencer_lag` | Above 60s | Page |
| `batch_submission_lag` | Above target | Page |
| `withdrawal_finalization_lag` | Above expected window | Warn |
| `explorer_indexer_lag` | Above 5 minutes | Page |
| `node_peer_count` | Below minimum | Warn |
| `disk_usage` | Above 80% | Warn |
| `disk_usage` | Above 90% | Page |
| External RPC reachability | Failure for 1 minute | Page |
| Status page external probe failure | Failure for 1 minute | Page |

These thresholds are starting points. Tune them based on real traffic patterns.

## Routing

| Component | Primary route |
|---|---|
| RPC | RPC on-call |
| Sequencer | Sequencer on-call |
| Batch submitter, proposer | Settlement on-call |
| Bridge frontend | Bridge on-call |
| Explorer and indexers | Indexing on-call |
| Hosts and infrastructure | Platform on-call |

Use a single primary contact rotation if the team is small, but tag alerts so escalations are unambiguous.

## Escalation

- Primary on-call has a defined acknowledge window. If unacknowledged, escalate to secondary.
- Severity Page alerts must be acknowledged immediately.
- Severity Warn alerts may follow asynchronous escalation.

## Alert fatigue

- Tune thresholds to reduce noise.
- Group related alerts where appropriate.
- Silence during known incidents to avoid duplicates.
- Review and prune stale alerts on a regular cadence.

## Communication during incidents

- Update the [Network Status](../network/network-status.md) page promptly.
- Use a single internal incident channel.
- Provide ETAs as conservative ranges.

## Related pages

- [Monitoring](monitoring.md)
- [Incident Response](incident-response.md)
- [No-Downtime Operations](no-downtime-operations.md)
