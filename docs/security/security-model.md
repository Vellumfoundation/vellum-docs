# Security Model

This page describes Vellum's security model. It is intentionally conservative about what Vellum claims and explicit about what it relies on.

{% hint style="warning" %}
Vellum does not claim to be fully decentralized at launch, fully audited at launch, or risk-free. This page states what is and is not claimed.
{% endhint %}

## Settlement inheritance

Vellum settles to Base. Base settles to Ethereum. Vellum's settlement is exactly what Base provides, with Base's settlement being exactly what Ethereum provides.

```text
Ethereum L1
   ↑ (Base settles here)
Base L2
   ↑ (Vellum settles here)
Vellum L3
```

If Base experiences a settlement issue, Vellum is affected. Vellum cannot exceed Base's settlement guarantees.

## Sequencer assumptions

- The sequencer orders Vellum transactions and produces blocks.
- The sequencer is currently a centralized role.
- The sequencer cannot forge state independent of posted batches: anyone replaying batches arrives at the same state.
- The sequencer can become unavailable; this stops new transactions but does not invalidate existing finalized state.

See [Sequencer Risk](sequencer-risk.md).

## Bridge assumptions

- Bridge withdrawals depend on Vellum batch data being posted to Base, output roots being posted to Base, and the finalization window being respected.
- The bridge contract enforces the finalization window.
- Bridge correctness depends on accurate token mapping and on operators not bypassing protections.

See [Bridge Risk](bridge-risk.md).

## Upgrade assumptions

- Vellum can be upgraded; upgrades follow [Upgrade Governance](../governance/upgrade-governance.md).
- Upgrade authority sits with documented roles and multisig signers.
- Upgrades can change behavior; users should follow announcements.

See [Upgrade Risk](upgrade-risk.md) and [Roles and Permissions](../governance/roles-and-permissions.md).

## RPC trust assumptions

- Public RPC endpoints can be operated for high availability but are not absolute trust roots.
- A compromised or malicious RPC can lie about state to a wallet or dapp.
- Critical actions, such as bridge transactions, should be cross-checked on the explorer.

See [RPC Risk](rpc-risk.md).

## User safety assumptions

- Users follow links from this documentation.
- Users do not paste private keys or seed phrases into anything.
- Users verify transaction details before signing.

## Smart contract risk

- Smart contract bugs can affect any deployed contract on Vellum.
- Vellum cannot retroactively fix application contracts.
- Audits and bug bounties reduce but do not eliminate this risk.

## Withdrawal risk

- Withdrawals are not instant. The finalization window applies.
- Bridge bugs or operational issues can delay withdrawals.

See [Withdrawal Finalization](../bridge/withdrawal-finalization.md).

## Finality risk

- Pre-finality reorgs at the sequencer level are constrained but possible.
- Bridge-final state requires the finalization window to pass.

See [Finality](../architecture/finality.md).

## Honest summary

Vellum is a real system with real trust assumptions. It does not claim properties it has not earned. Documentation should be updated as those assumptions evolve.

## Recorded Intelligence considerations

Vellum is built for Recorded Intelligence and agent coordination. That introduces specific things the security model does not promise:

- On-chain records do not guarantee that an AI output is true.
- Verification logic must be designed by the application or protocol that uses Vellum.
- Vellum provides settlement and record infrastructure, not automatic truth.
- Task markets should define their own verifier rules, dispute processes, and settlement conditions.
- Agents should not be trusted only because they have written data on-chain. The data only reflects what was claimed at that block.

{% hint style="warning" %}
Putting a claim on-chain makes it recorded. It does not make it correct. Correctness is a property of the verification logic built around the record.
{% endhint %}

For a deeper look at agent-specific threats, see [Threat Model](threat-model.md).

## Related pages

- [Trust Assumptions](trust-assumptions.md)
- [Threat Model](threat-model.md)
- [Audits](audits.md)
- [Bug Bounty](bug-bounty.md)
