# Bridge Risk

The bridge is the highest-value surface in any rollup. This page summarizes the risks specific to Vellum's bridge.

## Risk categories

| Risk | Where it shows up |
|---|---|
| Smart contract bugs | Bridge contracts on Base or Vellum |
| Configuration error | Token mapping, fee parameters, role assignments |
| Operational failure | Batch submitter or output proposer offline |
| Liveness pressure | Withdrawal queue extended beyond expected window |
| Phishing | Fake bridge frontends, fake token contracts |
| Misuse | Wrong recipient, wrong asset, expired approvals |

## Smart contract bugs

Bridge contracts are critical software. They are subject to:

- Audit before deployment.
- Bug bounty after deployment.
- Conservative upgrade procedures.

See [Audits](audits.md), [Bug Bounty](bug-bounty.md), and [Upgrade Governance](../governance/upgrade-governance.md).

## Configuration error

Examples:

- Wrong token address listed as canonical.
- Wrong messenger address configured.
- Wrong finalization parameters.

Mitigations:

- Verified bridge contract addresses.
- Governance-controlled changes to bridge configuration.
- Public publishing of contract addresses in [Contract Addresses](../developers/contract-addresses.md).

## Operational failure

If the batch submitter or output proposer is offline:

- Withdrawal eligibility delays for users.
- No risk to existing balances.
- Mitigation: monitoring with paging alerts and tested failover.

See [Batch Submission](../architecture/batch-submission.md) and [Output Proposals](../architecture/output-proposals.md).

## Liveness pressure

A surge of withdrawals can extend the apparent finalization window for users in the queue. The window itself is not bypassed; queue depth grows.

## Phishing

The most common threat at the user level. Mitigations:

- Only the bridge URL in [Bridge Overview](../bridge/bridge-overview.md) is official.
- Only the contract addresses in [Contract Addresses](../developers/contract-addresses.md) are official.
- Verify before signing.

## User mistakes

- Sending to the wrong address. Cannot be reversed.
- Bridging the wrong token. Cannot be reversed.
- Approving unlimited allowances unnecessarily.

User-facing guidance: [Bridge to Vellum](../users/bridge-to-vellum.md), [Common Wallet Errors](../users/common-wallet-errors.md).

## What the bridge does not promise

- Instant withdrawals. The finalization window applies.
- Recovery of mis-sent assets.
- Recovery from compromise of user wallets.

## Related pages

- [Bridge Architecture](../architecture/bridge-architecture.md)
- [Bridge Security](../bridge/bridge-security.md)
- [Threat Model](threat-model.md)
- [Audits](audits.md)
- [Bug Bounty](bug-bounty.md)
