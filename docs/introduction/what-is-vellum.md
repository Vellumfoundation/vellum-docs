# What is Vellum?

Vellum is an Ethereum-compatible Layer 3 rollup. It settles to Base and uses ETH as its native gas token. Vellum is designed for teams that want a dependable execution environment above Base without giving up EVM tooling, wallet support, or canonical bridging.

## In one paragraph

Vellum is an L3 chain. Transactions execute on Vellum, are sequenced into batches, and are posted down to Base for settlement. Base in turn settles to Ethereum L1. Users pay gas in ETH. Developers deploy normal Solidity contracts. Wallets like MetaMask connect with standard JSON-RPC. Bridging follows an OP Stack style native bridge model so that Superbridge-compatible interfaces can integrate without custom workarounds.

## Position in the stack

```text
Ethereum L1
   ↓
Base L2
   ↓
Vellum L3
```

Vellum does not replace Base. It extends Base by giving applications and operators a dedicated execution surface that inherits Base's settlement and, transitively, Ethereum's settlement.

## What Vellum is

| Property | Vellum |
|---|---|
| Chain type | Ethereum L3 rollup |
| Settlement | Base |
| Native gas token | ETH |
| Execution | EVM-compatible |
| Bridge model | OP Stack style native bridge |
| Bridge UX | Superbridge-compatible |
| Wallet support | Standard EVM wallets |
| Tooling | Hardhat, Foundry, viem, ethers, thirdweb, Remix |

## What Vellum is not

- Vellum is not an L1.
- Vellum is not an L2.
- Vellum is not a sidechain.
- Vellum does not use a custom token for gas. ETH is the gas token.
- Vellum is not a fork of an unrelated VM. It is EVM-compatible.

{% hint style="info" %}
Ecosystem tokens may be deployed on Vellum, but they are not the native gas token. ETH is the gas token.
{% endhint %}

## Who Vellum is for

- Application developers who want EVM execution above Base.
- Operators who need predictable RPC, indexing, and monitoring.
- Users who want familiar wallets, familiar gas, and a recognizable bridge flow.

## Where to go next

- [Why Vellum?](why-vellum.md) for the motivation.
- [Architecture Overview](architecture-overview.md) for the system shape.
- [Network Information](../network/network-information.md) for connection details.
- [Developer Quickstart](../developers/quickstart.md) to deploy your first contract.
