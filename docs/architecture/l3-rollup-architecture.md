# L3 Rollup Architecture

Vellum is an Ethereum L3 rollup above Base.

## Lifecycle

```text
Transaction
   ↓
Sequencer
   ↓
L3 block
   ↓
Batch data posted to Base
   ↓
Output root posted
   ↓
Withdrawal proof and finalization
```

## Components

| Component | Responsibility |
|---|---|
| Execution node | Executes EVM state transitions |
| Sequencer | Orders transactions and builds blocks |
| Batcher | Posts data or batches to Base |
| Proposer | Posts output roots |
| Bridge contracts | Handle deposits and withdrawals |
| RPC layer | Serves wallets and applications |

## Launch checks

- Genesis generated from deployment artifacts.
- Rollup config generated from deployment artifacts.
- Batch inbox address published.
- System config address published.
- Bridge addresses published.
- Explorer indexing confirmed.

## Related pages

- [Sequencing](sequencing.md)
- [Output Proposals](output-proposals.md)
- [High Availability Design](high-availability-design.md)
