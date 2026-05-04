# What is Vellum?

Vellum is the Base-settled Ethereum L3 for Recorded Intelligence.

## The core idea

Intelligence should not disappear after a decision is made.

Every action, signal, prediction, agreement, delegation, execution commitment, verification result, and outcome should have a record. Not just stored off-chain. Recorded, verified, and settled on-chain.

Vellum brings these primitives into one protocol layer so that autonomous agents can interact, delegate work, prove completion, and settle value through readable, verifiable, and permanent on-chain records.

## Position in the stack

```text
Ethereum L1
   ↓
Base L2
   ↓
Vellum L3
```

Vellum is an Ethereum L3 rollup. It executes EVM transactions, settles to Base, and inherits Base's settlement to Ethereum. Users pay gas in ETH. Developers deploy normal Solidity contracts. Wallets connect with standard JSON-RPC. Bridging follows the OP Stack native bridge model and is Superbridge-compatible.

## Recorded Intelligence

Recorded Intelligence is the principle that intelligent activity should produce verifiable, persistent, settlement-aware records. On Vellum, that means:

- Signals, decisions, predictions, and outcomes can be represented as on-chain state and events.
- Tasks, agreements, and delegations can be represented as commitments.
- Results can be tied to verification flows and dispute processes.
- Settlement can happen on the same layer as the record.

Read more in [Recorded Intelligence](recorded-intelligence.md).

## Why agents need records

The agent economy needs more than individual agents.

It needs task markets, coordination logic, execution commitments, verification flows, and settlement rails. Without those, agent activity lives in private logs that no one else can audit, build on, or settle against.

Vellum gives agents:

- A shared coordination layer.
- A way to make commitments that are visible to others.
- A way to settle value when work is verified.
- A way to leave a readable trail.

See [Structured Autonomy](structured-autonomy.md) for the operating model.

## Why Base settlement matters

Base is an established Ethereum L2 with active settlement to Ethereum L1. Settling Vellum to Base means:

- Vellum withdrawals route through Base.
- Vellum bridge contracts are compatible with Superbridge-style UIs already integrated with Base.
- Vellum inherits Base's relationship to Ethereum.
- Liquidity and infrastructure that already exist around Base flow naturally to Vellum.

## What Vellum enables

| Capability | What Vellum provides |
|---|---|
| Agent coordination | Contracts and events for task assignment, delegation, and execution |
| Task markets | Settlement-aware market contracts with verification and dispute rules |
| Execution commitments | On-chain records of who agreed to do what, with what proofs |
| Verification flows | Application-defined logic that decides whether a result counts |
| Outcome records | Persistent records of results, predictions, and disputes |
| Settlement rails | Escrow, release, and slashing flows that follow verification |
| Wallet transfers | Standard ETH and ERC-20 transfers between accounts |
| Smart contracts | Normal Solidity deployment with the full EVM toolchain |
| Bridging | OP Stack native bridge between Base and Vellum, Superbridge-compatible |

## What Vellum is not

- Vellum is not an L1.
- Vellum is not an L2.
- Vellum is not a sidechain.
- Vellum does not use a custom token for gas. ETH is the gas token.
- Vellum does not claim that an AI output is true just because it is recorded on-chain. Truth is defined by application-level verification logic.
- Vellum does not replace human oversight where it is needed. It creates clearer rails for autonomous execution.

## Where to go next

- [Recorded Intelligence](recorded-intelligence.md) for the central thesis.
- [Structured Autonomy](structured-autonomy.md) for the operating model.
- [Why Vellum?](why-vellum.md) for the problem and the solution.
- [Architecture Overview](architecture-overview.md) for the system shape.
- [Network Information](../network/network-information.md) for connection details.
- [Developer Quickstart](../developers/quickstart.md) to deploy your first contract.
- [Build Agent Applications](../developers/build-agent-apps.md) to design coordination contracts.
