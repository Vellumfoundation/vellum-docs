# Upgrade Process

Upgrades should be planned, reviewed, tested, communicated, and reversible where possible.

## Upgrade stages

1. Define scope.
2. Review protocol and infrastructure impact.
3. Test in devnet.
4. Test in public testnet when appropriate.
5. Prepare rollback plan.
6. Schedule maintenance window if needed.
7. Execute with monitoring.
8. Verify health.
9. Publish status update.

## Required artifacts

- Change description.
- Risk assessment.
- Affected contracts or services.
- Deployment commands.
- Rollback plan.
- Monitoring checklist.
- Signer approvals.

{% hint style="warning" %}
Protocol upgrades can affect trust assumptions. Governance and user communication should match the risk level.
{% endhint %}

## Related pages

- [Upgrade Governance](../governance/upgrade-governance.md)
- [Upgrade Risk](../security/upgrade-risk.md)
- [Multisig Policy](../governance/multisig-policy.md)
