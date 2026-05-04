# Output Proposals

The output proposer posts Vellum output roots to Base. Output roots commit to Vellum state and are the reference points used by the bridge to authorize withdrawals.

## What an output root is

An output root is a cryptographic commitment to Vellum state at a specific block. It is computed from Vellum block data and posted to Base on a regular cadence.

## Why output roots matter

- Bridge withdrawals on Base reference posted output roots.
- Posting an output root is what makes a Vellum withdrawal eligible for proving.
- Output roots create a public, ordered ledger of Vellum state commitments.

## Cadence

Output roots are posted on a defined cadence. The cadence balances:

- Withdrawal latency: more frequent roots reduce time-to-prove for withdrawals.
- Cost: each posting consumes Base gas.
- Operational stability: cadence must align with batch submission.

## Withdrawal lifecycle, at the output proposal layer

```text
Vellum withdrawal initiated
        ↓
State change posted in batch (batch submitter)
        ↓
Output root covering this state posted to Base (output proposer)
        ↓
Withdrawal can be proven on Base
        ↓
Finalization window
        ↓
Withdrawal can be claimed on Base
```

See [Withdrawal Finalization](../bridge/withdrawal-finalization.md).

## Failure modes

| Failure | Effect | Mitigation |
|---|---|---|
| Proposer offline | New output roots delayed; withdrawals cannot be proven | Restart proposer; failover instance |
| Base congestion | Output root posting delayed | Wait for capacity; adjust fee strategy |
| Proposer address out of funds | Cannot post roots | Top up the proposer address |
| Disagreement between proposer and batch data | Risk of incorrect state commitment | Pause and investigate; do not finalize |

Operators alert on `proposer_lag` and on any divergence between proposer state and replayed state.

## What output proposals do not do

- They do not validate transactions on their own.
- They do not skip the finalization window.
- They cannot replace data availability: bridge security depends on data being posted by the batch submitter as well.

## Related pages

- [Batch Submission](batch-submission.md)
- [Withdrawal Finalization](../bridge/withdrawal-finalization.md)
- [Finality](finality.md)
- [Monitoring](../operators/monitoring.md)
