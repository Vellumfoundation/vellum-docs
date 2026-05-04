# Withdrawal Finalization

Withdrawals from Vellum to Base can require multiple steps.

## Lifecycle

```text
Initiate withdrawal on Vellum
   ↓
Wait for output proposal
   ↓
Prove withdrawal on Base
   ↓
Wait through finalization period
   ↓
Finalize withdrawal on Base
```

## What users should know

- The initiation transaction is not the final receipt on Base.
- The proof step may become available later.
- The finalization step may require a waiting period.
- Base gas is needed for Base-side transactions.
- The bridge UI should show each stage clearly.

{% hint style="info" %}
Final withdrawal timing is a launch parameter and must be published before public bridge opening.
{% endhint %}

## Related pages

- [Withdraw ETH to Base](withdraw-eth-to-base.md)
- [Finality](../architecture/finality.md)
- [Bridge Troubleshooting](troubleshooting-bridge-transfers.md)
