# Bridge ERC-20 Tokens

ERC-20 bridging works through canonical token mapping. A token on one side has a canonical bridged representation on the other side.

## Concepts

| Term | Meaning |
|---|---|
| Origin token | The canonical token on its native chain |
| Bridged token | The canonical representation on the destination chain |
| Token mapping | The relationship that links origin and bridged tokens |
| Canonical bridge | The contract authorized to mint or release the bridged token |

## Direction-aware behavior

| Direction | What happens |
|---|---|
| Base to Vellum | Origin token is locked in the Base bridge; canonical bridged token is minted on Vellum |
| Vellum to Base | Bridged token is burned on Vellum; origin token is released on Base |
| Token native to Vellum, bridged to Base | Origin is locked on Vellum; canonical bridged token is minted on Base |

## Step by step (Base to Vellum)

1. Open the official Vellum bridge UI.
2. Connect a wallet on Base holding the token.
3. Choose Base as source and Vellum as destination.
4. Select the token.
5. Approve the bridge to spend the token if not already approved.
6. Submit the deposit transaction on Base.
7. Wait for the bridged balance to appear on Vellum.

## Step by step (Vellum to Base)

1. Open the bridge UI.
2. Connect a wallet on Vellum holding the bridged token.
3. Choose Vellum as source and Base as destination.
4. Select the token.
5. Initiate the withdrawal on Vellum.
6. Wait for the withdrawal to be eligible to prove on Base.
7. Submit the prove transaction on Base.
8. Wait for the finalization window.
9. Submit the claim transaction on Base to receive the origin token.

## Token list

The official Vellum token list is published alongside bridge integration. Tokens not on the list may not be supported by the bridge UI even if they are technically bridgeable.

## Mapping risk

{% hint style="warning" %}
Always confirm that the token you are bridging matches the canonical mapping. Tokens with the same name or symbol but different contract addresses are not the same asset. Bridging the wrong token can result in a permanently locked balance.
{% endhint %}

See [Bridge Risk](../security/bridge-risk.md).

## Approvals

The first time you bridge a token, you will be prompted to approve the bridge contract to spend it. Set a sane allowance. Avoid unlimited approvals if you do not need them.

## Costs

| Step | Where gas is paid |
|---|---|
| Approval | Source chain |
| Deposit | Source chain |
| Withdrawal initiate | Source chain (Vellum, when withdrawing) |
| Prove and finalize | Destination chain (Base, when withdrawing) |

## Related pages

- [Deposit ETH from Base](deposit-eth-from-base.md)
- [Withdraw ETH to Base](withdraw-eth-to-base.md)
- [Bridge Architecture](../architecture/bridge-architecture.md)
- [Troubleshooting Bridge Transfers](troubleshooting-bridge-transfers.md)
