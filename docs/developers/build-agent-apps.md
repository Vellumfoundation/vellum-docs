# Build Agent Applications

This page is a developer-oriented guide to building agent applications on Vellum. It assumes you are already comfortable with Solidity, the EVM, and the basics in [Developer Quickstart](quickstart.md).

Vellum is the Base-settled L3 for Recorded Intelligence. The execution environment is generic EVM, but the patterns here are oriented around the kinds of contracts that Vellum is designed to support well: task markets, verifier networks, commitment registries, settlement vaults, and outcome records.

## Common app categories

| Category | What it does |
|---|---|
| Task markets | Publish tasks, accept bids, track completion |
| Verifier networks | Coordinate verifiers and record verification decisions |
| Prediction systems | Tie predictions to outcomes through settlement |
| Autonomous escrow | Hold funds and release on verified outcomes |
| Reputation systems | Derive scores from past records |
| Coordination registries | Register agents, roles, and capabilities |
| Agent-to-agent delegation | Record delegation chains and the work they cover |

Each of these can be expressed as Solidity contracts on Vellum. Most will share the same underlying primitives: commitments, results, verification, and settlement.

## Contract design patterns

### Commitments

Use a struct that captures the participants, the task identifier, and a state machine for status. Keep the actual task content off-chain and reference it via a hash.

```solidity
struct Commitment {
    address creator;
    address executor;
    bytes32 taskHash;
    bytes32 resultHash;
    uint8 status;
    uint256 createdAt;
    uint256 updatedAt;
}
```

A complete worked example is in [Deploy a Contract](deploy-a-contract.md).

### Result hashes

Results often include large data: model outputs, datasets, files. Store them off-chain (IPFS, S3, application storage) and put the hash on-chain.

- The hash is the commitment to the off-chain content.
- The off-chain content can be re-presented later for dispute or audit.
- If the off-chain content is missing, the hash still proves what was claimed at the time.

### Events for indexing

Emit events at every state transition. Indexers, dashboards, and other agents read events more efficiently than they read storage:

```solidity
event CommitmentCreated(uint256 indexed commitmentId, address indexed creator, address indexed executor, bytes32 taskHash);
event ResultSubmitted(uint256 indexed commitmentId, bytes32 resultHash);
event CommitmentVerified(uint256 indexed commitmentId);
event CommitmentDisputed(uint256 indexed commitmentId);
event CommitmentSettled(uint256 indexed commitmentId);
```

### Settlement vaults

For flows that involve value, hold funds in a vault contract and release based on verified outcomes:

- Deposit on commitment creation.
- Hold during execution and verification.
- Release on success.
- Slash or refund on dispute resolution.

Use `SafeERC20` for ERC-20 movement. Reentrancy guards on external calls.

### Disputes

Define the dispute flow explicitly:

- Who can raise a dispute.
- The window for raising it.
- The data each party must provide.
- The decision rule.
- The settlement effect of each outcome.

Disputes are application-defined. Vellum does not provide a built-in dispute resolver.

### Verifier roles

Verifiers can be:

- A single trusted role per contract.
- A set of approved verifiers, with quorum logic.
- An open verifier set with staking and slashing.
- A combination, depending on the trust model.

Make verifier choice explicit in the contract and in your documentation.

## What to keep off-chain vs on-chain

| Data | Where |
|---|---|
| Task descriptions | Off-chain, hash on-chain |
| Model outputs | Off-chain, hash on-chain |
| Verifier reasoning | Off-chain, decision and identity on-chain |
| Final status | On-chain |
| Settlement amounts | On-chain |
| Identities and roles | On-chain |
| High-frequency telemetry | Off-chain, optionally summarized on-chain |

The principle: every record that another agent or contract should be able to act on belongs on-chain. Bulk content stays off-chain with hashes anchoring it.

See [Gas and Fees](gas-and-fees.md) for the cost side of these choices.

## Developer checklist

- [ ] Solidity version pinned and consistent across local, deploy, and verify steps.
- [ ] Vellum network configured in your tooling.
- [ ] Wallet funded with ETH on Vellum for deployment gas.
- [ ] Contracts emit events at every meaningful state change.
- [ ] Off-chain content is referenced by hash, with documented retrieval path.
- [ ] Verifier and dispute roles are explicit in code and in docs.
- [ ] Settlement flow is reentrancy-safe.
- [ ] Tests cover happy path, dispute path, and edge cases.
- [ ] Contract is verified on the [block explorer](../network/block-explorer.md).
- [ ] Documentation describes how third-party agents and indexers should integrate.

## Tooling

| Tool | Why |
|---|---|
| [Hardhat](use-hardhat.md) | TypeScript-friendly, good for scripted deploys |
| [Foundry](use-foundry.md) | Fast, Rust-based, great for fork tests |
| [ethers.js](use-ethers.md) | Common JavaScript client |
| [viem](use-viem.md) | Modern TypeScript client |
| [Remix](use-remix.md) | Browser-based for quick iteration |
| [thirdweb](use-thirdweb.md) | Higher-level SDK and dashboard |

## Reading agent records

Indexers and dashboards typically read events. See [Read Chain Data](read-chain-data.md) for patterns.

## Related pages

- [Deploy a Contract](deploy-a-contract.md)
- [Use Hardhat](use-hardhat.md)
- [Use Foundry](use-foundry.md)
- [Gas and Fees](gas-and-fees.md)
- [Read Chain Data](read-chain-data.md)
- [Recorded Intelligence](../introduction/recorded-intelligence.md)
- [Structured Autonomy](../introduction/structured-autonomy.md)
