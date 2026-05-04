# Architecture Overview

Vellum is an Ethereum L3 rollup that uses Base as its settlement layer.

```text
Ethereum L1
   ↓
Base L2
   ↓
Vellum L3
   ↓
Applications and users
```

## System components

| Component | Role |
|---|---|
| Sequencer | Produces Vellum blocks |
| Execution node | Executes EVM transactions |
| Batch submitter | Posts transaction data or batches to Base |
| Proposer | Posts output roots for withdrawal flows |
| Bridge contracts | Move ETH and supported tokens between Base and Vellum |
| RPC gateway | Serves public JSON-RPC and WebSocket traffic |
| Explorer indexer | Indexes blocks, transactions, contracts, and logs |
| Monitoring stack | Tracks health, latency, lag, and incidents |

## Data flow

```text
User transaction
   ↓
Vellum RPC
   ↓
Sequencer
   ↓
Vellum block
   ↓
Batch submission to Base
   ↓
Output proposal
   ↓
Withdrawal proving and finalization
```

{% hint style="info" %}
The final implementation details should be checked against the live deployment artifacts before public launch.
{% endhint %}

## Related pages

- [L3 Rollup Architecture](../architecture/l3-rollup-architecture.md)
- [Base Settlement](../architecture/base-settlement.md)
- [Bridge Architecture](../architecture/bridge-architecture.md)
