# Deploy a Contract

This page walks through deploying a simple Solidity contract on Vellum.

## The contract

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

This contract stores a message, allows updating it, and emits an event on update. It is a useful sanity check that deployment, transactions, and events all work end-to-end on Vellum.

## Why ETH is required for deployment gas

Deployment is a transaction. Like any transaction on Vellum, it consumes gas, and gas is paid in ETH. Make sure the deployment account has ETH on Vellum before deploying.

See [ETH Native Gas](../architecture/eth-native-gas.md) and [Gas and Fees](gas-and-fees.md).

## Deploy with Hardhat

`scripts/deploy.ts`:

```ts
import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("VellumHello");
  const contract = await Factory.deploy("Hello, Vellum");
  await contract.waitForDeployment();

  console.log("Deployed to:", await contract.getAddress());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

Run:

```bash
npx hardhat run scripts/deploy.ts --network vellum
```

See [Use Hardhat](use-hardhat.md) for the configuration.

## Deploy with Foundry

`script/Deploy.s.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import {VellumHello} from "../src/VellumHello.sol";

contract DeployScript is Script {
    function run() external {
        vm.startBroadcast();
        new VellumHello("Hello, Vellum");
        vm.stopBroadcast();
    }
}
```

Run:

```bash
forge script script/Deploy.s.sol:DeployScript \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast
```

See [Use Foundry](use-foundry.md).

## Verify the deployment

After deployment:

1. Save the address from the script output.
2. Open the Vellum [block explorer](../network/block-explorer.md).
3. Search the address.
4. Verify the contract source. See [Verify a Contract](verify-a-contract.md).

## Common deployment errors

| Error | Cause | Fix |
|---|---|---|
| `insufficient funds for gas` | Deployer has no ETH on Vellum | Bridge ETH from Base or fund the address |
| `chainId mismatch` | Wrong network configured | Confirm RPC URL and chain ID |
| `nonce too low` | Stale nonce | Refresh wallet or wait for previous tx to confirm |
| `invalid opcode` at deploy | Solidity version mismatch with target | Adjust Solidity compiler version |
| Verification mismatch | Compiler settings differ | Match the exact compiler version, optimizer, and runs |

## Test before mainnet

Always deploy on testnet first. See the [Testnet Roadmap](../roadmap/testnet.md) and [Faucets](../network/faucets.md).

## Related pages

- [Verify a Contract](verify-a-contract.md)
- [Use Hardhat](use-hardhat.md)
- [Use Foundry](use-foundry.md)
- [Send Transactions](send-transactions.md)
- [Read Chain Data](read-chain-data.md)
