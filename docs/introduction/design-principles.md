# Design Principles

Vellum's design choices follow a small set of consistent principles. They are intentionally conservative.

## 1. Settle to Base

Vellum settles to Base. Base settles to Ethereum. This is the trust path. Vellum does not introduce a parallel settlement system.

## 2. ETH is the gas token

Vellum uses ETH for native gas. Users do not need to acquire a separate gas asset. Wallets show gas in ETH. Bridging ETH from Base directly funds gas.

{% hint style="info" %}
Ecosystem tokens may exist on Vellum but are not used as native gas.
{% endhint %}

## 3. EVM compatibility

Vellum is EVM-compatible. Existing Solidity contracts, audits, libraries, and tooling apply directly.

## 4. Standard bridging

Vellum exposes the standard OP Stack bridge surface so that Superbridge-style bridge UIs can integrate without custom workarounds.

## 5. No-downtime as a deliverable

Public RPC, indexing, explorer, and bridge availability are treated as core operational deliverables, not afterthoughts.

## 6. Honest documentation

Vellum's documentation does not overclaim decentralization, audit status, or finality. Trust assumptions are stated. Open items are marked TBD.

## 7. Predictable upgrades

Upgrade paths and governance roles are documented before they are exercised. Emergency actions are scoped and traceable.

## 8. User safety first

Bridging UX, wallet UX, and contract verification flows are designed to reduce phishing and configuration errors. Users are routed only to official RPC, bridge, and explorer URLs.

## 9. Operator transparency

Operators have access to documented monitoring, alerting, backup, and incident response procedures. Status pages are public.

## 10. Build for production

Every documented surface, from RPC endpoints to bridge contracts, is intended to support real applications and real users in production conditions.

## What these principles imply

- Vellum will not ship a custom gas token.
- Vellum will not ship a non-EVM execution model.
- Vellum will not present unfinalized withdrawals as instant.
- Vellum will not claim audits, decentralization, or uptime that have not been earned.

See [Why Vellum?](why-vellum.md) for the motivation behind these choices.
