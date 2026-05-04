# Add Vellum to MetaMask

This page walks through adding Vellum as a custom network in MetaMask.

## Required values

| Field | Value |
|---|---|
| Network name | Vellum |
| New RPC URL | TBD |
| Chain ID | TBD |
| Currency symbol | ETH |
| Block explorer URL | TBD |

{% hint style="warning" %}
Use only the values published in this documentation. Phishing sites often imitate these fields.
{% endhint %}

## Steps

1. Open MetaMask.
2. Click the network dropdown at the top of the wallet.
3. Click **Add a network**.
4. Click **Add a network manually**.
5. Fill in the fields above:
   - Network name: `Vellum`
   - New RPC URL: `TBD`
   - Chain ID: `TBD`
   - Currency symbol: `ETH`
   - Block explorer URL: `TBD`
6. Click **Save**.
7. Switch to Vellum from the network dropdown.

## Confirm it worked

- The wallet shows ETH as the asset.
- The chain ID under network details matches the value above.
- The Vellum [block explorer](../network/block-explorer.md) shows recent blocks.

## Funding ETH for gas

You will need ETH on Vellum to send any transaction. Options:

- Bridge ETH from Base. See [Deposit ETH from Base](../bridge/deposit-eth-from-base.md).
- Receive ETH from another Vellum address.
- For testnet, request from a [faucet](../network/faucets.md).

## Removing a wrong network

If you previously added Vellum with incorrect values:

1. Open MetaMask.
2. Click the network dropdown.
3. Click the gear icon to manage networks.
4. Find the incorrect entry and remove it.
5. Re-add with the correct values from this page.

## Related pages

- [Wallet Setup](../network/wallet-setup.md)
- [Common Wallet Errors](common-wallet-errors.md)
- [Bridge to Vellum](bridge-to-vellum.md)
