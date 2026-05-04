# Sequencer Risk

The sequencer is the component that orders Vellum transactions and produces blocks. This page explains the risks associated with that role.

## Centralization at launch

Vellum's sequencer is centralized at launch. This means:

- A single party controls transaction ordering.
- That party can include or exclude transactions.
- That party can become unavailable.

{% hint style="warning" %}
Vellum does not claim a fully decentralized sequencer at launch. Decentralization of this role is a future-work item, not a current property.
{% endhint %}

## What the sequencer cannot do

- Forge state independent of the data posted to Base. Anyone replaying batches arrives at the same state.
- Steal user funds via reordering alone (it cannot violate the EVM's authorization rules).
- Skip the bridge finalization window.

## What the sequencer can do

- Briefly delay individual transactions.
- Reorder transactions within a block under its policy.
- Become unavailable, blocking new submissions.

## Operational mitigations

- Monitoring of `sequencer_lag` and block production.
- Documented restart and failover procedures.
- Public communication via the [Network Status](../network/network-status.md) page.

## User-level mitigations

- For high-value actions, wait for batch inclusion on Base before treating a transaction as durable.
- For bridge withdrawals, follow the documented finalization process.

## Future direction

Sequencer decentralization is a credible long-term direction for chains like Vellum. As the broader ecosystem produces shared standards for it, Vellum's roadmap can incorporate them. See [Future Work](../roadmap/future-work.md).

## Related pages

- [Sequencing](../architecture/sequencing.md)
- [Security Model](security-model.md)
- [Trust Assumptions](trust-assumptions.md)
- [Incident Response](../operators/incident-response.md)
