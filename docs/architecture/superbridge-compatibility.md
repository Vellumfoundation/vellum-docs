# Superbridge Compatibility

Vellum should expose the metadata and contract configuration required for a Superbridge-style bridge UI.

Superbridge compatibility means the bridge route can be described through standard chain metadata, bridge contract addresses, token lists, and tested deposit and withdrawal flows.

{% hint style="info" %}
Superbridge compatibility is a launch requirement. It should be treated as pending until the route is tested with real deployment artifacts.
{% endhint %}

## Integration checklist

| Item | Status |
|---|---|
| Chain ID finalized | TBD |
| RPC endpoint public and stable | TBD |
| Explorer live | TBD |
| Native currency set to ETH | Required |
| Standard bridge contracts deployed | TBD |
| Base-side bridge contracts configured | TBD |
| Vellum-side bridge contracts configured | TBD |
| Token list prepared | TBD |
| Withdrawal flow tested | TBD |
| Deposit flow tested | TBD |
| Contract addresses published | TBD |
| Chain metadata published | TBD |
| Icons and branding assets prepared | TBD |
| Testnet bridge route tested | TBD |
| Mainnet bridge route tested | TBD |

## Metadata placeholder

```json
{
  "name": "Vellum",
  "chainId": "TBD",
  "parent": {
    "name": "Base",
    "chainId": 8453
  },
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "rpcUrls": [
    "TBD"
  ],
  "blockExplorers": [
    "TBD"
  ],
  "bridge": {
    "type": "op-stack-native",
    "standardBridge": "TBD",
    "portal": "TBD",
    "l1CrossDomainMessenger": "TBD",
    "l2CrossDomainMessenger": "TBD"
  }
}
```

## Required files

- `chain-metadata.json`
- `bridge-addresses.json`
- `token-list.json`
- `integration-notes.md`
- Icon and logo assets

## Route testing

Before public launch, test:

1. ETH deposit from Base to Vellum.
2. ETH withdrawal from Vellum to Base.
3. ERC-20 deposit.
4. ERC-20 withdrawal.
5. Failure recovery when a user closes the bridge UI.
6. Explorer links for every transaction.
7. Token list rendering.
8. Wallet chain switching.

## Related pages

- [Superbridge Integration](../bridge/superbridge-integration.md)
- [Bridge Architecture](bridge-architecture.md)
- [Contract Addresses](../developers/contract-addresses.md)
