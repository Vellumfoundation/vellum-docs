# L3 Rollup Architecture

Vellum is an L3 rollup. It executes transactions, sequences them into blocks, batches those transactions, and posts the batches plus output commitments to its parent chain, Base.

## Components at a glance

```text
[Users]            [Apps]
   \\                /
    \\              /
     [ Vellum RPC ]
           |
     [ Sequencer ]----> [ Vellum block ]
           |
     [ Batch submitter ] --batches--> [ Base L2 ]
           |
     [ Output proposer ] --roots--> [ Base L2 ]
                                       |
                                  [ Ethereum L1 ]
```

## Roles

| Role | Function |
|---|---|
| Sequencer | Orders incoming transactions and produces Vellum blocks |
| Batch submitter | Posts Vellum transaction batches to Base |
| Output proposer | Posts Vellum output roots to Base |
| Verifier | Replays Vellum blocks from posted data and checks state |
| Bridge contracts | Coordinate deposits and withdrawals between Base and Vellum |

## The L3 distinction

A traditional L2 rollup posts data and outputs to L1 (Ethereum). An L3 rollup posts data and outputs to its L2 parent. For Vellum, that parent is Base. Base in turn posts to Ethereum.

This means:

- Vellum users experience block production at the Vellum layer.
- Vellum settlement happens on Base.
- Base settlement happens on Ethereum.

## Block lifecycle

1. A user submits a transaction to a Vellum RPC node.
2. The RPC node forwards the transaction to the sequencer.
3. The sequencer orders the transaction into the next Vellum block.
4. The block is broadcast to other Vellum nodes and indexers.
5. The batch submitter packs Vellum transactions into a batch and posts it to Base.
6. The output proposer posts an output root for Vellum state to Base.
7. Bridge withdrawals can reference posted output roots once finalized.

## Why this shape

- Posting batches to Base inherits Base's data availability assumptions.
- Posting output roots to Base anchors Vellum state in a trust path that ends at Ethereum.
- Using a sequencer keeps user-facing latency low and predictable.

## Reorg behavior

Vellum's local block ordering can change in narrow circumstances before settlement. After Vellum data is posted to Base and accepted, that ordering is stable to the extent Base is stable. Practical confirmations follow the [Finality](finality.md) page.

## Verifiability

Anyone with access to the data posted to Base can replay Vellum blocks and verify state transitions independently. This is what gives the L3 rollup model its security relative to a sidechain.

## Related pages

- [Sequencing](sequencing.md)
- [Batch Submission](batch-submission.md)
- [Output Proposals](output-proposals.md)
- [Finality](finality.md)
- [Data Availability](data-availability.md)
