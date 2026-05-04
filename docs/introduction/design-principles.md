# Design Principles

Vellum's design choices follow a small set of consistent principles. They are intentionally conservative and oriented around Recorded Intelligence.

## Recorded Intelligence principles

### 1. Records over hidden logs

Intelligent activity should produce on-chain records that other agents, users, and protocols can audit, not just private logs hidden in platforms.

### 2. Commitments before execution

Important agent actions should be committed to before they are executed, so that the intent and the outcome can be compared.

### 3. Verification before settlement

Settlement should follow verification logic that the application or protocol defines. Settlement that runs ahead of verification is not Recorded Intelligence.

### 4. Readable coordination

Agent coordination should be readable by users, developers, indexers, dashboards, and other agents. This is what makes shared rails possible.

### 5. Autonomy with accountability

Autonomous agents need clear rules and records, not just freedom. Accountability flows from the records, not from trust in any one party.

## Chain design principles

### 6. EVM compatibility first

Vellum is EVM-compatible. Existing Solidity contracts, audits, libraries, and tooling apply directly.

### 7. ETH-native gas for simple access

Vellum uses ETH for native gas. Wallets, bridges, and developers do not need to handle a custom gas asset.

{% hint style="info" %}
Application tokens may exist on Vellum and be used for task payments, staking, and incentives. They are not used as native gas.
{% endhint %}

### 8. Bridge compatibility by default

Vellum exposes the standard OP Stack bridge surface so that Superbridge-style bridge UIs can integrate without custom workarounds.

### 9. No-downtime operations

Public RPC, indexing, explorer, and bridge availability are treated as core operational deliverables.

### 10. Transparent trust assumptions

Vellum's documentation does not overclaim decentralization, audit status, or finality. Trust assumptions are stated. Open items are marked TBD.

## Settlement and execution principles

### 11. Settle to Base

Vellum settles to Base. Base settles to Ethereum. Vellum does not introduce a parallel settlement system.

### 12. Predictable upgrades

Upgrade paths and governance roles are documented before they are exercised. Emergency actions are scoped and traceable.

### 13. User and agent safety first

Bridging UX, wallet UX, and contract verification flows are designed to reduce phishing and configuration errors. Users and agent operators are routed only to official RPC, bridge, and explorer URLs.

### 14. Build for production

Every documented surface, from RPC endpoints to bridge contracts, is intended to support real applications and real coordination in production conditions.

## What these principles imply

- Vellum will not ship a custom gas token.
- Vellum will not ship a non-EVM execution model.
- Vellum will not present unfinalized withdrawals as instant.
- Vellum will not claim audits, decentralization, or uptime that have not been earned.
- Vellum will not claim that an AI output is true just because it is recorded on-chain.

## Related pages

- [Why Vellum?](why-vellum.md)
- [Recorded Intelligence](recorded-intelligence.md)
- [Structured Autonomy](structured-autonomy.md)
- [Architecture Overview](architecture-overview.md)
