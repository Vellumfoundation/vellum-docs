# Deposit ETH from Base

This page explains how to move ETH from Base to Vellum. ETH on Vellum is used as native gas, so this is the most common bridging operation.

## What you need

- A wallet connected to Base.
- ETH on Base to deposit, plus ETH on Base to pay for the deposit transaction's gas.
- The official Vellum bridge URL.

## Step by step

1. Open the official Vellum bridge UI. URL: TBD.
2. Connect a wallet that holds ETH on Base.
3. Make sure the source network is set to Base and the destination is Vellum.
4. Select ETH as the asset.
5. Enter the amount to deposit.
6. Confirm the deposit transaction in your wallet.
7. Wait for confirmation. The bridge UI will reflect when the deposit is credited on Vellum.

## What happens behind the scenes

```text
Wallet on Base
   ↓ deposit tx
Base bridge contracts hold ETH
   ↓ deposit message
Vellum credits ETH to your address
```

For the architecture-level view, see [Bridge Architecture](../architecture/bridge-architecture.md).

## Timing

Deposits are typically reflected on Vellum within minutes. The exact time depends on:

- Base block time and confirmation policy.
- Vellum deposit processing.
- Network congestion.

{% hint style="info" %}
If a deposit does not appear after a longer-than-expected wait, see [Troubleshooting Bridge Transfers](troubleshooting-bridge-transfers.md).
{% endhint %}

## Recipient address

By default, the recipient on Vellum is the same as the sender on Base. Some bridge UIs allow specifying a different recipient. If you specify a different recipient, double-check the address.

{% hint style="danger" %}
If you send to the wrong address, the deposit cannot be reversed. Always verify the recipient before submitting.
{% endhint %}

## Costs

- ETH on Base for the deposit transaction's gas.
- The amount of ETH being deposited.
- No additional Vellum-side cost is required to receive the deposit.

## Verifying the deposit

- Check the deposit transaction on the Base block explorer.
- Once credited, check your balance on the Vellum [block explorer](../network/block-explorer.md).
- Confirm the wallet shows the ETH on Vellum.

## Related pages

- [Bridge Overview](bridge-overview.md)
- [Bridge ERC-20 Tokens](bridge-erc20-tokens.md)
- [Withdraw ETH to Base](withdraw-eth-to-base.md)
- [Troubleshooting Bridge Transfers](troubleshooting-bridge-transfers.md)
