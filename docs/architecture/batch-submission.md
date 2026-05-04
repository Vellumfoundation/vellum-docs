# Batch Submission

The batch submitter posts Vellum transaction data to Base. This is the step that makes Vellum data publicly available on its parent chain.

## What gets posted

| Item | Posted to | Posted by |
|---|---|---|
| Vellum transaction batches | Base | Batch submitter |

A batch contains the compressed transaction data needed to reconstruct Vellum blocks. Anyone replaying the batches arrives at the same Vellum state, given the same starting point.

## Why batching matters

- It is more economical to amortize the cost of posting across many transactions.
- It produces a public record of Vellum activity on Base.
- It is the basis for verifiability: replaying batches reproduces Vellum state.

## Submission cadence

Batches are submitted on a regular cadence. The exact cadence is tuned to balance:

- Cost of posting to Base.
- Time-to-availability of data.
- Withdrawal latency, which depends on data and output roots being posted.

## Failure modes

| Failure | Effect | Mitigation |
|---|---|---|
| Batch submitter offline | New batches not posted; settlement progress halts | Restart submitter; failover instance |
| Base congestion | Batch posting delayed | Wait for Base capacity; raise fee strategy |
| Batch submitter funds exhausted | Cannot post batches | Refund the submitter address |
| Misconfigured batch contract | Batches rejected on Base | Reconfigure and resubmit |

Operators monitor batch submission lag as a primary metric. See [Monitoring](../operators/monitoring.md).

## What batch submission does not do

- It does not finalize bridge withdrawals on its own. That requires output roots and a finalization window. See [Output Proposals](output-proposals.md) and [Withdrawal Finalization](../bridge/withdrawal-finalization.md).
- It does not validate Vellum execution. Verification happens by replaying posted data.

## Operator notes

- Monitor `batch_submission_lag` actively.
- Alert when lag exceeds a defined threshold.
- Keep the submitter address funded above a safety margin.
- Practice failover.

## Related pages

- [Output Proposals](output-proposals.md)
- [Data Availability](data-availability.md)
- [Monitoring](../operators/monitoring.md)
- [Incident Response](../operators/incident-response.md)
