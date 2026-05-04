# Chain ID and Currency

Vellum uses ETH as its native gas token.

| Field | Value |
|---|---|
| Chain ID | TBD |
| Chain ID hex | TBD |
| Native currency | Ether |
| Symbol | ETH |
| Decimals | 18 |
| Parent chain | Base |

{% hint style="info" %}
ETH is required for gas on Vellum. Vellum does not use a custom native gas token.
{% endhint %}

## Why chain ID matters

Wallets and signing libraries use the chain ID to prevent replaying a transaction on the wrong network. Applications should verify the chain ID returned by RPC before asking users to sign transactions.

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
```

## Developer guidance

- Store the chain ID in environment configuration.
- Do not hardcode `0` or placeholder values in production.
- Display ETH as the gas token in wallet and dapp UI.
- Warn users when their wallet is connected to the wrong chain.

## Related pages

- [Wallet Setup](wallet-setup.md)
- [Gas and Fees](../developers/gas-and-fees.md)
- [Send Transactions](../developers/send-transactions.md)
