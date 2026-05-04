# Use Hardhat

Hardhat works with Vellum through the standard JSON-RPC network configuration.

## Install

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
```

## Configuration

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

## Deploy

```bash
npx hardhat run scripts/deploy.ts --network vellum
```

## Tips

- Keep `VELLUM_CHAIN_ID` outside source code.
- Never commit private keys.
- Use ETH on Vellum for deployment gas.
- Verify contracts after deployment.

## Related pages

- [Deploy a Contract](deploy-a-contract.md)
- [Verify a Contract](verify-a-contract.md)
- [Gas and Fees](gas-and-fees.md)
