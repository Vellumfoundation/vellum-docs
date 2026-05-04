# Chain ID and Currency

Vellum is identified by a unique chain ID. ETH is the native currency for gas and value transfers.

## Chain ID

| Field | Value |
|---|---|
| Chain ID | TBD |
| Chain ID (hex) | TBD |

{% hint style="warning" %}
The final Vellum chain ID is not yet published. Do not assume any specific value.
{% endhint %}

The chain ID prevents replay of signed transactions across networks. Wallets and tooling include the chain ID in EIP-155 transactions and signature requests.

## Native currency

| Field | Value |
|---|---|
| Name | Ether |
| Symbol | ETH |
| Decimals | 18 |

ETH is the native currency for:

- Paying gas on Vellum.
- Sending value between externally owned accounts.
- Funding contract deployments.
- Funding interactions with smart contracts.

{% hint style="info" %}
Vellum does not use a custom token for gas. ETH is the gas token. Ecosystem tokens may be deployed as ERC-20 contracts but are not used for native gas.
{% endhint %}

## Funding ETH on Vellum

Users can obtain ETH on Vellum by:

- Bridging ETH from Base. See [Deposit ETH from Base](../bridge/deposit-eth-from-base.md).
- Receiving ETH from another Vellum address.
- For testnet, requesting from a [faucet](faucets.md).

## Why ETH for gas

Using ETH for gas keeps the experience familiar for Ethereum users:

- Wallets show gas in ETH without conversion.
- Bridging ETH from Base directly funds Vellum gas.
- No separate gas asset to acquire or manage.

See [ETH Native Gas](../architecture/eth-native-gas.md) for the architecture-level explanation.

## Configuration examples

A typical chain configuration block, with placeholders:

```json
{
  "name": "Vellum",
  "chainId": "TBD",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "rpcUrls": ["TBD"],
  "blockExplorerUrls": ["TBD"]
}
```

For wallet setup, see [Wallet Setup](wallet-setup.md).
