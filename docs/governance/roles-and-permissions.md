# Roles and Permissions

Critical roles should be documented before public launch.

| Role | Responsibility |
|---|---|
| Protocol admin | Protocol upgrades and emergency actions |
| Bridge admin | Bridge configuration and token mapping |
| Sequencer operator | Block production |
| Batch submitter | Submits transaction data or batches to Base |
| Proposer | Posts output roots |
| Guardian | Emergency pause or safety action if applicable |
| Multisig signers | Secure approval of critical changes |

{% hint style="warning" %}
The final role addresses and permissions must be published from deployment artifacts.
{% endhint %}

## Publication checklist

- Role name.
- Address.
- Permissions.
- Owner or multisig.
- Upgrade or pause authority.
- Rotation process.

## Related pages

- [Upgrade Governance](upgrade-governance.md)
- [Emergency Actions](emergency-actions.md)
- [Trust Assumptions](../security/trust-assumptions.md)
