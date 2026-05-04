# Sequencer Risk

Sequencer risk comes from transaction ordering power and liveness dependency.

## Risks

| Risk | Impact |
|---|---|
| Outage | New transactions may be delayed |
| Censorship | Certain transactions may not be included promptly |
| Reordering | Transaction ordering can affect some applications |
| Misconfiguration | Blocks or service health can be affected |

## Mitigations

- Monitor block production.
- Publish incidents quickly.
- Maintain failover procedures.
- Keep operational access controlled.
- Document future decentralization plans accurately.

{% hint style="info" %}
Do not describe Vellum as fully decentralized while sequencing is operated by a limited set of operators.
{% endhint %}

## Related pages

- [Sequencing](../architecture/sequencing.md)
- [No-Downtime Operations](../operators/no-downtime-operations.md)
- [Trust Assumptions](trust-assumptions.md)
