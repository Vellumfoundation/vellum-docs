# Data Availability

Data availability (DA) is the guarantee that the data needed to reconstruct Vellum state is publicly retrievable. It is what allows independent parties to verify Vellum execution rather than trusting the sequencer.

## Where Vellum data goes

Vellum's transaction batches are posted to Base. Base's data, in turn, is posted to Ethereum. The result is a chain of publicly retrievable data:

```text
Vellum batch
   ↓
Base (transaction data and blobs)
   ↓
Ethereum L1 (Base's settlement)
```

Anyone with read access to Base can retrieve Vellum batches and replay them.

## Why this matters

- It prevents the sequencer from rewriting history undetectably.
- It allows third-party verifiers to confirm Vellum state.
- It underpins bridge withdrawal correctness: without DA, output roots cannot be safely trusted.

## What DA does not guarantee

DA does not guarantee:

- That every node has indexed the data.
- That every RPC node serves the data on demand.
- That the data is presented in any particular UI.

It guarantees that the data exists on Base and can be retrieved from Base by any participant.

## Trust assumptions

| Assumption | Source |
|---|---|
| Vellum batch data posted to Base remains available | Base's data availability properties |
| Base settles to Ethereum as documented | Ethereum, via Base |
| No off-chain DA shortcut is used for Vellum's canonical data | Vellum operational policy |

See [Trust Assumptions](../security/trust-assumptions.md).

## Failure modes

| Failure | Effect | Mitigation |
|---|---|---|
| Vellum batch submission delayed | Vellum state lags on Base | Operator alert and recovery |
| Base outage | Vellum data not posted until Base is healthy | Wait for Base recovery |
| Misconfigured batch contract | Batches rejected on Base | Reconfigure and resubmit |

## Related pages

- [Batch Submission](batch-submission.md)
- [Output Proposals](output-proposals.md)
- [Finality](finality.md)
- [Bridge Risk](../security/bridge-risk.md)
