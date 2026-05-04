# Developer Quickstart

This guide walks through deploying and interacting with a contract on Vellum using standard EVM tooling.

## Prerequisites

- Node.js 18+ installed.
- A wallet with ETH on Vellum for gas.
- A code editor.
- One of: Hardhat, Foundry, or Remix.

## 1. Add Vellum to your wallet

Use the values from [Network Information](../network/network-information.md):

| Field | Value |
|---|---|
| Network name | Vellum |
| RPC URL | TBD |
| Chain ID | TBD |
| Currency symbol | ETH |
| Block explorer URL | TBD |

Detail: [Wallet Setup](../network/wallet-setup.md).

## 2. Set environment variables

```bash
export VELLUM_RPC_URL=TBD
export VELLUM_CHAIN_ID=TBD
export VELLUM_EXPLORER_API_URL=TBD
export VELLUM_EXPLORER_API_KEY=TBD
export PRIVATE_KEY=0x...
```

{% hint style="danger" %}
Never commit private keys. Use environment files that are git-ignored, or a secret manager.
{% endhint %}

## 3. Install dependencies

For Hardhat:

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
```

For Foundry:

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

## 4. Deploy with Hardhat

Configure Vellum in [hardhat.config.ts](#) (see [Use Hardhat](use-hardhat.md)) and run:

```bash
npx hardhat run scripts/deploy.ts --network vellum
```

## 5. Deploy with Foundry

Configure Vellum in [foundry.toml](#) (see [Use Foundry](use-foundry.md)) and run:

```bash
forge script script/Deploy.s.sol:DeployScript \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast
```

## 6. Send a transaction

A minimal ethers.js example:

```ts
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.VELLUM_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

const tx = await wallet.sendTransaction({
  to: "0x0000000000000000000000000000000000000000",
  value: ethers.parseEther("0.001")
});

console.log(tx.hash);
```

See [Use ethers.js](use-ethers.md) and [Use viem](use-viem.md) for more.

## 7. Verify deployment

- Open the Vellum [block explorer](../network/block-explorer.md).
- Search for your deployment transaction or contract address.
- Confirm the contract is present.
- Verify the source code: see [Verify a Contract](verify-a-contract.md).

## 8. Read contract state

```ts
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.VELLUM_RPC_URL);
const abi = ["function message() view returns (string)"];
const contract = new ethers.Contract("0xYOUR_ADDRESS", abi, provider);

console.log(await contract.message());
```

## 9. Troubleshooting

| Symptom | Likely cause |
|---|---|
| `insufficient funds for gas` | Wallet has no ETH on Vellum |
| `chainId mismatch` | RPC URL or chain ID is wrong |
| `nonce too low / high` | Transaction nonce out of sync, refresh wallet |
| Contract not found in explorer | Wait for indexer to catch up |
| Verification fails | Solidity version or settings differ from deployment |

For wallet issues see [Common Wallet Errors](../users/common-wallet-errors.md).

## Next steps

- [Deploy a Contract](deploy-a-contract.md)
- [Use Hardhat](use-hardhat.md)
- [Use Foundry](use-foundry.md)
- [Interact with RPC](interact-with-rpc.md)
- [Gas and Fees](gas-and-fees.md)
