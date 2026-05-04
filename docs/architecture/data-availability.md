# Data Availability

Vellum relies on the configured OP Stack-style data path for publishing transaction data or commitments to Base.

## What to verify before launch

| Item | Requirement |
|---|---|
| Batch submission | Advancing on Base |
| Data path | Documented for users and operators |
| Monitoring | Batch lag, failed submissions, wallet balance |
| Recovery | Runbook for submitter outage |
| Cost model | Tracked and included in fee planning |

{% hint style="info" %}
The final data availability configuration should match the deployment artifacts and operator runbooks before public launch.
{% endhint %}

## User impact

If data publication is delayed, withdrawals and settlement-dependent workflows can be delayed. Dapps should surface network status instead of treating all failures as wallet errors.

## Related pages

- [Batch Submission](batch-submission.md)
- [Monitoring](../operators/monitoring.md)
- [Threat Model](../security/threat-model.md)
