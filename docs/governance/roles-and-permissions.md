# Roles and Permissions

This page lists Vellum's governance and operational roles, with the responsibilities each role carries.

## Roles

| Role | Responsibility |
|---|---|
| Protocol admin | Protocol upgrades and emergency actions |
| Bridge admin | Bridge configuration and token mapping |
| Sequencer operator | Block production |
| Batch submitter | Submits transaction data or batches to Base |
| Proposer | Posts output roots |
| Guardian | Emergency pause or safety action if applicable |
| Multisig signers | Secure approval of critical changes |

## Role detail

### Protocol admin

- Authorizes protocol upgrades.
- Authorizes emergency actions.
- Acts only via the multisig and per documented procedures.

### Bridge admin

- Maintains bridge configuration.
- Approves token list updates.
- Coordinates with auditors and operators on bridge-related changes.

### Sequencer operator

- Operates the sequencer service.
- Maintains block production health.
- Coordinates with the on-call rotation for incidents.

### Batch submitter

- Operates the batch submission service.
- Keeps the submitter address funded.
- Monitors `batch_submission_lag`.

### Proposer

- Operates the output proposer service.
- Keeps the proposer address funded.
- Monitors output root posting cadence.

### Guardian

- Has narrow, documented authority to pause or take a safety action under specific conditions.
- Used only when standard procedures cannot respond in time.

### Multisig signers

- Hold keys required to approve sensitive changes.
- Follow the [Multisig Policy](multisig-policy.md).
- Rotate keys per policy.

## Separation of duties

- The sequencer operator does not, by virtue of running the sequencer, hold protocol admin authority.
- Multisig signers are not all employees of the same operator wherever feasible.
- Guardian authority is narrow and time-limited where possible.

## Public addresses

Multisig and role addresses are published with the bridge contract addresses. See [Contract Addresses](../developers/contract-addresses.md).

## Changes to roles

Adding, removing, or rotating signers and role holders follows [Upgrade Governance](upgrade-governance.md). Changes are logged in the [Changelog](../reference/changelog.md).

## Related pages

- [Governance Overview](governance-overview.md)
- [Upgrade Governance](upgrade-governance.md)
- [Emergency Actions](emergency-actions.md)
- [Multisig Policy](multisig-policy.md)
