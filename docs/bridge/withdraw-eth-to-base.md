# Withdraw ETH to Base

This page explains how to move ETH from Vellum back to Base. Withdrawals require proving the withdrawal on Base and waiting for a finalization window.

## What you need

- A wallet connected to Vellum with ETH to withdraw, plus ETH on Vellum for gas.
- The same wallet on Base, with a small amount of ETH for the prove and claim transactions.
- The official Vellum bridge URL.

## Step by step

1. Open the official Vellum bridge UI. URL: TBD.
2. Connect a wallet on Vellum.
3. Set the source network to Vellum and destination to Base.
4. Select ETH as the asset.
5. Enter the amount to withdraw.
6. Confirm the withdrawal initiation transaction on Vellum.
7. Wait for the withdrawal to be included in a batch on Base.
8. Wait for an output root covering your withdrawal to be posted to Base.
9. Submit the prove transaction on Base when the bridge UI indicates it is ready.
10. Wait for the finalization window to pass.
11. Submit the claim (finalize) transaction on Base.
12. Receive ETH on Base.

## Timing

| Step | Typical timing |
|---|---|
| Initiate on Vellum | Seconds |
| Included in a Base batch | Minutes |
| Output root covering withdrawal posted | Minutes to hours |
| Finalization window | Hours to days, depending on bridge configuration |
| Claim on Base | Seconds, once eligible |

{% hint style="warning" %}
Withdrawals are not instant. Vellum's bridge has a finalization window. Plan accordingly.
{% endhint %}

## What happens behind the scenes

```text
Wallet on Vellum initiates withdrawal
   ↓ Vellum tx
Withdrawal recorded in Vellum state
   ↓ batch submission
State included in batch on Base
   ↓ output proposer
Output root posted on Base
   ↓ user proves on Base
Prove transaction recorded
   ↓ wait for finalization window
   ↓ user finalizes on Base
ETH released on Base
```

See [Bridge Architecture](../architecture/bridge-architecture.md), [Output Proposals](../architecture/output-proposals.md), and [Withdrawal Finalization](withdrawal-finalization.md).

## Costs

| Step | Where gas is paid |
|---|---|
| Initiate withdrawal | Vellum (gas in ETH) |
| Prove on Base | Base (gas in ETH) |
| Claim on Base | Base (gas in ETH) |

## Recipient address

By default the recipient on Base is the sender on Vellum. Some bridge UIs allow specifying a different recipient. Verify the address before submitting.

## If you do not see the withdrawal as ready to prove or finalize

- Confirm the withdrawal transaction on the Vellum [block explorer](../network/block-explorer.md).
- Wait for the bridge UI to update. The output proposer cadence and finalization window dictate when actions become available.
- Check the [Network Status](../network/network-status.md) page.
- See [Troubleshooting Bridge Transfers](troubleshooting-bridge-transfers.md).

## Related pages

- [Withdrawal Finalization](withdrawal-finalization.md)
- [Bridge Overview](bridge-overview.md)
- [Bridge Security](bridge-security.md)
- [Bridge Risk](../security/bridge-risk.md)
