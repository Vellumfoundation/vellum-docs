# Faucets

Faucets may be available during testnet to help users and developers obtain testnet ETH for gas.

| Field | Value |
|---|---|
| Testnet faucet URL | TBD |
| Asset | Testnet ETH |
| Rate limit | TBD |
| Eligibility | TBD |
| Mainnet faucet | Not applicable |

{% hint style="warning" %}
A faucet is only for testnet assets. Mainnet ETH has real value and is not distributed by a faucet.
{% endhint %}

## Expected faucet behavior

- Requests should be rate limited.
- Abuse prevention should be documented.
- The faucet wallet should be monitored.
- Faucet status should be reflected on the status page.

## Developer use

Use faucet funds for deployments, contract tests, wallet transfers, bridge testing, and RPC integration checks. Do not depend on faucet availability in CI unless a dedicated testing allocation exists.

## Related pages

- [Testnet Roadmap](../roadmap/testnet.md)
- [Send ETH](../users/send-eth.md)
- [Gas and Fees](../developers/gas-and-fees.md)
