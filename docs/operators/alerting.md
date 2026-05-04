# Alerting

Alerting turns monitoring signals into operator action.

## Critical alerts

| Alert | Trigger |
|---|---|
| Sequencer stalled | No new blocks within threshold |
| RPC high error rate | Error percentage above threshold |
| RPC high latency | p95 latency above threshold |
| Batch submission lag | Batch delay above threshold |
| Proposer lag | Output roots not advancing |
| Explorer lag | Indexer behind chain head |
| Bridge failures | Deposit or withdrawal processing errors |
| Disk pressure | Disk usage above threshold |
| Certificate expiry | TLS certificate near expiry |

## Routing

- Critical alerts page an on-call operator.
- High alerts notify the operations channel.
- Low alerts create tickets.
- Public incidents update the status page.

{% hint style="info" %}
Every critical alert should have an owner, severity, dashboard link, and runbook link.
{% endhint %}

## Related pages

- [Monitoring](monitoring.md)
- [Incident Response](incident-response.md)
- [No-Downtime Operations](no-downtime-operations.md)
