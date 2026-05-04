# Superbridge Compatibility

Vellum is designed to be compatible with Superbridge-style bridge interfaces. This page documents what Vellum exposes so that a Superbridge-compatible UI can integrate it.

{% hint style="info" %}
Compatibility means Vellum exposes the standard OP Stack bridge surface and chain metadata that Superbridge-style interfaces require. Live integration with any specific bridge UI is a separate step that depends on the operators of that UI.
{% endhint %}

## What "Superbridge-compatible" means

A Superbridge-style interface expects:

- An OP Stack style native bridge between the parent chain and the chain in question.
- Standard bridge contracts on both sides.
- Stable RPC and explorer URLs.
- A token list.
- Chain metadata in a recognizable shape.
- ETH as the native gas token, when the parent chain uses ETH.

Vellum is designed to meet all of these requirements.

## Why this matters for Vellum

Vellum is the chain for Recorded Intelligence and agent coordination. Bridging is part of how agents and users participate, not just a finance concern:

- Superbridge compatibility matters because Vellum should not require custom bridging UX for every user.
- Agent markets need simple asset movement from Base for ETH gas and for ERC-20 task payments.
- Developers should be able to route users to a familiar bridge experience instead of building one from scratch.
- ETH deposits should be easy because ETH is the native gas token.
- ERC-20 bridging enables task payments, protocol incentives, and application-level settlement.

## Integration checklist

Vellum considers its bridge integration ready when every item below is checked.

- [ ] Chain ID finalized
- [ ] RPC endpoint public and stable
- [ ] Explorer live
- [ ] Native currency set to ETH
- [ ] Standard bridge contracts deployed
- [ ] Base-side bridge contracts configured
- [ ] Vellum-side bridge contracts configured
- [ ] Token list prepared
- [ ] Withdrawal flow tested
- [ ] Deposit flow tested
- [ ] Contract addresses published
- [ ] Chain metadata published
- [ ] Icons and branding assets prepared
- [ ] Testnet bridge route tested
- [ ] Mainnet bridge route tested

## Chain metadata template

The metadata Vellum will publish is shaped as follows. Values shown as `TBD` are placeholders until launch.

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
  "rpcUrls": ["TBD"],
  "blockExplorers": ["TBD"],
  "bridge": {
    "type": "op-stack-native",
    "standardBridge": "TBD",
    "portal": "TBD",
    "l1CrossDomainMessenger": "TBD",
    "l2CrossDomainMessenger": "TBD"
  }
}
```

## Bridge contract placeholders

| Contract | Network | Address |
|---|---|---|
| Standard bridge (Base side) | Base | TBD |
| Portal | Base | TBD |
| L1 cross-domain messenger | Base | TBD |
| Output oracle | Base | TBD |
| Standard bridge (Vellum side) | Vellum | TBD |
| L2 cross-domain messenger | Vellum | TBD |

These are also tracked in [Contract Addresses](../developers/contract-addresses.md).

## Route testing requirements

Before declaring a route integration-ready:

| Route | Required tests |
|---|---|
| Base testnet to Vellum testnet | Deposit ETH, deposit ERC-20, withdraw ETH, withdraw ERC-20, verify events, verify finalization |
| Base mainnet to Vellum mainnet | Deposit ETH, deposit ERC-20, withdraw ETH, withdraw ERC-20, verify events, verify finalization |

Detail: [Superbridge Integration](../bridge/superbridge-integration.md).

## Launch readiness checklist

| Item | Status |
|---|---|
| Vellum chain ID finalized | TBD |
| Vellum RPC public | TBD |
| Vellum explorer public | TBD |
| Bridge contracts deployed | TBD |
| Token list ready | TBD |
| Branding assets ready | TBD |
| Deposit flow tested | TBD |
| Withdrawal flow tested | TBD |
| Status page live | TBD |
| Documentation published | TBD |

Until each item is marked done, the bridge route should not be considered live for production use.

## Related pages

- [Bridge Architecture](bridge-architecture.md)
- [Superbridge Integration](../bridge/superbridge-integration.md)
- [Contract Addresses](../developers/contract-addresses.md)
