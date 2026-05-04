# Bridge Architecture

Vellum's bridge is an OP Stack style native bridge between Base and Vellum. It moves ETH and ERC-20 tokens between the two chains, with a finalization window for withdrawals back to Base.

## Layered relationship

```text
Ethereum L1
   ↑
Base L2  <----  Vellum bridge contracts (Base side)
   ↑
Vellum L3  <--  Vellum bridge contracts (Vellum side)
```

Vellum is the L3. Base is the parent chain Vellum settles to. The bridge connects the L3 (Vellum) to its L2 parent (Base).

## Contracts

| Side | Role |
|---|---|
| Base | Standard bridge holds canonical deposits and emits messages to Vellum |
| Base | Portal coordinates deposit transactions into Vellum |
| Base | Output oracle records Vellum output roots |
| Base | L1 cross-domain messenger relays generic messages |
| Vellum | L2 standard bridge mints and releases bridged assets |
| Vellum | L2 cross-domain messenger relays generic messages |

Specific addresses are placeholders until launch. See [Contract Addresses](../developers/contract-addresses.md).

## ETH deposit flow

```text
User deposits ETH on Base
   ↓
Base bridge holds ETH
   ↓
Deposit message sent to Vellum
   ↓
Vellum credits user's ETH balance
```

Detail: [Deposit ETH from Base](../bridge/deposit-eth-from-base.md).

## ETH withdrawal flow

```text
User initiates withdrawal on Vellum
   ↓
Withdrawal message recorded in Vellum state
   ↓
Output root covering this state posted to Base
   ↓
User proves the withdrawal on Base
   ↓
Finalization window passes
   ↓
User claims ETH on Base
```

Detail: [Withdraw ETH to Base](../bridge/withdraw-eth-to-base.md) and [Withdrawal Finalization](../bridge/withdrawal-finalization.md).

## ERC-20 bridging

ERC-20 tokens use canonical token mapping. A token native to Base is represented by a canonical bridged token contract on Vellum, and vice versa. Bridging ERC-20s uses the standard bridge interfaces on each side.

Detail: [Bridge ERC-20 Tokens](../bridge/bridge-erc20-tokens.md).

## Canonical token mapping

| Property | Description |
|---|---|
| Origin chain | Where the asset is canonically issued |
| Bridged representation | Canonical contract on the destination chain |
| Mapping authority | Vellum bridge configuration controlled by governance |

Improperly mapped tokens are a real risk vector. See [Bridge Risk](../security/bridge-risk.md).

## Indexing

The bridge frontend and explorer rely on indexers that watch deposit and withdrawal events on both Base and Vellum. Indexers track:

- Deposits initiated on Base.
- Deposits credited on Vellum.
- Withdrawals initiated on Vellum.
- Withdrawals proven on Base.
- Withdrawals finalized on Base.

## Bridge metadata

Bridge UIs need standard metadata:

- Vellum chain ID.
- Vellum RPC URL.
- Vellum explorer URL.
- Base side bridge contracts.
- Vellum side bridge contracts.
- Token list.
- Branding assets.

This is what makes Vellum compatible with Superbridge-style bridge interfaces. See [Superbridge Compatibility](superbridge-compatibility.md).

## Why bridging matters for agent settlement rails

Vellum is the Base-settled L3 for Recorded Intelligence. Bridging is part of the settlement story, not just a way to move funds in and out:

- Users and agents need to move ETH from Base to Vellum to pay for execution gas.
- Applications may bridge ERC-20 assets for task payments, bounties, rewards, and protocol-level settlement.
- Bridge events themselves become part of the on-chain record path that agent markets can reference.
- Superbridge-compatible design improves user access and liquidity movement, which matters when agents and users transact frequently.

For the integration view, see [Superbridge Integration](../bridge/superbridge-integration.md).

## Related pages

- [Superbridge Compatibility](superbridge-compatibility.md)
- [Bridge Overview](../bridge/bridge-overview.md)
- [Bridge Risk](../security/bridge-risk.md)
