# Base Settlement

Vellum settles to Base.

Base acts as the parent chain for Vellum. This means Vellum bridge contracts, batch submission, and output proposal flows are anchored to Base rather than directly to Ethereum L1.

```text
Ethereum L1
   ↓
Base L2
   ↓
Vellum L3
```

## What settlement provides

| Function | Description |
|---|---|
| Parent chain anchoring | Vellum data and outputs are posted to Base |
| Bridge root of trust | Deposits and withdrawals route through Base-side contracts |
| Finality dependency | Vellum finality depends on Vellum state, Base state, and Ethereum finality |
| Operational dependency | Base RPC and block production must be monitored |

{% hint style="warning" %}
Settlement on Base does not remove all risk. Vellum still has sequencer, bridge, RPC, upgrade, and operator assumptions.
{% endhint %}

## Related pages

- [Finality](finality.md)
- [Batch Submission](batch-submission.md)
- [Security Model](../security/security-model.md)
