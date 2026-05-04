# Upgrade Risk

Upgrade risk comes from the ability to change protocol contracts, bridge behavior, infrastructure configuration, or emergency controls.

## Risk areas

| Area | Risk |
|---|---|
| Contract upgrades | Logic changes can affect funds or state |
| Bridge config | Incorrect addresses can break transfers |
| Sequencer config | Liveness can be affected |
| RPC config | Users can see degraded or wrong behavior |
| Key management | Compromised keys can authorize bad changes |

## Controls

- Multisig approvals.
- Clear role ownership.
- Testnet rehearsal.
- Deployment runbooks.
- Rollback planning.
- Public communication for user-impacting changes.

{% hint style="warning" %}
Upgrade authority is a trust assumption and should be documented clearly.
{% endhint %}

## Related pages

- [Upgrade Governance](../governance/upgrade-governance.md)
- [Multisig Policy](../governance/multisig-policy.md)
- [Upgrade Process](../operators/upgrade-process.md)
