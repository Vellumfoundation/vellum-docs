# Execution Layer

Vellum's execution layer is EVM-compatible. Solidity contracts, EVM bytecode, opcodes, ABI semantics, gas accounting, precompiles, and standard event log behavior follow the Ethereum specification.

## Why EVM compatibility

- Existing audits and libraries apply directly.
- Standard tooling works without modification: Hardhat, Foundry, ethers.js, viem, thirdweb, Remix.
- Wallet support is universal across EVM wallets.
- Patterns that developers already know transfer to Vellum.

## Supported

| Feature | Supported |
|---|---|
| Solidity contracts | Yes |
| Standard EVM opcodes | Yes |
| ERC-20, ERC-721, ERC-1155 | Yes |
| Standard precompiles | Yes |
| EIP-1559 fee market | Yes |
| EIP-155 replay protection | Yes |
| Logs and events | Yes |
| Standard JSON-RPC methods | Yes |

## Differences from Ethereum L1

Differences are typical for OP Stack style chains:

- Block times are shorter than L1.
- Gas costs reflect L3 economics, including a settlement contribution.
- Some L1-only block fields and behaviors do not apply.

## Predeploys

Vellum ships with a set of system contracts at fixed predeploy addresses. They handle bridge messaging, fee accounting, and other system functions.

See [Predeploys](../developers/predeploys.md) for the canonical list.

## Block production

The Vellum sequencer produces blocks at a fixed cadence. See [Sequencing](sequencing.md).

## Replay protection

Vellum uses EIP-155 replay protection. Signed transactions reference Vellum's chain ID. Signatures bound to a different chain ID will be rejected.

## Reorg behavior

Local Vellum reorgs are constrained by the sequencer policy and by the cadence of batch submission to Base. Once data is posted to Base and accepted, ordering is stable to the same degree Base is stable. See [Finality](finality.md).

## What is not changed

- The EVM opcode set.
- Solidity semantics.
- Gas metering model.
- Standard token interfaces.

If your contract works on Base or another OP Stack chain, it should work on Vellum without modification.

## Recorded Intelligence contract categories

Vellum is designed for Recorded Intelligence. The execution layer is generic EVM, but the contract patterns expected to be common on Vellum include:

| Category | Purpose |
|---|---|
| `TaskMarket` | Publish tasks, accept bids, track completion |
| `AgentRegistry` | Register agents, roles, and capabilities |
| `CommitmentRegistry` | Record execution commitments and their states |
| `VerificationRegistry` | Record verifier identities and verification decisions |
| `OutcomeRegistry` | Persistent records of results, predictions, and disputes |
| `ReputationRegistry` | Derive scores or histories from past records |
| `DisputeManager` | Run dispute flows for contested outcomes |
| `SettlementVault` | Hold funds and release on verified outcomes |
| `SignalRegistry` | Record agent signals and predictions |
| `PredictionMarketAdapter` | Tie predictions to outcomes and settlement |

These are example protocol primitives. They are patterns applications can deploy as Solidity contracts. They are not all live system contracts at launch.

For a working example contract, see [Deploy a Contract](../developers/deploy-a-contract.md). For a developer-oriented walkthrough, see [Build Agent Applications](../developers/build-agent-apps.md).

## Related pages

- [L3 Rollup Architecture](l3-rollup-architecture.md)
- [Sequencing](sequencing.md)
- [Predeploys](../developers/predeploys.md)
- [Gas and Fees](../developers/gas-and-fees.md)
