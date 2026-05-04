# Architecture Overview

Vellum is an Ethereum L3 rollup that settles to Base. Transactions execute on Vellum, are sequenced and batched, and are posted down to Base. Base in turn settles to Ethereum L1.

## Layered view

```text
Ethereum L1
   ↑ (settlement)
Base L2
   ↑ (settlement)
Vellum L3
```

Each layer below uses the layer above as its trust anchor for settlement. Vellum's data and state commitments end up reflected on Base, and Base's data and state commitments end up reflected on Ethereum.

## Core components

| Component | Responsibility |
|---|---|
| Sequencer | Orders transactions and produces Vellum blocks |
| Batch submitter | Submits Vellum transaction batches to Base |
| Proposer | Posts Vellum output roots to Base |
| Execution layer | EVM-compatible execution of Vellum transactions |
| Bridge contracts | Move ETH and ERC-20 tokens between Base and Vellum |
| RPC nodes | Serve JSON-RPC traffic from users and applications |
| Indexers | Power explorer, bridge UI, and analytics |
| Monitoring | Tracks chain health and operational metrics |

## Data flow

```text
User tx -> Vellum sequencer -> Vellum block -> batch submitter -> Base
                                            -> proposer -> Base output root
```

1. A user submits a transaction to a Vellum RPC node.
2. The sequencer orders the transaction and includes it in a Vellum block.
3. The batch submitter posts a batch of Vellum transactions to Base.
4. The proposer posts an output root that commits to Vellum state.
5. Bridge withdrawals reference these output roots once they are proven and finalized.

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
