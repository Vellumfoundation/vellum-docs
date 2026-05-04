# Trust Assumptions

This page enumerates Vellum's trust assumptions. Each is paired with the system or party that backs it.

## Settlement and data

| Assumption | Backed by |
|---|---|
| Vellum batch data posted to Base remains retrievable | Base data availability |
| Output roots posted to Base reflect Vellum state | Output proposer behavior, verifiable by replay |
| Base settles correctly to Ethereum | Base, with Ethereum L1 as the trust root |
| Ethereum L1 finality is respected | Ethereum L1 |

## Sequencer

| Assumption | Notes |
|---|---|
| The sequencer orders transactions in good faith | Centralized at launch |
| The sequencer cannot forge state independent of posted batches | Verifiable by replay |
| The sequencer may go offline; users tolerate brief windows | Operational, not cryptographic |

## Bridge

| Assumption | Notes |
|---|---|
| Bridge contracts on Base and Vellum are deployed and configured correctly | Deployment and verification |
| Token mappings reflect canonical assets | Bridge configuration controlled by governance |
| Finalization window is enforced by the bridge contracts | Contract-level enforcement |
| Withdrawal proofs reference posted output roots | Bridge logic |

## Upgrades

| Assumption | Notes |
|---|---|
| Upgrade authority is held by documented roles | See [Roles and Permissions](../governance/roles-and-permissions.md) |
| Multisig signers act per [Multisig Policy](../governance/multisig-policy.md) | Operational policy |
| Time locks (where applicable) are honored | Contract enforcement |

## Operators

| Assumption | Notes |
|---|---|
| Public RPC nodes are run by operators identified in this documentation | Operational |
| Operators monitor and respond to incidents | Operational |
| Operators publish status accurately | Operational |

## Users

| Assumption | Notes |
|---|---|
| Users follow official links | User responsibility |
| Users do not paste seed phrases or private keys into untrusted surfaces | User responsibility |
| Users verify transaction details before signing | User responsibility |

## What this list is for

This is the explicit set of statements you are trusting when you use Vellum. If any of these are violated, the corresponding security property is at risk. Treating these as documented is the basis for honest security communication.

## What this list is not

It is not an audit. It is not a guarantee. It is a statement of current operational and design choices that may change as the system matures.

## Related pages

- [Security Model](security-model.md)
- [Threat Model](threat-model.md)
- [Bridge Risk](bridge-risk.md)
- [Sequencer Risk](sequencer-risk.md)
- [Upgrade Risk](upgrade-risk.md)
- [RPC Risk](rpc-risk.md)
