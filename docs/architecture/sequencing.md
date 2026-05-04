# Sequencing

The sequencer orders transactions and produces Vellum blocks.

## Responsibilities

| Responsibility | Description |
|---|---|
| Transaction ordering | Chooses the order of transactions included in blocks |
| Block production | Produces new L3 blocks |
| RPC responsiveness | Affects how quickly users see pending and included transactions |
| Liveness | Needs monitoring and failover planning |

{% hint style="warning" %}
A sequencer outage can delay new transactions. Applications should handle temporary submission failures and show clear status to users.
{% endhint %}

## Operator monitoring

- Blocks produced per minute.
- Sequencer head lag.
- Transaction pool depth.
- Error rate.
- CPU and memory pressure.
- Disk usage.
- Failover readiness.

## Related pages

- [Sequencer Risk](../security/sequencer-risk.md)
- [Monitoring](../operators/monitoring.md)
- [No-Downtime Operations](../operators/no-downtime-operations.md)
