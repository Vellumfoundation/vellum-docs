# ETH Native Gas

Vellum uses ETH as its native gas token.

Users need ETH on Vellum to send transactions, deploy contracts, approve tokens, interact with dapps, and pay for bridge-related transactions on the Vellum side.

{% hint style="success" %}
Wallets and applications should display ETH as the Vellum gas token. No Vellum-specific token is required for gas.
{% endhint %}

## Fee behavior

| Fee input | Description |
|---|---|
| L3 execution | Cost to execute the transaction on Vellum |
| Settlement cost | Cost related to posting data or commitments to Base |
| Congestion | Fees can change with demand and network conditions |
| Estimation | Apps should call `eth_estimateGas` and fee RPC methods dynamically |

## Developer guidance

- Do not hardcode gas prices.
- Do not assume every user has ETH on Vellum.
- Show clear errors for insufficient ETH.
- Estimate gas before prompting signatures.
- Use ETH for deployment gas in Hardhat, Foundry, Remix, viem, and ethers.js.

## Related pages

- [Gas and Fees](../developers/gas-and-fees.md)
- [Send ETH](../users/send-eth.md)
- [Chain ID and Currency](../network/chain-id-and-currency.md)
