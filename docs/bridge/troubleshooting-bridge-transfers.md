# Troubleshooting Bridge Transfers

If a bridge transfer is not behaving as expected, this page covers the most common causes and what to check.

## Before you start

Have ready:

- The transaction hash on the source chain.
- The destination address.
- The asset and amount.
- The bridge UI you used.
- Approximate timestamps.

## Deposit appears to be missing on Vellum

Likely causes:

- The deposit is still being processed. Deposits typically take minutes.
- The wrong destination network was selected.
- The wallet is connected to the wrong chain in the explorer or wallet UI.
- A non-canonical bridge UI was used.

Checks:

1. Confirm the deposit transaction succeeded on Base.
2. Confirm the recipient address is the address you expect on Vellum.
3. Open the Vellum [block explorer](../network/block-explorer.md) and check the recipient address for incoming transfers.
4. Wait several more minutes if the deposit is recent.
5. Check the [Network Status](../network/network-status.md) page.

## Withdrawal not yet eligible to prove

Likely causes:

- The Vellum batch containing your withdrawal has not been posted to Base yet.
- The output root covering your withdrawal has not been posted yet.

Checks:

1. Confirm the withdrawal initiation succeeded on Vellum.
2. Wait for the bridge UI to update.
3. Check the [Network Status](../network/network-status.md) page for incidents affecting batch submission or output proposing.

## Withdrawal not yet finalizable

Cause:

- The finalization window has not passed.

Action:

- Wait until the bridge UI indicates the withdrawal can be claimed.

{% hint style="warning" %}
Do not initiate the withdrawal again. Doing so will not speed up finalization and will use more gas.
{% endhint %}

## Approval rejected

Cause:

- Insufficient ETH for gas on the source chain.
- Wallet is not connected to the correct network.

Action:

- Top up ETH for gas on the source chain.
- Confirm the wallet network matches the source chain in the bridge UI.

## Wrong recipient address

If a deposit or withdrawal was sent to a wrong address you control:

- The asset is at the address you sent it to. Connect a wallet at that address.

If sent to an address you do not control:

- The bridge cannot reverse the transaction.

{% hint style="danger" %}
Always verify the recipient address before submitting a bridge transaction.
{% endhint %}

## Bridge UI shows an unexpected status

Causes:

- Indexer lag.
- Active incident.
- Unsupported asset or non-canonical token.

Action:

- Refresh the bridge UI.
- Confirm the asset is on the supported token list.
- Check the [Network Status](../network/network-status.md) page.

## Reporting an issue

If you have exhausted the checks above, contact support through the channels listed in [Links](../reference/links.md). Include:

- Source and destination transaction hashes.
- Wallet address.
- Asset and amount.
- Bridge UI URL.
- Approximate timestamps.

## Related pages

- [Bridge Overview](bridge-overview.md)
- [Withdrawal Finalization](withdrawal-finalization.md)
- [Common Wallet Errors](../users/common-wallet-errors.md)
- [Network Status](../network/network-status.md)
