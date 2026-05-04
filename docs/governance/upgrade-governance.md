# Upgrade Governance

This page describes how upgrades to Vellum's contracts and key parameters are proposed, approved, and executed.

## What this covers

- Upgrades to bridge contracts on Base or Vellum.
- Upgrades to predeploys.
- Changes to output proposer or batch submitter parameters.
- Changes to bridge token list.
- Changes to role assignments and signer sets.

It does not cover:

- Routine node software updates that do not change consensus or contract behavior.
- Routine documentation updates.

## Process

```text
Proposal -> Review -> Approval -> Execution -> Communication
```

### Proposal

A proposal includes:

- Summary.
- Motivation.
- Specific contract or parameter changes.
- Impact and rollback plan.
- Auditor or reviewer summary if applicable.

### Review

- Internal review by relevant roles.
- External review for sensitive changes.
- Public posting where appropriate.

### Approval

- Multisig approval per [Multisig Policy](multisig-policy.md).
- Time lock honored where applicable.

### Execution

- Execute via the multisig.
- Watch metrics during the change.
- Have rollback ready.

### Communication

- Update the [Network Status](../network/network-status.md) page.
- Add an entry to the [Changelog](../reference/changelog.md).

## Time locks

Where applicable, sensitive changes go through a time lock. The time lock provides a window in which to detect a malicious or buggy change before it takes effect.

## Rollback

Every upgrade should have a documented rollback plan. The plan answers:

- What artifacts are needed?
- Who executes the rollback?
- How is success verified?

## Audit and review

For changes that touch bridge contracts or other high-risk components, an audit or independent review should precede approval. See [Audits](../security/audits.md).

## Records

- Proposal documents are archived.
- Multisig transactions are public on chain.
- Changelog entries describe what changed and why.

## Related pages

- [Governance Overview](governance-overview.md)
- [Roles and Permissions](roles-and-permissions.md)
- [Multisig Policy](multisig-policy.md)
- [Emergency Actions](emergency-actions.md)
- [Upgrade Process](../operators/upgrade-process.md)
- [Changelog](../reference/changelog.md)
