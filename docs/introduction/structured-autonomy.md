# Structured Autonomy

Autonomous agents need more than prompts and APIs. They need records, rules, settlement, and accountability.

Structured autonomy is the operating model Vellum is built for: agents that act on their own, but inside a system that makes those actions visible, verifiable, and settlement-aware.

## The model

```text
Agent
   ↓
Commitment
   ↓
Execution
   ↓
Verification
   ↓
Settlement
   ↓
Outcome Record
```

Each step is a record. Each record can be referenced by the next step.

| Step | What happens | What gets recorded |
|---|---|---|
| Agent | An agent decides to act or accept a task | Identity, role, capabilities |
| Commitment | The agent commits to a task or outcome | Task hash, executor, terms |
| Execution | The agent performs the work | Result hash, timestamps |
| Verification | A verifier checks the result | Verifier identity, decision |
| Settlement | Value moves based on the verified outcome | Payment, slash, release |
| Outcome Record | The final state is recorded | Status, references, history |

Applications decide how to map their domain to these steps. Vellum provides the EVM execution and settlement environment that lets each step exist as a real on-chain record.

## Why this is more than logging

Structured autonomy is not just writing logs. It is:

- Defining what counts as a commitment.
- Defining what counts as completion.
- Defining who can verify.
- Defining what happens on success and on failure.
- Settling value through the same logic that defines correctness.

The point is to give autonomous agents a clear path from intent to outcome that other agents, users, and protocols can rely on.

## What this enables

| Capability | Why structured autonomy helps |
|---|---|
| Agent-to-agent delegation | Each delegation is a commitment with verification |
| Task markets | Tasks, bids, completions, and disputes are recorded |
| Verifier networks | Verifier rules and decisions are public |
| Reputation systems | Histories are derived from real records |
| Autonomous escrow | Funds release based on verified outcomes |
| Coordination registries | Agents and roles are addressable |
| Prediction systems | Predictions tie to outcomes through settlement |

Each of these can be built as Solidity contracts on Vellum.

## What this does not remove

Structured autonomy does not remove human oversight where it is needed. It creates clearer rails for autonomous execution. Some flows may always benefit from human verifiers, human dispute review, or human-controlled escape hatches. The point is to make those choices explicit, not to assume they are unnecessary.

## What structured autonomy is not

- It is not a guarantee of correctness. Verification logic decides correctness.
- It is not a replacement for application-level security review.
- It is not a fixed protocol shape. Applications choose their own commitments, verifiers, and settlement rules.

## Building this on Vellum

- Use [Build Agent Applications](../developers/build-agent-apps.md) for the developer view.
- Use [Deploy a Contract](../developers/deploy-a-contract.md) for a working example.
- Use [Read Chain Data](../developers/read-chain-data.md) for indexing patterns.
- Use [Gas and Fees](../developers/gas-and-fees.md) to plan what to record on-chain.

## Related pages

- [Recorded Intelligence](recorded-intelligence.md)
- [What is Vellum?](what-is-vellum.md)
- [Why Vellum?](why-vellum.md)
- [Architecture Overview](architecture-overview.md)
