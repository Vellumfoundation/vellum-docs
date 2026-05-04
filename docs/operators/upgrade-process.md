# Upgrade Process

This page describes how Vellum upgrades software and contracts. The goal is predictable, reversible upgrades that do not surprise users or operators.

## What gets upgraded

| Item | Cadence |
|---|---|
| Node and service binaries | As needed |
| Predeploys | Coordinated with chain upgrades |
| Bridge contracts | Coordinated, governance-approved |
| Configuration | Frequent, low-risk |
| Monitoring and dashboards | Continuous |

## Lifecycle

```text
Plan -> Test -> Stage -> Deploy -> Validate -> Monitor
```

### Plan

- Define scope.
- Identify affected components.
- Confirm rollback path.
- Identify approver.

### Test

- Run on devnet.
- Run on testnet.
- Test rollback explicitly.
- Soak under representative load.

### Stage

- Coordinate timing with stakeholders.
- Communicate maintenance windows.
- Pre-stage artifacts.

### Deploy

- Use blue-green or rolling deploys for nodes.
- For contract upgrades, follow the [Upgrade Governance](../governance/upgrade-governance.md) procedure.
- Watch metrics in real time.

### Validate

- Confirm chain head and indexers continue advancing.
- Confirm bridge functions work end-to-end.
- Run smoke tests.

### Monitor

- Keep close watch for several hours after the change.
- Be ready to roll back.

## Contract upgrades

Contract upgrades follow the procedures in [Upgrade Governance](../governance/upgrade-governance.md):

- Multisig approval per [Multisig Policy](../governance/multisig-policy.md).
- Documented diff of changes.
- Time-locked execution where applicable.
- Postmortem of behavior after upgrade.

## Rollback

| Component | Rollback |
|---|---|
| Node binary | Re-deploy previous version |
| Indexer | Restore previous schema and data |
| Predeploy | Following governance procedure |
| Bridge contract | Following governance procedure |
| Configuration | Revert in source control |

Document rollback steps before deploying. Test them.

## Communication

- Pre-announce major upgrades on the [Network Status](../network/network-status.md) page.
- During the upgrade, post real-time updates.
- After the upgrade, document the result in the [Changelog](../reference/changelog.md).

## Related pages

- [Upgrade Governance](../governance/upgrade-governance.md)
- [Roles and Permissions](../governance/roles-and-permissions.md)
- [Emergency Actions](../governance/emergency-actions.md)
- [Changelog](../reference/changelog.md)
