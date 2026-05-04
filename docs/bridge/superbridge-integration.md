# Superbridge Integration

Vellum is designed for a Superbridge-compatible bridge experience.

## Required configuration

| Requirement | Status |
|---|---|
| Chain metadata | TBD |
| Base-side bridge addresses | TBD |
| Vellum-side bridge addresses | TBD |
| Token list | TBD |
| Public RPC | TBD |
| Explorer | TBD |
| Icons and branding | TBD |
| Deposit route test | TBD |
| Withdrawal route test | TBD |

## Metadata package

A Superbridge-style integration should include chain metadata, bridge addresses, token list, integration notes, and assets.

```json
{
  "name": "Vellum",
  "chainId": "TBD",
  "parentChainId": 8453,
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "rpcUrls": {
    "public": "TBD",
    "websocket": "TBD"
  },
  "explorers": [
    {
      "name": "Vellum Explorer",
      "url": "TBD"
    }
  ],
  "bridge": {
    "type": "op-stack-canonical",
    "parentChainPortalAddress": "TBD",
    "parentChainStandardBridgeAddress": "TBD",
    "parentChainCrossDomainMessengerAddress": "TBD",
    "l3StandardBridgeAddress": "TBD",
    "l3CrossDomainMessengerAddress": "TBD"
  }
}
```

{% hint style="warning" %}
Do not announce Superbridge as live until the route is tested and the official bridge URL is published.
{% endhint %}

## Related pages

- [Superbridge Compatibility](../architecture/superbridge-compatibility.md)
- [Bridge Architecture](../architecture/bridge-architecture.md)
- [Bridge Security](bridge-security.md)
