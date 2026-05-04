# Multisig Policy

Multisigs should protect critical Vellum roles and upgrades.

## Policy areas

| Area | Requirement |
|---|---|
| Signer count | TBD |
| Threshold | TBD |
| Hardware wallets | Recommended |
| Key rotation | Required procedure |
| Transaction simulation | Required for critical actions |
| Emergency contact | Required |
| Public addresses | Publish before mainnet |

{% hint style="warning" %}
Do not publish mainnet governance as finalized until signer policy, role addresses, and upgrade process are confirmed.
{% endhint %}

## Good practices

- Separate personal wallets from signer wallets.
- Require transaction descriptions.
- Simulate before signing.
- Monitor multisig activity.
- Remove inactive signers.
- Document emergency rotations.

## Related pages

- [Roles and Permissions](roles-and-permissions.md)
- [Upgrade Governance](upgrade-governance.md)
- [Upgrade Risk](../security/upgrade-risk.md)
