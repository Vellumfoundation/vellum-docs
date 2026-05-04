# Deploy a Contract

This page deploys a simple Solidity contract to Vellum.

## Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VellumHello {
    string public message;

    event MessageUpdated(string message);

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string calldata newMessage) external {
        message = newMessage;
        emit MessageUpdated(newMessage);
    }
}
```

## Deploy it

With Hardhat:

```bash
npx hardhat run scripts/deploy.ts --network vellum
```

With Foundry:

```bash
forge create src/VellumHello.sol:VellumHello \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY \
  --constructor-args "hello vellum"
```

## Verify it

Use the Vellum explorer verification flow when the explorer API is live. Keep the compiler version, optimizer settings, source path, and constructor arguments consistent with deployment.

## Common deployment errors

| Error | Cause | Fix |
|---|---|---|
| Insufficient funds | Wallet has no ETH on Vellum | Bridge or receive ETH |
| Chain ID mismatch | Tool connected to wrong network | Check `VELLUM_CHAIN_ID` |
| Nonce too low | Account nonce already used | Refresh nonce from RPC |
| Gas estimation failed | Constructor or call may revert | Test locally and inspect revert data |

{% hint style="info" %}
ETH is required for deployment gas on Vellum. There is no custom gas token.
{% endhint %}

## Related pages

- [Verify a Contract](verify-a-contract.md)
- [Use Hardhat](use-hardhat.md)
- [Use Foundry](use-foundry.md)
