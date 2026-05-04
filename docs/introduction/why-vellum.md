# Why Vellum?

Vellum exists to provide a reliable execution layer above Base while preserving the EVM workflows builders already use.

Teams often need a chain environment with predictable infrastructure, clear documentation, bridge compatibility, explorer support, and normal ETH gas. Vellum focuses on those requirements instead of introducing a new gas token or forcing custom wallet behavior.

## Design goals

| Goal | Why it matters |
|---|---|
| Base settlement | Keeps the L3 anchored to a widely used Ethereum L2 |
| ETH gas | Reduces wallet confusion and avoids custom gas onboarding |
| EVM compatibility | Lets teams reuse Solidity, Hardhat, Foundry, viem, and ethers.js |
| Superbridge compatibility | Makes bridge UX easier to integrate and verify |
| High availability | Supports production applications and public RPC users |
| Clear operations | Gives operators measurable health, recovery, and escalation paths |

## Builder fit

Vellum is suited for applications that want EVM execution, ETH payments for gas, wallet compatibility, explorer indexing, and a documented bridge path to Base.

{% hint style="warning" %}
Do not assume final network values until the launch checklist is complete. Use placeholders in application configuration until official values are published.
{% endhint %}

## Related pages

- [Design Principles](design-principles.md)
- [Gas and Fees](../developers/gas-and-fees.md)
- [No-Downtime Operations](../operators/no-downtime-operations.md)
