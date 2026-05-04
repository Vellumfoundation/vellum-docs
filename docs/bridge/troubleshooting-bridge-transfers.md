# Troubleshooting Bridge Transfers

Use this page when a deposit or withdrawal does not appear to progress as expected.

## First checks

| Check | Why |
|---|---|
| Official URL | Avoid bridge phishing |
| Source chain | Deposits start on Base, withdrawals start on Vellum |
| Transaction hash | Confirms whether the transaction was submitted |
| Wallet address | Confirms the destination |
| Status page | Identifies known incidents |
| Explorer | Confirms on-chain state |

## Common issues

| Issue | Likely cause | Action |
|---|---|---|
| Deposit pending | Bridge message still processing | Wait and check source transaction |
| Withdrawal not provable | Output not available yet | Wait for proposal and retry |
| Finalize unavailable | Finalization period not complete | Wait until the bridge UI permits finalization |
| Wrong token | Incorrect route or token mapping | Stop and verify official token list |
| RPC error | Endpoint degraded | Check status and retry later |

{% hint style="danger" %}
Never paste your private key or seed phrase into a support form. Official support should only need public transaction hashes and addresses.
{% endhint %}

## Related pages

- [Deposit ETH from Base](deposit-eth-from-base.md)
- [Withdraw ETH to Base](withdraw-eth-to-base.md)
- [Common Wallet Errors](../users/common-wallet-errors.md)
