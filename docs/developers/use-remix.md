# Use Remix

Remix can deploy Solidity contracts to Vellum through an injected wallet such as MetaMask.

## Steps

1. Add Vellum to MetaMask.
2. Open Remix.
3. Compile your Solidity contract.
4. Select **Injected Provider** in the deploy panel.
5. Confirm MetaMask is connected to Vellum.
6. Deploy the contract.
7. Save the deployment address and transaction hash.
8. Verify the contract in the explorer when available.

{% hint style="warning" %}
Always confirm MetaMask is on Vellum before deploying from Remix. Deploying to the wrong chain can waste gas and confuse users.
{% endhint %}

## Recommended settings

| Setting | Value |
|---|---|
| Compiler | Match your source pragma |
| EVM version | Default unless your project requires otherwise |
| Optimizer | Match your verification plan |
| Network | Vellum |
| Gas token | ETH |

## Related pages

- [Wallet Setup](../network/wallet-setup.md)
- [Deploy a Contract](deploy-a-contract.md)
- [Verify a Contract](verify-a-contract.md)
