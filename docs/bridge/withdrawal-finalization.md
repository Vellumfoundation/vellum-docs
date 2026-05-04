# Withdrawal Finalization

Withdrawals from Vellum to Base are not instant. They follow a proving and finalization process. This page explains why, and what each step looks like.

## The lifecycle

```text
Initiate on Vellum
   ↓
Wait for inclusion on Base (batch submission)
   ↓
Wait for output root covering this state
   ↓
Prove on Base
   ↓
Finalization window
   ↓
Claim on Base
```

| Step | Where | Who pays |
|---|---|---|
| Initiate | Vellum | User |
| Inclusion | Base, automatic | Operator (via batch submitter) |
| Output root posting | Base, automatic | Operator (via output proposer) |
| Prove | Base | User |
| Finalization window | Off-chain wait | None |
| Claim | Base | User |

## Why a finalization window

The finalization window exists to give time for any invalid output root to be detected and challenged before withdrawals based on it are claimed. This is part of how the bridge maintains correctness.

{% hint style="warning" %}
Skipping or shortening the finalization window weakens bridge security. Vellum's bridge does not allow users to bypass it.
{% endhint %}

## Typical durations

The exact durations depend on bridge configuration and chain conditions:

| Stage | Typical timing |
|---|---|
| Inclusion on Base | Minutes |
| Output root posting | Minutes to hours |
| Finalization window | Hours to days |

Plan around the longest plausible duration, not the shortest.

## What can delay finalization

- Base congestion delaying batch submission.
- Operator-side delays in posting output roots.
- Increased bridge usage extending queue times.
- Active incidents pausing finalization.

See [Network Status](../network/network-status.md) and [Bridge Risk](../security/bridge-risk.md).

## What you can do during the wait

- Wait. The bridge UI tracks the state of your withdrawal.
- Confirm transactions on the [block explorer](../network/block-explorer.md).
- Do not initiate the withdrawal twice. The original withdrawal is still progressing.

## Claiming after finalization

Once the finalization window passes, the bridge UI lets you submit the claim transaction on Base. After confirmation, the asset is available in your Base wallet.

## Related pages

- [Withdraw ETH to Base](withdraw-eth-to-base.md)
- [Bridge Architecture](../architecture/bridge-architecture.md)
- [Output Proposals](../architecture/output-proposals.md)
- [Finality](../architecture/finality.md)
