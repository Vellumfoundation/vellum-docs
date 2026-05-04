# Incident Response

Incident response defines how operators detect, triage, communicate, and recover from production issues.

## Process

1. Detect alert or report.
2. Assign incident commander.
3. Confirm impact.
4. Mitigate user-facing symptoms.
5. Communicate on status page.
6. Preserve logs and evidence.
7. Resolve root cause.
8. Publish post-incident summary when appropriate.

## Severity

| Severity | Example |
|---|---|
| Critical | Sequencer down, bridge disabled, major RPC outage |
| High | Elevated RPC errors, batch lag, explorer unavailable |
| Medium | Degraded faucet, partial indexer delay |
| Low | Cosmetic status issue or documentation correction |

{% hint style="danger" %}
During security incidents, prioritize user safety, key containment, and clear communication over speed of feature restoration.
{% endhint %}

## Related pages

- [Alerting](alerting.md)
- [Security Model](../security/security-model.md)
- [Emergency Actions](../governance/emergency-actions.md)
