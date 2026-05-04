# Bridge Architecture

Vellum uses an OP Stack/Superchain-style native bridge architecture between Base and Vellum.

## Relationship between layers

```text
Ethereum L1
   ↓
Base L2
   ↓ bridge parent chain
Vellum L3
   ↓ bridge child chain
Users and dapps
```

Base is the parent chain. Vellum is the child chain. ETH deposits move from Base to Vellum through Base-side bridge contracts. ETH withdrawals start on Vellum, are proven against the relevant output, then finalized on Base after the required period.

## Deposit flow

1. User starts an ETH deposit on Base.
2. Base-side bridge contract receives the deposit.
3. A cross-domain message represents the deposit for Vellum.
4. ETH becomes available on Vellum after the deposit is processed.
5. The user pays future Vellum gas with ETH.

## Withdrawal flow

1. User initiates withdrawal on Vellum.
2. Withdrawal message is recorded on Vellum.
3. Output proposal becomes available on Base.
4. User proves the withdrawal.
5. User waits through the required finalization period.
6. User finalizes on Base and receives assets.

## ERC-20 bridging

ERC-20 bridging uses canonical token mapping. A parent token on Base maps to a corresponding token representation on Vellum. Token metadata, bridge addresses, and token routes must be published and tested before public launch.

## Metadata and indexing

Bridge UIs need:

- Chain ID.
- Public RPC.
- Explorer.
- Parent bridge contracts.
- Vellum bridge contracts.
- Token list.
- Icons and branding assets.
- Tested deposit and withdrawal routes.
- Bridge indexer support for user status.

{% hint style="warning" %}
Withdrawals should not be described as instant when proof and finalization steps are required.
{% endhint %}

## Related pages

- [Superbridge Compatibility](superbridge-compatibility.md)
- [Bridge Overview](../bridge/bridge-overview.md)
- [Withdrawal Finalization](../bridge/withdrawal-finalization.md)
