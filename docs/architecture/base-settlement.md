# Base Settlement

Vellum settles to Base. This page explains what that means in practice.

## What "settlement" means here

Settlement is the process by which Vellum's transaction data and state commitments are recorded on its parent chain. Vellum's parent chain is Base. Once Vellum data and output roots are accepted on Base, they inherit Base's settlement guarantees, which in turn flow through to Ethereum L1.

```text
Ethereum L1
   ↑ (Base settles here)
Base L2
   ↑ (Vellum settles here)
Vellum L3
```

## What gets settled

| Item | Where it goes | Posted by |
|---|---|---|
| Vellum transaction batches | Base | Batch submitter |
| Vellum output roots | Base | Output proposer |
| Bridge messages | Base bridge contracts | Bridge contracts |

## Why Base, not Ethereum directly

- Base is an established Ethereum L2 with active settlement to Ethereum L1.
- Settling to Base lets Vellum reuse that settlement path.
- The Base/Ethereum relationship is well-understood and documented.
- Bridging via Base is compatible with Superbridge-style UIs that already integrate with Base.

## Implications for users and developers

- Vellum withdrawals route through Base on the way back to Ethereum.
- Vellum bridge contracts live on Base and on Vellum.
- Vellum's data availability and finality depend on Base operating as expected.
- Vellum reorgs cannot exceed what Base allows for its own state.

See [Finality](finality.md), [Data Availability](data-availability.md), and [Bridge Architecture](bridge-architecture.md).

## Implications for security

Vellum's security inherits from Base's settlement, which in turn inherits from Ethereum. If Base experiences a settlement issue, Vellum is affected. See [Trust Assumptions](../security/trust-assumptions.md).

{% hint style="info" %}
Vellum does not introduce a parallel settlement layer. Its settlement is exactly what Base provides.
{% endhint %}

## Configuration constants

| Field | Value |
|---|---|
| Parent chain | Base |
| Parent chain ID | 8453 |
| L1 of parent | Ethereum |
| Vellum chain ID | TBD |

See [Network Information](../network/network-information.md) for the full list.
