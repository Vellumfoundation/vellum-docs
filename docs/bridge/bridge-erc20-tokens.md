# Bridge ERC-20 Tokens

Vellum can support ERC-20 bridging through standard bridge paths and canonical token mapping.

## Token mapping

| Item | Description |
|---|---|
| Parent token | ERC-20 token on Base |
| Vellum token | Canonical representation on Vellum |
| Mapping | Published relationship between the two token addresses |
| Metadata | Symbol, decimals, logo, and bridge route information |

{% hint style="warning" %}
Incorrect token mapping can lead to user loss or broken balances. Only use published mappings from official metadata.
{% endhint %}

## Launch checklist

- Base token address verified.
- Vellum token address verified.
- Decimals match expected behavior.
- Deposit tested.
- Withdrawal tested.
- Explorer displays transfers.
- Token list includes both sides.

## Related pages

- [Superbridge Integration](superbridge-integration.md)
- [Contract Addresses](../developers/contract-addresses.md)
- [Bridge Risk](../security/bridge-risk.md)
