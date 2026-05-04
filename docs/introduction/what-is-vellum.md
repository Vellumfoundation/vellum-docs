# What is Vellum?

Vellum is an Ethereum-compatible L3 rollup that settles to Base and uses ETH as its native gas token.

It is designed for teams that need dependable EVM execution above Base without changing the normal developer or wallet experience. Users send ETH, developers deploy Solidity contracts, and operators run production infrastructure around RPC, indexing, monitoring, and bridge services.

```text
Ethereum L1
   ↓ settlement
Base L2
   ↓ parent chain
Vellum L3
   ↓ execution
Apps, wallets, contracts, and bridge flows
```

## Core properties

| Property | Vellum position |
|---|---|
| Settlement | Base |
| Native gas | ETH |
| Execution | EVM-compatible |
| Bridge model | OP Stack/Superchain-style native bridge |
| Wallet transfers | Supported |
| Smart contracts | Supported |
| Explorer indexing | Required |
| Superbridge compatibility | Required |

{% hint style="success" %}
If an application already supports standard EVM networks, Vellum should feel familiar once chain ID, RPC, explorer, and bridge metadata are published.
{% endhint %}

## What Vellum is not

- Vellum is not a custom gas token network.
- Vellum is not live until public launch information is published.
- Vellum should not be described as fully decentralized unless governance and operations are updated to support that claim.
- Vellum does not remove normal smart contract, bridge, RPC, or wallet risks.

## Related pages

- [Why Vellum?](why-vellum.md)
- [Architecture Overview](architecture-overview.md)
- [Security Model](../security/security-model.md)
