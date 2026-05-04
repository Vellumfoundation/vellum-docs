# Network Status

Vellum should publish network status for users, developers, and operators.

| Component | Status source |
|---|---|
| Public RPC | TBD |
| WebSocket RPC | TBD |
| Sequencer | TBD |
| Batch submission | TBD |
| Proposer | TBD |
| Explorer | TBD |
| Bridge frontend | TBD |
| Faucet | TBD |

{% hint style="info" %}
A status page should explain incidents, degraded service, maintenance windows, and recovery progress in plain language.
{% endhint %}

## Incident states

| State | Meaning |
|---|---|
| Operational | Service is healthy |
| Degraded | Service works with elevated errors or latency |
| Partial outage | Some users or regions are affected |
| Major outage | Core functionality is unavailable |
| Maintenance | Planned work is in progress |

## Related pages

- [Monitoring](../operators/monitoring.md)
- [Incident Response](../operators/incident-response.md)
- [No-Downtime Operations](../operators/no-downtime-operations.md)
