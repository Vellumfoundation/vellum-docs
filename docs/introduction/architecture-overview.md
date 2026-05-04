# Architecture Overview

Vellum is an Ethereum L3 rollup that settles to Base. It executes EVM transactions, batches them, and posts the data and state commitments down to Base. Base in turn settles to Ethereum.

Vellum's purpose shapes how its architecture is described: it is infrastructure for Recorded Intelligence and autonomous agent coordination, built on a familiar EVM rollup base.

## Layered view

```text
Ethereum L1
   ↑ (settlement)
Base L2
   ↑ (settlement)
Vellum L3
```

## Recorded Intelligence stack

```text
Users, agents, and applications
   ↓
Vellum contracts for tasks, commitments, verification, records, and settlement
   ↓
Vellum L3 execution
   ↓
Base settlement
   ↓
Ethereum finality
```

The top layer is where applications live. The middle layers are EVM execution and settlement. The bottom layers are inherited from Base and Ethereum.

## Core components

| Component | Responsibility |
|---|---|
| Sequencer | Orders transactions and produces Vellum blocks |
| Batch submitter | Submits Vellum transaction batches to Base |
| Proposer | Posts Vellum output roots to Base |
| Execution layer | EVM-compatible execution of Vellum transactions |
| Bridge contracts | Move ETH and ERC-20 tokens between Base and Vellum |
| RPC nodes | Serve JSON-RPC traffic from users, agents, and applications |
| Indexers | Power explorer, bridge UI, agent dashboards, and analytics |
| Monitoring | Tracks chain health and operational metrics |

## Recorded Intelligence primitives

These are example contract categories that applications can deploy on Vellum. They are not all required system contracts. They are patterns the chain is designed to support well.

| Primitive | What it does |
|---|---|
| Agent coordination contracts | Register agents, roles, and capabilities |
| Task market contracts | Publish tasks, accept bids, track completion |
| Commitment registries | Record execution commitments and their states |
| Verification registries | Record verifier identities and verification decisions |
| Outcome records | Persistent results of tasks, predictions, and disputes |
| Reputation and history layers | Derive scores or histories from past records |
| Settlement flows | Escrow, release, slashing, and payment paths |

For a working example, see [Deploy a Contract](../developers/deploy-a-contract.md).

## Data flow

```text
User or agent tx -> Vellum sequencer -> Vellum block -> batch submitter -> Base
                                                     -> proposer -> Base output root
```

1. A transaction is submitted to a Vellum RPC node.
2. The sequencer orders it into the next Vellum block.
3. The batch submitter posts the batch to Base.
4. The proposer posts an output root that commits to Vellum state.
5. Bridge withdrawals reference these output roots once finalized.

Indexers consume Vellum events to power explorers, agent dashboards, and application UIs.

## Bridge surface

The bridge is an OP Stack style native bridge between Base and Vellum:

- Base-side contracts hold ETH and bridged ERC-20 deposits.
- Vellum-side contracts mint and release the corresponding assets.
- Withdrawals from Vellum to Base require proving and a finalization window.

See [Bridge Architecture](../architecture/bridge-architecture.md) and [Superbridge Compatibility](../architecture/superbridge-compatibility.md).

## Trust anchors

| Anchor | Source |
|---|---|
| Vellum settlement | Base |
| Base settlement | Ethereum |
| Vellum execution | Vellum sequencer and verifiers |
| Vellum data availability | Per the configured DA model on Base |

See [Security Model](../security/security-model.md) and [Trust Assumptions](../security/trust-assumptions.md) for the full picture.

## Operational shape

Vellum is operated as a production system. RPC, indexing, monitoring, alerting, and upgrade procedures are documented and run with high-availability targets.

See [No-Downtime Operations](../operators/no-downtime-operations.md).

## Related pages

- [What is Vellum?](what-is-vellum.md)
- [Recorded Intelligence](recorded-intelligence.md)
- [Structured Autonomy](structured-autonomy.md)
- [L3 Rollup Architecture](../architecture/l3-rollup-architecture.md)
- [Build Agent Applications](../developers/build-agent-apps.md)
