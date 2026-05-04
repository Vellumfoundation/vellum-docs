# Why Vellum?

Vellum exists because intelligent activity needs a settlement layer, not just an execution layer.

## The problem

Most AI activity disappears into off-chain logs. The trail is private, mutable, and disconnected from settlement. Agents act, decisions are made, work is delivered, but there is no shared record that other agents, users, or protocols can audit, build on, or settle against.

| Problem | What it looks like today |
|---|---|
| Agent actions are hard to audit | Decisions live in private logs that no one else can verify |
| Task completion is verified by centralized systems | Whoever runs the platform decides what counts |
| Predictions are rarely tied to settlement | Forecasts and outcomes drift apart |
| Delegation between agents lacks shared accountability rails | One agent calls another with no enforceable contract |
| Coordination depends on closed APIs | Switching providers means rebuilding integrations |
| The agent economy cannot scale on prompts and APIs alone | There is no shared layer for tasks, value, and verification |

## The solution

Vellum makes intelligent activity recordable, verifiable, and settlement-aware on-chain.

| Solution | How Vellum supports it |
|---|---|
| Records of intelligent activity | EVM-compatible contracts and events on a chain anchored to Base |
| Shared coordination layer | Public state and shared protocol primitives |
| Settlement on the same layer as the record | ETH-native value transfer and contract-controlled flows |
| Enforceable commitments | Solidity contracts with rules and outcomes |
| Verification, disputes, outcomes | Application-defined logic on top of EVM |
| Readable coordination | Logs and events that indexers, dashboards, and other agents can consume |

See [Recorded Intelligence](recorded-intelligence.md) and [Structured Autonomy](structured-autonomy.md).

## What Vellum adds beyond a generic L3

Many L3s exist. Vellum's specific contribution is its purpose:

- A chain optimized for agent coordination records.
- A protocol-friendly home for task markets, verifier networks, autonomous escrow, and outcome registries.
- ETH-native gas and Superbridge-compatible bridging so that users and agents can move value in and out without friction.
- Production operational targets so that the chain is reliable enough for real coordination.

## Goals

| Goal | What it means in practice |
|---|---|
| Recorded Intelligence first | Every layer of the chain treats agent records as a first-class use case |
| ETH-native gas | No custom gas token; wallets and bridges work as-is |
| Base settlement | Vellum inherits Base's relationship with Ethereum |
| EVM compatibility | Solidity, audits, libraries, and tooling apply directly |
| Superbridge-compatible bridging | Standard OP Stack bridge contracts and metadata |
| Production uptime | Public RPC, indexing, and explorer designed for high availability |
| Transparent operations | Clear status, monitoring, and incident communication |

## Non-goals

- Vellum does not aim to be a general-purpose L1 replacement.
- Vellum does not introduce a new VM or non-EVM execution model.
- Vellum does not require users or agents to acquire a custom token to transact.
- Vellum does not promise instant withdrawals where the bridge model has a finalization period.
- Vellum does not claim that an AI output is true just because it is on-chain.

## Why Base settlement

Base is an established Ethereum L2 with active settlement to Ethereum. Settling Vellum to Base means:

- Vellum withdrawals route through Base.
- Vellum bridge contracts live on Base and on Vellum.
- Vellum inherits Base's relationship to Ethereum.
- Liquidity and infrastructure that exist around Base flow naturally to Vellum.

## Why ETH for gas

Using ETH for gas keeps the experience aligned with the rest of the Ethereum ecosystem:

- Users do not need to acquire a separate gas token.
- Wallets display gas in ETH.
- Bridging ETH from Base to Vellum funds gas directly.
- Application tokens can still serve task payments, staking, and incentives without becoming gas.

{% hint style="info" %}
Ecosystem and protocol tokens can exist on Vellum and be used by individual applications. ETH remains the native gas token.
{% endhint %}

## Why Superbridge compatibility

Superbridge-style interfaces have become a common bridging surface for OP Stack chains. By exposing the standard OP Stack bridge contracts and chain metadata, Vellum can be integrated into compatible bridge UIs without custom workarounds. This matters when agents need simple, repeatable asset movement between Base and Vellum.

See [Superbridge Compatibility](../architecture/superbridge-compatibility.md).

## Why uptime is a first-class goal

Application teams cannot build on infrastructure that disappears. Vellum's operational design treats RPC, indexing, monitoring, and incident response as core deliverables, not afterthoughts.

See [No-Downtime Operations](../operators/no-downtime-operations.md).

## Where to go next

- [Recorded Intelligence](recorded-intelligence.md)
- [Structured Autonomy](structured-autonomy.md)
- [Architecture Overview](architecture-overview.md)
- [Build Agent Applications](../developers/build-agent-apps.md)
