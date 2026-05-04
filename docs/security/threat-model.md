# Threat Model

This page lists major threats and practical mitigations.

| Threat | Mitigation |
|---|---|
| Sequencer outage | Monitoring, failover planning, status updates |
| RPC outage | Multiple RPC nodes, load balancing, fallback providers |
| Bridge frontend compromise | Content security, signed releases, monitoring, official links |
| Incorrect token mapping | Review process, published metadata, route tests |
| Malicious contract verification | Verified explorer process and user education |
| Upgrade key compromise | Multisig, hardware wallets, timelocks where appropriate |
| Multisig compromise | Signer policy, monitoring, emergency response |
| Batch submission failure | Alerts, funded submitter, Base RPC failover |
| Explorer indexer lag | Lag alerts, reindex runbooks |
| Chain reorgs on parent layer | Confirmation policy and monitoring |
| User phishing | Official links, warnings, support process |
| DNS hijacking | DNS monitoring, registry locks, incident plan |
| RPC spoofing | Official endpoints, chain ID checks, multiple providers |

{% hint style="danger" %}
No documentation can remove the need for secure key management, verified deployment artifacts, and tested incident response.
{% endhint %}

## Related pages

- [Security Model](security-model.md)
- [Incident Response](../operators/incident-response.md)
- [Emergency Actions](../governance/emergency-actions.md)
