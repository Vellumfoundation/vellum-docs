# Vellum Testnet Configs

Source-of-truth genesis and rollup configuration files for the Vellum testnet (settles to Base Sepolia).

| File | Purpose |
|---|---|
| `genesis.json` | L2 genesis state. Used by the execution client (`op-geth`) to initialize the chain. |
| `rollup.json` | Rollup configuration. Used by `op-node` to derive blocks from the L1 (Base Sepolia). |

Quick facts:

| Field | Value |
|---|---|
| L2 chain ID | 80411 |
| L1 chain ID | 84532 (Base Sepolia) |
| Block time | 1s |
| Genesis timestamp | 1777891838 (2026-05-04 10:50:38 UTC) |

For a full walkthrough of how to use these files to run a Vellum node, see [Run Your Own Node](../../docs/operators/run-your-own-node.md).
