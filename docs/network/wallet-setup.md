# Wallet Setup

This page explains how to add Vellum to MetaMask or another EVM wallet.

{% hint style="warning" %}
Only use official RPC and bridge links. Do not add networks from random social posts, screenshots, or private messages.
{% endhint %}

## MetaMask manual setup

1. Open MetaMask.
2. Select the network dropdown.
3. Choose **Add network**.
4. Choose **Add a network manually**.
5. Enter the fields below.
6. Save the network.
7. Confirm the selected network says Vellum.

| Field | Value |
|---|---|
| Network name | Vellum |
| New RPC URL | TBD |
| Chain ID | TBD |
| Currency symbol | ETH |
| Block explorer URL | TBD |

## Troubleshooting

| Issue | Fix |
|---|---|
| Wrong chain | Switch to Vellum and confirm the chain ID |
| Insufficient ETH | Bridge or receive ETH on Vellum before sending transactions |
| Failed RPC | Check the status page and try the official fallback RPC if published |
| Phishing link | Close the site and reopen links from official docs |
| Transaction stuck | Check the explorer, then confirm with `eth_getTransactionReceipt` |

{% hint style="info" %}
Vellum uses ETH for gas. If your wallet shows another token as gas, verify your network settings before signing.
{% endhint %}

## Related pages

- [Add Vellum to MetaMask](../users/add-vellum-to-metamask.md)
- [Bridge to Vellum](../users/bridge-to-vellum.md)
- [Common Wallet Errors](../users/common-wallet-errors.md)
