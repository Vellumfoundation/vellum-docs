# Send ETH

This page covers sending ETH between addresses on Vellum.

## What you need

- A wallet connected to Vellum.
- Enough ETH on Vellum for the amount being sent and gas.

## Steps

1. Open your wallet and switch to Vellum.
2. Click **Send**.
3. Paste or scan the recipient address.
4. Enter the amount in ETH.
5. Review gas details. Wallets handle estimation automatically.
6. Confirm.
7. Wait for the transaction to be included. Wallets typically show success within a few seconds.

## Verify the transaction

- The wallet should show the transaction as confirmed.
- Open the Vellum [block explorer](../network/block-explorer.md), search the transaction hash, and verify status.
- The recipient should see the ETH credited.

## Tips

- Double-check the address before sending. Transactions cannot be reversed.
- Bookmark frequently used addresses in your wallet to reduce typo risk.
- If you maintain large balances, consider using a hardware wallet.

## Common errors

| Symptom | Likely cause | Fix |
|---|---|---|
| `insufficient funds for gas` | No ETH on Vellum | Bridge ETH from Base or receive from another address |
| Transaction stuck | Network congestion or low gas | Wait, or speed up via wallet UI |
| Wrong network | Wallet was on a different chain | Switch the wallet to Vellum |

## Cross-chain confusion

ETH on Vellum is not the same balance as ETH on Base or Ethereum. Each chain has its own balance for the same address. To move ETH between Vellum and Base, use the [bridge](bridge-to-vellum.md).

## Related pages

- [Receive ETH](receive-eth.md)
- [Add Vellum to MetaMask](add-vellum-to-metamask.md)
- [Common Wallet Errors](common-wallet-errors.md)
- [Gas and Fees](../developers/gas-and-fees.md)
