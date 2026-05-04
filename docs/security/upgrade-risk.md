# Upgrade Risk

Upgrades are necessary to fix bugs, add features, and respond to changing conditions. They also introduce risk: a buggy or malicious upgrade can affect users.

## Categories of upgrade

| Category | Examples |
|---|---|
| Node software | New release of the Vellum binary or services |
| Predeploys | Updates to system contracts deployed at fixed addresses |
| Bridge contracts | Changes to bridge logic on Base or Vellum |
| Configuration | Parameter changes that do not require code changes |

## Risks

- Bug introduced in new code.
- Misconfiguration during the change.
- Compromise of the upgrade authority.
- Lack of rollback path.
- Insufficient communication leaving users unaware.

## Mitigations

- Multisig approval for sensitive changes. See [Multisig Policy](../governance/multisig-policy.md).
- Time locks on critical changes where applicable.
- Testnet validation before mainnet.
- Documented rollback steps.
- Public announcement on the [Network Status](../network/network-status.md) page and in the [Changelog](../reference/changelog.md).
- Postmortem after non-trivial upgrades.

## Authority

Upgrade authority is held by documented roles. See [Roles and Permissions](../governance/roles-and-permissions.md) and [Upgrade Governance](../governance/upgrade-governance.md).

## Emergency upgrades

In rare cases, an emergency upgrade may be needed. The procedure is documented in [Emergency Actions](../governance/emergency-actions.md). Emergency procedures preserve as much of the standard process as possible.

## What users can do

- Watch the [Network Status](../network/network-status.md) page for upgrade announcements.
- Read the [Changelog](../reference/changelog.md) for what changed.
- Update wallet network configurations if asked, only using values published in this documentation.

## Related pages

- [Upgrade Process](../operators/upgrade-process.md)
- [Upgrade Governance](../governance/upgrade-governance.md)
- [Multisig Policy](../governance/multisig-policy.md)
- [Emergency Actions](../governance/emergency-actions.md)
- [Changelog](../reference/changelog.md)
