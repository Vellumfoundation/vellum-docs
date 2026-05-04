# Multisig Policy

This page covers Vellum's multisig policy: how it is structured, who signs, and how changes flow through it.

## Purpose

The multisig is the gatekeeper for sensitive on-chain changes. It ensures no single party can unilaterally upgrade contracts, change roles, or move bridge funds outside of agreed procedures.

## Configuration

| Field | Value |
|---|---|
| Address | TBD |
| Signers | TBD |
| Threshold | TBD |
| Time lock | TBD |

The configuration is published once the multisig is deployed and is reflected in [Contract Addresses](../developers/contract-addresses.md).

## Signer policy

- Signers are identified individuals or organizations.
- Signers use hardware-backed signing where possible.
- Signers operate in geographically and organizationally diverse contexts where feasible.
- Compromise reporting is immediate.

## Threshold

The threshold defines how many signers must approve a transaction. It is set high enough that:

- A single compromised signer cannot execute a change.
- A small group of unavailable signers does not block normal operation.

## Workflow

```text
Proposal -> Drafting -> Review -> Signing -> Execution -> Logging
```

- Proposal: agreed change, documented as in [Upgrade Governance](upgrade-governance.md).
- Drafting: the on-chain transaction is drafted in the multisig interface.
- Review: signers verify the transaction matches the proposal byte-for-byte.
- Signing: signers approve from their hardware wallets.
- Execution: once threshold is met, the transaction executes (subject to time lock).
- Logging: entry added to the [Changelog](../reference/changelog.md).

## Verification before signing

Before signing, each signer should:

- Verify the transaction target is the expected contract.
- Verify the function and parameters match the proposal.
- Verify the calldata against an independent diff.

{% hint style="warning" %}
Phishing transactions for signers are a known attack pattern. Always verify calldata, not just the description in a UI.
{% endhint %}

## Key rotation

- Signer keys are rotated on a defined cadence and on suspicion of compromise.
- Departing signers are removed promptly.
- Added signers are documented before they begin signing.

## Lost or compromised keys

- Suspected compromise triggers immediate rotation of the affected signer.
- The remaining signers can execute the rotation per policy.
- Public communication describes the change without compromising security.

## Audit trail

- Multisig transactions are public on chain.
- Each transaction maps to a documented proposal.
- Independent observers can verify alignment.

## Related pages

- [Governance Overview](governance-overview.md)
- [Roles and Permissions](roles-and-permissions.md)
- [Upgrade Governance](upgrade-governance.md)
- [Emergency Actions](emergency-actions.md)
