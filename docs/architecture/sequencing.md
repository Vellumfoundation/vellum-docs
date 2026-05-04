# Sequencing

The Vellum sequencer is responsible for ordering incoming transactions and producing Vellum blocks. It is the component closest to user latency.

## Responsibilities

| Responsibility | Description |
|---|---|
| Order transactions | Choose the order of transactions in each block |
| Build blocks | Pack ordered transactions into Vellum blocks |
| Apply state transitions | Execute transactions and update Vellum state |
| Broadcast blocks | Make blocks available to RPC nodes and indexers |
| Hand off to batch submitter | Stage data for posting to Base |

## Sequencer behavior

- The sequencer accepts transactions through Vellum RPC.
- It applies a deterministic ordering policy.
- It produces blocks at a fixed cadence.
- It broadcasts blocks to peer nodes.
- It does not have authority to forge state independent of posted data: anyone replaying the data posted to Base must arrive at the same Vellum state.

## Sequencer assumptions

- The sequencer is currently a centralized role.
- It can become unavailable. See [Sequencer Risk](../security/sequencer-risk.md).
- It can produce blocks but cannot change finality semantics on its own.

{% hint style="warning" %}
Vellum does not claim a fully decentralized sequencer at launch. Sequencer assumptions are stated explicitly so that users and developers can plan for them.
{% endhint %}

## Sequencer outage behavior

If the sequencer is unavailable:

- New Vellum transactions cannot be sequenced.
- RPC reads still work as long as RPC nodes are healthy.
- Already finalized state is unaffected.
- Bridge withdrawals already past finalization can still be claimed on Base.

Operational response is documented in [Incident Response](../operators/incident-response.md) and [No-Downtime Operations](../operators/no-downtime-operations.md).

## Mempool

The sequencer maintains a mempool of pending transactions submitted via RPC. Submitted transactions are subject to:

- Standard EVM validation.
- Signature checks against Vellum's chain ID.
- Sufficient ETH balance for gas.

## Related pages

- [Batch Submission](batch-submission.md)
- [Output Proposals](output-proposals.md)
- [Sequencer Risk](../security/sequencer-risk.md)
- [Incident Response](../operators/incident-response.md)
