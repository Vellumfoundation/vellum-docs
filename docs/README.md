# Vellum

Vellum is a Base-settled Ethereum L3 built for reliable EVM execution, ETH-native gas, Superbridge-compatible bridging, and production-grade uptime.

```text
Ethereum L1
   ↓
Base L2
   ↓
Vellum L3
```

Vellum uses ETH as its native gas token and supports normal wallet transfers, smart contract deployment, canonical bridging, RPC access, and explorer indexing.

## Quick links

| Topic | Page |
|---|---|
| What is Vellum? | [Introduction](introduction/what-is-vellum.md) |
| Network details | [Network Information](network/network-information.md) |
| Add to MetaMask | [Wallet Setup](network/wallet-setup.md) |
| Bridge to Vellum | [Bridge Overview](bridge/bridge-overview.md) |
| Deploy a contract | [Developer Quickstart](developers/quickstart.md) |
| Run a node | [Run an RPC Node](operators/run-an-rpc-node.md) |
| Security model | [Security](security/security-model.md) |
| FAQ | [Reference FAQ](reference/faq.md) |

## Network status

| Field | Value |
|---|---|
| Network name | Vellum |
| Settlement layer | Base |
| Native currency | ETH |
| Chain ID | TBD |
| Public RPC | TBD |
| Block explorer | TBD |
| Bridge | TBD |
| Status page | TBD |

{% hint style="info" %}
Final chain ID, RPC endpoints, explorer URL, bridge URL, and contract addresses are placeholders until Vellum's public launch readiness checklist is complete.
{% endhint %}

## Build on Vellum

Vellum is EVM-compatible. Existing Solidity tooling such as Hardhat, Foundry, ethers.js, viem, thirdweb, and Remix work without modification once the network is added.

Get started in the [Developer Quickstart](developers/quickstart.md).

## Bridge to Vellum

Bridging uses an OP Stack style native bridge between Base and Vellum, designed to be compatible with Superbridge-style bridge UIs.

Read the [Bridge Overview](bridge/bridge-overview.md) before moving funds.

{% hint style="warning" %}
Only use official RPC, bridge, and explorer URLs published in this documentation. Verify links before signing transactions.
{% endhint %}

## Security note

Vellum inherits settlement security from Base, which inherits settlement security from Ethereum. Trust assumptions, sequencer behavior, bridge risk, and upgrade governance are documented in the [Security](security/security-model.md) section. No production system is risk-free, and Vellum is no exception.

## Links

| Resource | URL |
|---|---|
| Website | TBD |
| Explorer | TBD |
| Bridge | TBD |
| Status page | TBD |
| GitHub | TBD |
| Support | TBD |
