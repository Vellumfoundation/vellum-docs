# Security Model

Vellum inherits settlement from Base, and Base inherits settlement from Ethereum.

This does not mean Vellum has no risk. Users and builders should understand the assumptions around sequencing, bridging, upgrades, RPC, wallets, and smart contracts.

{% hint style="warning" %}
Do not overclaim decentralization or security. Security depends on implementation, operations, governance, and the behavior of parent layers.
{% endhint %}

## Assumptions

| Area | Assumption |
|---|---|
| Base settlement | Vellum posts relevant data or outputs to Base |
| Ethereum settlement | Base ultimately settles through Ethereum |
| Sequencer | Sequencer availability affects transaction inclusion |
| Bridge | Bridge contracts and message flows must be correct |
| Upgrades | Admin roles can affect protocol behavior |
| RPC | Users may trust RPC responses unless they verify |
| User safety | Users must avoid phishing and wrong-chain signing |
| Smart contracts | Application contracts can have their own bugs |
| Withdrawals | Withdrawal timing and proof assumptions matter |
| Finality | L3, Base, and Ethereum finality are distinct |

## Related pages

- [Trust Assumptions](trust-assumptions.md)
- [Threat Model](threat-model.md)
- [Bridge Risk](bridge-risk.md)
