# Trust Assumptions

Vellum users trust a combination of protocol contracts, operators, parent chain behavior, infrastructure, and wallets.

## Assumption table

| Assumption | Impact |
|---|---|
| Sequencer remains available | Transactions can be included normally |
| Batcher submits data to Base | Settlement progress continues |
| Proposer posts outputs | Withdrawals can be proven |
| Bridge contracts are correct | Assets move as expected |
| Admin keys are secure | Upgrades and emergency actions are controlled |
| RPC is honest and fresh | Wallets show accurate data |
| Users verify links | Phishing risk is reduced |

{% hint style="info" %}
Trust assumptions should become more explicit, not less explicit, as Vellum moves from testnet toward mainnet.
{% endhint %}

## Related pages

- [Security Model](security-model.md)
- [Roles and Permissions](../governance/roles-and-permissions.md)
- [Sequencer Risk](sequencer-risk.md)
