# Gas and Fees

ETH pays for gas on Vellum.

## Fee model

Vellum transaction costs can include L3 execution costs and settlement-related costs. Gas price may change based on demand and network conditions.

| Rule | Guidance |
|---|---|
| Native gas token | ETH |
| User requirement | Users need ETH on Vellum before sending transactions |
| Estimation | Use dynamic gas estimation |
| Hardcoding | Do not hardcode gas prices |
| UX | Explain insufficient ETH clearly |

## Application guidance

- Call `eth_estimateGas`.
- Read fee data from the provider.
- Show gas in ETH.
- Keep a buffer for contract interactions.
- Handle fee changes between estimate and signing.
- Avoid fixed gas assumptions in production.

{% hint style="warning" %}
If a wallet or dapp shows a non-ETH gas token for Vellum, stop and verify the network configuration.
{% endhint %}

## Related pages

- [ETH Native Gas](../architecture/eth-native-gas.md)
- [Send Transactions](send-transactions.md)
- [Chain ID and Currency](../network/chain-id-and-currency.md)
