# Wallet Setup

This page walks through adding Vellum to a standard EVM wallet such as MetaMask. The same fields apply to other wallets that support custom networks.

## Required fields

| Field | Value |
|---|---|
| Network name | Vellum |
| New RPC URL | TBD |
| Chain ID | TBD |
| Currency symbol | ETH |
| Block explorer URL | TBD |

{% hint style="warning" %}
Only use the official RPC URL, bridge URL, and explorer URL published in this documentation. Phishing sites often imitate chain configurations to drain wallets. Verify links before signing transactions.
{% endhint %}

## Add Vellum to MetaMask manually

1. Open MetaMask.
2. Click the network selector at the top of the wallet.
3. Click **Add a network**.
4. Click **Add a network manually**.
5. Fill in:
   - Network name: `Vellum`
   - New RPC URL: `TBD`
   - Chain ID: `TBD`
   - Currency symbol: `ETH`
   - Block explorer URL: `TBD`
6. Click **Save**.
7. Switch to the Vellum network from the network selector.

## Confirm the network is working

After switching:

1. Make sure the wallet shows ETH as the asset.
2. The chain ID under MetaMask network details should match the Chain ID above.
3. Open the [block explorer](block-explorer.md) and confirm a recent block is visible.

## Funding ETH for gas

You will need ETH on Vellum to send transactions. Options:

- Bridge ETH from Base. See [Deposit ETH from Base](../bridge/deposit-eth-from-base.md).
- Receive ETH from another Vellum user.
- For testnet, use a [faucet](faucets.md).

## Troubleshooting

### Wrong chain

Symptom: transactions fail or the wallet rejects sends.

Fix: confirm the chain ID in MetaMask matches the Vellum chain ID. If not, update the network configuration.

### Insufficient ETH

Symptom: the wallet rejects sends with an "insufficient funds for gas" message.

Fix: bridge or receive ETH on Vellum. Gas is paid in ETH.

### Failed RPC

Symptom: balance does not load, transactions stall, or the wallet shows a connection error.

Fix:

1. Reload the wallet.
2. Confirm the RPC URL matches the official URL in this documentation.
3. Check the [Network Status](network-status.md) page for incidents.
4. If the issue persists, try again after a few minutes.

### Phishing links

Symptom: a site or message asks you to add Vellum with values that do not match this documentation.

Fix: do not add the network. Do not connect a wallet. Use only the values published here.

{% hint style="danger" %}
Never paste a seed phrase or private key into a site or chat. Vellum infrastructure will never ask for either.
{% endhint %}

See [Common Wallet Errors](../users/common-wallet-errors.md) for additional issues.
