# Output Proposals

Output proposals publish commitments to Vellum state for withdrawal flows.

## Lifecycle

```text
Vellum block
   ↓
State root
   ↓
Output proposal posted to Base
   ↓
Withdrawal proof references output
   ↓
Finalization after required period
```

## Operator checks

- Proposer is online.
- Output roots are advancing.
- Proposal transactions are accepted on Base.
- Proposer wallet has enough ETH on Base.
- Withdrawal proof tooling can find the expected output.

{% hint style="info" %}
Withdrawal timing depends on the configured proof and finalization model. Do not describe withdrawals as instant when a challenge or finality period applies.
{% endhint %}

## Related pages

- [Withdrawal Finalization](../bridge/withdrawal-finalization.md)
- [Finality](finality.md)
- [Bridge Risk](../security/bridge-risk.md)
