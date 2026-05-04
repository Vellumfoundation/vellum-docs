# Bridge to Vellum

This page is the user-facing summary of bridging assets to and from Vellum.

## What you need

- A wallet that supports custom EVM networks (such as MetaMask).
- ETH on Base for the deposit transaction's gas, plus the ETH you want to bridge.
- The official Vellum bridge URL.

## Bridge URL

| Field | Value |
|---|---|
| Bridge | TBD |

{% hint style="warning" %}
Only use the official bridge URL. Bookmark it. Phishing bridges are common.
{% endhint %}

## Deposit ETH from Base to Vellum

1. Open the official bridge UI.
2. Connect your wallet on Base.
3. Choose Base as the source and Vellum as the destination.
4. Select ETH.
5. Enter the amount.
6. Confirm the deposit transaction.
7. Wait a few minutes for ETH to appear on Vellum.

Detail: [Deposit ETH from Base](../bridge/deposit-eth-from-base.md).

## Bridge ERC-20 tokens

1. Connect your wallet on Base.
2. Pick the token from the token list.
3. Approve the bridge to spend the token if needed.
4. Submit the deposit transaction.
5. Wait for the bridged balance to appear on Vellum.

Detail: [Bridge ERC-20 Tokens](../bridge/bridge-erc20-tokens.md).

## Withdraw to Base

Withdrawals require proving and a finalization window:

1. Initiate the withdrawal on Vellum.
2. Wait for the withdrawal to be eligible to prove on Base.
3. Submit the prove transaction on Base.
4. Wait for the finalization window.
5. Submit the claim transaction on Base.
6. Receive the asset on Base.

Detail: [Withdraw ETH to Base](../bridge/withdraw-eth-to-base.md), [Withdrawal Finalization](../bridge/withdrawal-finalization.md).

## Tips

- Bridge a small test amount the first time you use the bridge.
- Save transaction hashes in case you need support.
- Check the [Network Status](../network/network-status.md) page if a transfer is taking unusually long.

## Common pitfalls

| Pitfall | Avoid by |
|---|---|
| Wrong chain selected | Confirm both source and destination in the UI |
| Wrong recipient address | Verify the address before submitting |
| Insufficient ETH for gas | Top up ETH on the source chain |
| Non-canonical token | Only use tokens from the official token list |

## Related pages

- [Bridge Overview](../bridge/bridge-overview.md)
- [Add Vellum to MetaMask](add-vellum-to-metamask.md)
- [Common Wallet Errors](common-wallet-errors.md)
