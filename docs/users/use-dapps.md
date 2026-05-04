# Use Dapps

This page covers connecting to and using dapps on Vellum.

## Prerequisites

- Vellum added to your wallet. See [Add Vellum to MetaMask](add-vellum-to-metamask.md).
- ETH on Vellum for gas.

## Connecting

1. Open the dapp.
2. Click **Connect Wallet**.
3. Pick your wallet provider.
4. In the wallet popup, switch to Vellum if prompted.
5. Approve the connection.

The dapp should now show your Vellum address and the network as Vellum.

## Reading transactions before signing

Before approving any transaction:

- Read the action your wallet describes.
- Verify the destination address.
- Confirm the gas estimate is reasonable.
- For token approvals, prefer the smallest allowance you need.

{% hint style="danger" %}
Never sign a transaction you do not understand. Phishing dapps craft signatures that look benign but transfer assets or grant unlimited approvals.
{% endhint %}

## Token allowances

Many dapps require token approvals. Best practices:

- Approve a finite amount when possible.
- Periodically review and revoke unused approvals.
- Use the explorer or trusted approval-management tools to inspect outstanding approvals.

## Disconnecting

- Most dapps offer a Disconnect button in the wallet menu.
- You can also remove site permissions from your wallet's connected sites list.

## Switching back from Vellum

Switch the active network in your wallet to Base, Ethereum, or any other chain you have configured. The dapp may need a refresh.

## Common issues

| Symptom | Likely cause |
|---|---|
| Wallet does not recognize the dapp | Wrong network selected |
| Insufficient funds errors | No ETH on Vellum for gas |
| Stale data | RPC lag or indexer lag; refresh the page |
| Transaction stuck | Low gas; wait or speed up via wallet UI |

## Reporting suspicious dapps

If a dapp asks for unusual signatures, claims to be Vellum-affiliated without listing in this documentation, or pressures you to act quickly, do not connect. Report it via the channels in [Links](../reference/links.md).

## Related pages

- [Add Vellum to MetaMask](add-vellum-to-metamask.md)
- [Send ETH](send-eth.md)
- [Common Wallet Errors](common-wallet-errors.md)
