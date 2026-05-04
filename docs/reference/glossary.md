# Glossary

Definitions for terms used across Vellum's documentation.

## Base

The Ethereum L2 that Vellum settles to. Vellum batches and output roots are posted to Base.

## Batch

A group of Vellum transactions posted to Base by the batch submitter.

## Batch submitter

The service that posts Vellum batches to Base.

## Bridge

The system of contracts and services that move ETH and ERC-20 tokens between Base and Vellum.

## Canonical token

The official representation of an asset on a chain, recognized by the bridge for canonical mapping.

## Chain ID

A unique identifier for a chain, used in EIP-155 transaction signatures and in wallet configuration.

## Cross-domain messenger

A contract that relays messages between Base and Vellum.

## Data availability (DA)

The property that data needed to reconstruct Vellum state is publicly retrievable.

## EVM

The Ethereum Virtual Machine. Vellum is EVM-compatible.

## Faucet

A testnet-only service that distributes small amounts of testnet ETH.

## Finality

The property that a transaction will not be reverted by a future change of state.

## Finalization window

The period after a withdrawal can be proven on Base before it can be claimed. Part of bridge security.

## Gas

The unit of computational work consumed by EVM transactions. Gas is paid in ETH on Vellum.

## Indexer

A service that consumes chain data and serves it through structured APIs.

## L1

Layer 1: Ethereum mainnet.

## L2

Layer 2: in Vellum's stack, this is Base.

## L3

Layer 3: in Vellum's stack, this is Vellum.

## Multisig

A contract or wallet that requires multiple signatures to authorize a transaction.

## Output proposer

The service that posts Vellum output roots to Base.

## Output root

A cryptographic commitment to Vellum state at a specific block.

## OP Stack

A widely used family of rollup software and bridge contracts. Vellum's bridge follows the OP Stack native bridge model.

## Predeploy

A system contract deployed at a fixed address on Vellum.

## Proposer

Same as output proposer in this documentation.

## Replay protection

The property that prevents a signed transaction on one chain from being used on another. Vellum uses EIP-155.

## RPC

Remote procedure call. Vellum exposes Ethereum JSON-RPC over HTTPS and WebSocket.

## Sequencer

The service that orders Vellum transactions and produces blocks.

## Settlement

The process by which Vellum's data and state commitments are recorded on Base.

## Superbridge-compatible

Vellum exposes the metadata and bridge contracts a Superbridge-style bridge UI requires.

## Testnet

A non-production environment for testing.

## Time lock

A delay between when a transaction is approved and when it can be executed.

## Withdrawal

A bridge transfer from Vellum to Base.

## Related pages

- [FAQ](faq.md)
- [Links](links.md)
- [What is Vellum?](../introduction/what-is-vellum.md)
