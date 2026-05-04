# Superbridge Integration

This page lists what Vellum needs to provide for a Superbridge-style bridge UI to integrate the chain. It is the operational view of [Superbridge Compatibility](../architecture/superbridge-compatibility.md).

## What integration requires from Vellum

| Item | Requirement |
|---|---|
| Chain ID | Finalized and published |
| RPC endpoint | Public, stable, monitored |
| WebSocket RPC | Recommended |
| Block explorer | Live with public URL |
| Bridge contracts on Base | Deployed and verified |
| Bridge contracts on Vellum | Deployed and verified |
| Token list | Curated, signed, hosted |
| Branding assets | Icons, name, brand color |
| Status page | Live with public URL |
| Finalization window | Documented |

## Required metadata

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

## Required contract addresses

| Contract | Network | Address |
|---|---|---|
| Standard bridge (Base side) | Base | TBD |
| Portal | Base | TBD |
| L1 cross-domain messenger | Base | TBD |
| Output oracle | Base | TBD |
| Standard bridge (Vellum side) | Vellum | TBD |
| L2 cross-domain messenger | Vellum | TBD |

## Route testing requirements

A bridge route is not considered ready until each test below has passed end-to-end:

| Test | Network | Goal |
|---|---|---|
| Deposit ETH | Base testnet to Vellum testnet | ETH credited on Vellum |
| Deposit ERC-20 | Base testnet to Vellum testnet | Bridged token minted on Vellum |
| Withdraw ETH | Vellum testnet to Base testnet | ETH released on Base after finalization |
| Withdraw ERC-20 | Vellum testnet to Base testnet | Origin token released on Base after finalization |
| Bridge UI display | All routes | Status, amounts, and timing display correctly |
| Edge cases | All routes | Insufficient balance, wrong chain, expired approval handled |

Repeat each test on mainnet before declaring the mainnet route ready.

## Launch readiness checklist

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

## Related pages

- [Superbridge Compatibility](../architecture/superbridge-compatibility.md)
- [Bridge Architecture](../architecture/bridge-architecture.md)
- [Contract Addresses](../developers/contract-addresses.md)
