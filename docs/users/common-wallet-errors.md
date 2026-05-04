# Common Wallet Errors

This page covers common wallet errors when using Vellum, with quick fixes.

## Insufficient funds for gas

Symptom: the wallet rejects sends with an "insufficient funds" message.

Cause: the address has no ETH on Vellum.

Fix:

- Bridge ETH from Base. See [Deposit ETH from Base](../bridge/deposit-eth-from-base.md).
- Receive ETH from another Vellum address.
- For testnet, request from a [faucet](../network/faucets.md).

## Wrong network

Symptom: a dapp does not recognize the wallet, or transactions go to the wrong chain.

Cause: the wallet is connected to a network other than Vellum.

Fix:

- Switch to Vellum from the wallet network selector.
- If Vellum is missing, follow [Add Vellum to MetaMask](add-vellum-to-metamask.md).

## Chain ID mismatch

Symptom: the wallet refuses to send, citing a chain ID mismatch.

Cause: the configured chain ID for Vellum is wrong.

Fix:

- Open the wallet's network configuration.
- Confirm the Chain ID matches the value in [Network Information](../network/network-information.md).
- Update if needed.

## RPC failure

Symptom: balance does not load, transactions stall, or the wallet shows a connection error.

Cause: RPC node is unreachable or slow.

Fix:

- Reload the wallet.
- Confirm the RPC URL is the official one.
- Check the [Network Status](../network/network-status.md) page.

## Transaction stuck

Symptom: a transaction is pending for a long time.

Cause: gas is too low, or the network is congested.

Fix:

- Use the wallet's speed-up feature to resubmit with higher gas.
- Or cancel the transaction from the wallet and try again.

## Nonce issues

Symptom: errors mentioning nonce.

Cause: the wallet's local nonce is out of sync with the network.

Fix:

- Wait for pending transactions to confirm.
- In MetaMask, you can reset the account's transaction history under advanced settings (this clears local pending nonces only; it does not affect your funds).

## Token does not appear

Symptom: an ERC-20 token balance does not show in the wallet.

Cause: the wallet has not added the token yet.

Fix:

- Use the wallet's "Import token" or "Add custom token" feature.
- Use the canonical token address from the official token list.

## Phishing

Symptom: a site or message asks to add Vellum with values that do not match this documentation, asks for a seed phrase, or rushes you to sign.

Fix:

- Do not connect.
- Do not paste a seed phrase or private key.
- Verify links against this documentation.

{% hint style="danger" %}
Vellum infrastructure will never ask for a seed phrase or private key.
{% endhint %}

## Related pages

- [Add Vellum to MetaMask](add-vellum-to-metamask.md)
- [Bridge to Vellum](bridge-to-vellum.md)
- [Network Status](../network/network-status.md)
- [Troubleshooting Bridge Transfers](../bridge/troubleshooting-bridge-transfers.md)
