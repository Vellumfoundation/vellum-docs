# Use Hardhat

Hardhat is a popular development environment for Ethereum-compatible chains. Vellum works with the standard Hardhat setup.

## Install

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
```

## Configure

Set environment variables:

```bash
export VELLUM_RPC_URL=TBD
export VELLUM_CHAIN_ID=TBD
export PRIVATE_KEY=0x...
```

`hardhat.config.ts`:

```ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    vellum: {
      url: process.env.VELLUM_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: Number(process.env.VELLUM_CHAIN_ID || 0)
    }
  }
};

export default config;
```

## Compile

```bash
npx hardhat compile
```

## Deploy

A minimal `scripts/deploy.ts`:

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

## Verify

Add the explorer entry to the verification plugin's `etherscan` section in `hardhat.config.ts`:

```ts
const config: HardhatUserConfig = {
  // ...
  etherscan: {
    apiKey: {
      vellum: process.env.VELLUM_EXPLORER_API_KEY || ""
    },
    customChains: [
      {
        network: "vellum",
        chainId: Number(process.env.VELLUM_CHAIN_ID || 0),
        urls: {
          apiURL: process.env.VELLUM_EXPLORER_API_URL || "",
          browserURL: "TBD"
        }
      }
    ]
  }
};
```

Then run:

```bash
npx hardhat verify --network vellum 0xYOUR_ADDRESS "Hello, Vellum"
```

## Tips

- Use a `.env` file with a tool like `dotenv` to keep secrets out of the repo.
- Test on a local fork before deploying to Vellum.
- Pin the Solidity version to match across compile and verify.

## Related pages

- [Deploy a Contract](deploy-a-contract.md)
- [Verify a Contract](verify-a-contract.md)
- [Send Transactions](send-transactions.md)
