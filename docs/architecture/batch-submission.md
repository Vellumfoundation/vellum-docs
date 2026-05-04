# Batch Submission

Batch submission posts Vellum transaction data or commitments to Base.

## Why it matters

Batch submission connects Vellum execution to Base settlement. If batching lags, users may still see L3 execution, but settlement progress and withdrawal readiness can be delayed.

| Signal | Why monitor it |
|---|---|
| Latest submitted batch | Confirms progress to Base |
| Batch submission lag | Measures how far Vellum is behind |
| Base RPC health | Required for submission |
| Submitter balance | Must have funds to post transactions |
| Transaction failures | Indicates configuration, gas, or Base issues |

{% hint style="warning" %}
Batch submission failure is an operational risk. It should page operators before it becomes a user-facing incident.
{% endhint %}

## Related pages

- [Base Settlement](base-settlement.md)
- [Monitoring](../operators/monitoring.md)
- [Threat Model](../security/threat-model.md)
