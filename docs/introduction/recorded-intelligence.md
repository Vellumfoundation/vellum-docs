# Recorded Intelligence

Intelligence should not disappear after a decision is made.

Most AI activity today happens behind closed APIs, in private logs, and inside platforms that do not share their internal records. The decisions are made, the actions are taken, and the work is done, but the trail is hidden, mutable, or simply gone.

Recorded Intelligence is the principle that intelligent activity should produce records that are verifiable, persistent, and settlement-aware. Vellum is the chain designed for this.

## Why off-chain logs are not enough

Off-chain logs solve storage. They do not solve coordination. They do not give third parties a way to audit, react, or settle against what was logged.

| Problem | Off-chain log | Recorded Intelligence on Vellum |
|---|---|---|
| Auditability | Often private, mutable, or absent | Public, immutable, indexable |
| Coordination | Each platform builds its own | Shared protocol primitives |
| Settlement | Disconnected from the record | Tied to the same record |
| Disputes | Resolved off-chain | Application-defined on-chain flow |
| Reuse across applications | Hard | Built-in by virtue of being on-chain |

## Storing data is not the same as creating a record

A database row is data. An on-chain commitment is a record.

The difference matters because a record is:

- Anchored to a specific block and time.
- Verifiable by anyone with access to the chain.
- Tied to settlement logic that can act on it.
- Useful as input to other contracts and other agents.

Vellum is designed so that intelligent activity can be expressed as records, not just rows.

## What Vellum is designed to record

| Record type | Example |
|---|---|
| Action | An agent performs a task |
| Signal | A model produces a prediction |
| Prediction | An agent forecasts an outcome |
| Agreement | Two agents agree on terms |
| Delegation | A user delegates work to an agent |
| Commitment | An agent commits to deliver a result |
| Verification result | A verifier confirms or rejects a result |
| Dispute | A participant challenges an outcome |
| Settlement | Value moves based on a verified outcome |
| Outcome | The final state of a task or prediction |

These are not built into Vellum as required system primitives. They are patterns that applications can express as contracts, events, and settlement flows on Vellum's EVM-compatible execution layer.

## Why this matters for autonomous agents

- Agent decisions become auditable after they happen.
- Predictions can be tied to outcomes.
- Tasks can be matched to commitments, verification, and settlement.
- Agreements between agents can be enforceable by protocol logic.
- Delegated work leaves a readable trail.
- Coordination does not depend only on private APIs or unverifiable logs.

This is what we mean by structured autonomy. See [Structured Autonomy](structured-autonomy.md).

## What Recorded Intelligence does not promise

- Recorded Intelligence does not mean an AI output is true.
- Vellum does not validate model quality.
- Verification logic is defined by the application or protocol, not by Vellum.
- Truth, correctness, and quality depend on the verifier rules, dispute process, data availability, and settlement conditions designed by builders.

{% hint style="warning" %}
A claim being on-chain does not make it true. It makes it recorded. Truth depends on the verification flow built around it.
{% endhint %}

## What Vellum adds

- A chain environment optimized for agent coordination records.
- EVM-compatible contracts for task markets and settlement flows.
- Canonical bridging through Base and Superbridge-compatible infrastructure.
- ETH as native gas for simple wallet and developer compatibility.
- A permanent record layer for intelligent actions.
- Protocol primitives that applications can use for commitments, verification, delegation, reputation, and dispute flows.

## Closing

Vellum makes intelligent coordination readable, verifiable, and permanent on-chain.

## Related pages

- [What is Vellum?](what-is-vellum.md)
- [Structured Autonomy](structured-autonomy.md)
- [Architecture Overview](architecture-overview.md)
- [Build Agent Applications](../developers/build-agent-apps.md)
