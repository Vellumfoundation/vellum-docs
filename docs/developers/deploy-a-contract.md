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

## A more relevant example: SimpleCommitmentRegistry

Vellum is the Base-settled L3 for Recorded Intelligence. A more representative example contract is a minimal commitment registry that captures the lifecycle most agent coordination flows share.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleCommitmentRegistry {
    enum Status {
        Pending,
        Completed,
        Verified,
        Disputed,
        Settled
    }

    struct Commitment {
        address creator;
        address executor;
        bytes32 taskHash;
        bytes32 resultHash;
        Status status;
        uint256 createdAt;
        uint256 updatedAt;
    }

    uint256 public nextCommitmentId;
    mapping(uint256 => Commitment) public commitments;

    event CommitmentCreated(uint256 indexed commitmentId, address indexed creator, address indexed executor, bytes32 taskHash);
    event ResultSubmitted(uint256 indexed commitmentId, bytes32 resultHash);
    event CommitmentVerified(uint256 indexed commitmentId);
    event CommitmentDisputed(uint256 indexed commitmentId);
    event CommitmentSettled(uint256 indexed commitmentId);

    function createCommitment(address executor, bytes32 taskHash) external returns (uint256 commitmentId) {
        commitmentId = nextCommitmentId++;

        commitments[commitmentId] = Commitment({
            creator: msg.sender,
            executor: executor,
            taskHash: taskHash,
            resultHash: bytes32(0),
            status: Status.Pending,
            createdAt: block.timestamp,
            updatedAt: block.timestamp
        });

        emit CommitmentCreated(commitmentId, msg.sender, executor, taskHash);
    }

    function submitResult(uint256 commitmentId, bytes32 resultHash) external {
        Commitment storage commitment = commitments[commitmentId];
        require(msg.sender == commitment.executor, "Only executor");
        require(commitment.status == Status.Pending, "Invalid status");

        commitment.resultHash = resultHash;
        commitment.status = Status.Completed;
        commitment.updatedAt = block.timestamp;

        emit ResultSubmitted(commitmentId, resultHash);
    }

    function verify(uint256 commitmentId) external {
        Commitment storage commitment = commitments[commitmentId];
        require(msg.sender == commitment.creator, "Only creator");
        require(commitment.status == Status.Completed, "Invalid status");

        commitment.status = Status.Verified;
        commitment.updatedAt = block.timestamp;

        emit CommitmentVerified(commitmentId);
    }

    function dispute(uint256 commitmentId) external {
        Commitment storage commitment = commitments[commitmentId];
        require(msg.sender == commitment.creator || msg.sender == commitment.executor, "Not participant");
        require(commitment.status == Status.Completed, "Invalid status");

        commitment.status = Status.Disputed;
        commitment.updatedAt = block.timestamp;

        emit CommitmentDisputed(commitmentId);
    }

    function settle(uint256 commitmentId) external {
        Commitment storage commitment = commitments[commitmentId];
        require(msg.sender == commitment.creator, "Only creator");
        require(commitment.status == Status.Verified, "Not verified");

        commitment.status = Status.Settled;
        commitment.updatedAt = block.timestamp;

        emit CommitmentSettled(commitmentId);
    }
}
```

### Notes on this example

- This is a simple example only.
- Production task markets should include escrow, token payments, verifier roles, slashing rules, dispute windows, and stronger access control.
- Events make commitments and outcomes indexable, which is the basis for dashboards and reputation systems.
- The `taskHash` and `resultHash` fields can point to off-chain task descriptions, model outputs, datasets, or result bundles. Putting hashes on-chain keeps the record cheap while preserving verifiability against off-chain content.
- For a deeper walk-through of agent application patterns, see [Build Agent Applications](build-agent-apps.md).

## Related pages

- [Verify a Contract](verify-a-contract.md)
- [Use Hardhat](use-hardhat.md)
- [Use Foundry](use-foundry.md)
- [Send Transactions](send-transactions.md)
- [Read Chain Data](read-chain-data.md)
