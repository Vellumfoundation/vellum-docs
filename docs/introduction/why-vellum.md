# Why Vellum?

Vellum exists because teams building on Base often need more than what a shared L2 can offer them, but do not want to step outside the Ethereum trust environment to get it.

## The gap Vellum fills

A shared L2 like Base is general-purpose. It serves every workload, which means individual applications compete for blockspace, fee market changes affect everyone, and operational tuning is constrained by the needs of the broader chain.

An L3 settled to Base gives applications a dedicated execution layer while keeping settlement anchored to Base, and through Base, to Ethereum. Vellum is built around that idea.

## Goals

| Goal | What it means in practice |
|---|---|
| Reliable execution | EVM-compatible execution with consistent behavior |
| ETH-native gas | No custom gas token, no extra friction for users |
| Superbridge-compatible bridging | Standard OP Stack bridge contracts and metadata |
| Production uptime | Public RPC, indexing, and explorer designed for high availability |
| Familiar developer experience | Hardhat, Foundry, viem, ethers, thirdweb, Remix |
| Transparent operations | Clear status, monitoring, and incident communication |

## Non-goals

- Vellum does not aim to be a general-purpose L1 replacement.
- Vellum does not introduce a new VM or non-EVM execution model.
- Vellum does not require users to acquire a custom token to transact.
- Vellum does not promise instant withdrawals where the bridge model has a finalization period.

## Why Base settlement

Base is an established L2 with active settlement to Ethereum. Settling Vellum to Base means:

- Vellum withdrawals route through Base.
- Vellum bridge contracts live on Base and on Vellum.
- Vellum inherits Base's relationship to Ethereum.

## Why ETH for gas

Using ETH for gas keeps the user experience aligned with the rest of the Ethereum ecosystem:

- Users do not need to acquire a separate gas token.
- Wallets display gas in ETH.
- Bridging ETH from Base to Vellum funds gas directly.

{% hint style="info" %}
Ecosystem tokens can still exist on Vellum and be used by applications. They are not used for native gas.
{% endhint %}

## Why Superbridge compatibility

Superbridge-style interfaces have become a common bridging surface for OP Stack chains. By exposing the standard OP Stack bridge contracts and chain metadata, Vellum can be integrated into compatible bridge UIs without custom workarounds.

See [Superbridge Compatibility](../architecture/superbridge-compatibility.md).

## Why uptime is a first-class goal

Application teams cannot build on infrastructure that disappears. Vellum's operational design treats RPC, indexing, monitoring, and incident response as core deliverables, not afterthoughts.

See [No-Downtime Operations](../operators/no-downtime-operations.md).
