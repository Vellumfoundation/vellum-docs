# Finality

Finality is the property that a transaction will not be reverted by a future change of state. Vellum has multiple levels of finality, each with different guarantees.

## Levels of finality

| Level | What it means | When it happens |
|---|---|---|
| Sequencer-confirmed | The sequencer has included the transaction in a Vellum block | At block production |
| Base-included | The Vellum batch containing the transaction has been posted to Base | After batch submission |
| Base-finalized | The Base block containing the batch is finalized on Base | After Base finality |
| Bridge-final | The output root covering the relevant state has passed Vellum's bridge finalization window | After finalization window |

## What this looks like in practice

- For a normal in-network transaction (Vellum to Vellum), sequencer-confirmed is usually enough for a wallet UI to show success.
- For an exchange or custodian receiving on Vellum, waiting for Base-included or Base-finalized is more conservative.
- For bridge withdrawals from Vellum back to Base, bridge-final is required before claiming. See [Withdrawal Finalization](../bridge/withdrawal-finalization.md).

## Why withdrawals are slower than transfers

The bridge's finalization window exists so that the network has time to challenge invalid output roots before they are used to authorize withdrawals on Base. Skipping or shortening this window weakens bridge security.

{% hint style="warning" %}
Withdrawals are not instant. Documentation that suggests otherwise is incorrect for Vellum's bridge model.
{% endhint %}

## Reorg behavior

- Reorgs at the sequencer level can change ordering of unconfirmed Vellum transactions.
- Once batches are posted to Base and Base finalizes them, Vellum's view of those transactions is stable to the same degree Base is stable.
- Reorgs on Base, in the rare event they occur, propagate to Vellum.

## Recommended confirmation policy

| Use case | Recommended level |
|---|---|
| Casual wallet send | Sequencer-confirmed |
| Higher-value transfer | Base-included |
| Custodial deposit | Base-finalized |
| Bridge withdrawal claim | Bridge-final |

## Related pages

- [Output Proposals](output-proposals.md)
- [Withdrawal Finalization](../bridge/withdrawal-finalization.md)
- [Trust Assumptions](../security/trust-assumptions.md)
