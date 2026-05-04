# Finality

Vellum finality depends on L3 execution, Base settlement, and Ethereum finality.

## Finality layers

| Layer | Meaning |
|---|---|
| L3 inclusion | Transaction is included in a Vellum block |
| L3 confirmation | Additional Vellum blocks build on top |
| Base settlement | Batch or output information is posted to Base |
| Ethereum finality | Base settlement is ultimately anchored through Ethereum |
| Withdrawal finalization | Bridge-specific proof and waiting period are complete |

{% hint style="warning" %}
Applications should distinguish transaction inclusion from withdrawal finalization. They are not the same event.
{% endhint %}

## Practical guidance

- Wallet transfers can show once an L3 receipt is available.
- High-value workflows should wait for additional confirmations.
- Bridge withdrawals should follow the official proof and finalization flow.
- Operators should monitor Base reorgs and proposal progress.

## Related pages

- [Withdrawal Finalization](../bridge/withdrawal-finalization.md)
- [Output Proposals](output-proposals.md)
- [Trust Assumptions](../security/trust-assumptions.md)
