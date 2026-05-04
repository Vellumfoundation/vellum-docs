# Design Principles

Vellum is designed around practical EVM usability, clear operations, and safe launch preparation.

## Principles

| Principle | Meaning |
|---|---|
| Base settlement | Vellum anchors to Base as its parent chain |
| ETH native gas | ETH pays for transaction execution |
| Full EVM compatibility | Solidity contracts and standard tooling should work |
| Standard bridge behavior | Bridge flows should follow OP Stack-style expectations |
| Production RPC reliability | Public infrastructure needs health checks and failover |
| Explorer compatibility | Users and developers need indexed chain data |
| Clear status | Operators should publish incidents and maintenance windows |
| Safe upgrades | Critical changes need explicit governance and rollback plans |

{% hint style="warning" %}
The docs avoid claims that depend on future audits, governance changes, or live integrations. When a value is not final, it remains TBD.
{% endhint %}

## Non-goals

- A custom gas token.
- Hidden bridge behavior.
- Unverified production contract addresses.
- Launch claims before public readiness checks pass.

## Related pages

- [ETH Native Gas](../architecture/eth-native-gas.md)
- [Upgrade Governance](../governance/upgrade-governance.md)
- [Trust Assumptions](../security/trust-assumptions.md)
