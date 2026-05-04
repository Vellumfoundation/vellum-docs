# Use Remix

Remix is a browser-based Solidity IDE. It is a fast way to deploy and test contracts on Vellum without any local setup.

## Open Remix

Go to https://remix.ethereum.org.

## Connect to Vellum

1. Open the Deploy and Run Transactions panel.
2. In the Environment dropdown, select **Injected Provider - MetaMask**.
3. In MetaMask, switch to the Vellum network. See [Wallet Setup](../network/wallet-setup.md) if you have not added it yet.
4. Confirm the Account dropdown in Remix shows your wallet address and the chain ID matches Vellum.

{% hint style="warning" %}
Verify that MetaMask is connected to Vellum and not Base or Ethereum before deploying. Remix will deploy to whichever network MetaMask is on.
{% endhint %}

## Compile

1. Open the Solidity Compiler tab.
2. Pick a compiler version compatible with your contract.
3. Click **Compile**.

## Deploy

1. Open the Deploy and Run Transactions tab.
2. Pick the contract from the Contract dropdown.
3. If the contract has constructor arguments, fill them in.
4. Click **Deploy**.
5. Confirm the transaction in MetaMask.
6. Wait for confirmation. The deployed contract appears under Deployed Contracts.

## Interact

The Deployed Contracts panel exposes the contract's read and write functions. Click a function to call it. Read functions execute against the RPC; write functions submit a transaction through MetaMask.

## Verify

Remix has a verification plugin that supports custom explorers. Configure it with:

- Vellum chain ID.
- Vellum explorer API URL.
- Vellum explorer API key.

These will be filled with the published values once Vellum's explorer is live.

## Tips

- Use Remix for quick iteration. For larger projects move to Hardhat or Foundry.
- Save deployment addresses immediately. Refreshing Remix loses unsaved state.
- For production deploys, prefer a script-based flow over Remix.

## Related pages

- [Deploy a Contract](deploy-a-contract.md)
- [Wallet Setup](../network/wallet-setup.md)
- [Verify a Contract](verify-a-contract.md)
