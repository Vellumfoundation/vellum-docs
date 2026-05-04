# Bridge Overview

The Vellum bridge moves ETH and ERC-20 tokens between Base and Vellum. It uses an OP Stack style native bridge model and is designed to be compatible with Superbridge-style bridge UIs.

## What you can bridge

| Asset | Direction | Notes |
|---|---|---|
| ETH | Base to Vellum | Used as native gas on Vellum |
| ETH | Vellum to Base | Withdrawals require proving and a finalization window |
| Supported ERC-20s | Base to Vellum | Subject to canonical token mapping |
| Supported ERC-20s | Vellum to Base | Subject to canonical token mapping |

## Bridge URLs

| Field | Value |
|---|---|
| Bridge URL | TBD |
| Superbridge route | TBD |

{% hint style="warning" %}
Use only the official bridge URL listed in this documentation. Phishing sites that imitate bridge UIs are a common attack vector.
{% endhint %}

## Deposit flow (Base to Vellum)

1. User connects wallet to the bridge UI.
2. User selects asset and amount.
3. User submits the deposit transaction on Base.
4. Base bridge contracts hold the deposit and emit a deposit message.
5. Vellum credits the corresponding asset to the user's address.

Detail: [Deposit ETH from Base](deposit-eth-from-base.md), [Bridge ERC-20 Tokens](bridge-erc20-tokens.md).

## Withdrawal flow (Vellum to Base)

1. User initiates a withdrawal on Vellum.
2. Withdrawal is recorded in Vellum state.
3. State is included in a batch posted to Base.
4. An output root covering this state is posted to Base.
5. User proves the withdrawal on Base.
6. The bridge finalization window passes.
7. User claims the asset on Base.

Detail: [Withdraw ETH to Base](withdraw-eth-to-base.md), [Withdrawal Finalization](withdrawal-finalization.md).

## Latency expectations

| Direction | Expected timing |
|---|---|
| Deposit (Base to Vellum) | Minutes (driven by Base block time and Vellum deposit handling) |
| Withdrawal (Vellum to Base) | Hours to days, dominated by the finalization window |

{% hint style="warning" %}
Withdrawals are not instant. Anyone telling you otherwise is wrong about Vellum's bridge model.
{% endhint %}

## Costs

| Step | Cost |
|---|---|
| Deposit | Base gas to submit the deposit transaction |
| Withdraw initiate | Vellum gas |
| Withdraw prove | Base gas |
| Withdraw finalize | Base gas |

## Related pages

- [Bridge Architecture](../architecture/bridge-architecture.md)
- [Bridge Security](bridge-security.md)
- [Troubleshooting Bridge Transfers](troubleshooting-bridge-transfers.md)
- [Bridge Risk](../security/bridge-risk.md)
