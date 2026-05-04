# Use thirdweb

thirdweb provides SDKs and dashboard tools for deploying and interacting with contracts on EVM chains. Vellum can be added as a custom chain.

## Install

```bash
npm install thirdweb
```

## Define the chain

```ts
import { defineChain } from "thirdweb/chains";

export const vellum = defineChain({
  id: Number(process.env.VELLUM_CHAIN_ID),
  name: "Vellum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpc: process.env.VELLUM_RPC_URL!,
  blockExplorers: [
    {
      name: "Vellum Explorer",
      url: "TBD"
    }
  ]
});
```

## Create a client

```ts
import { createThirdwebClient } from "thirdweb";

export const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID!
});
```

## Read a contract

```ts
import { getContract, readContract } from "thirdweb";

const contract = getContract({
  client,
  chain: vellum,
  address: "0xYOUR_ADDRESS"
});

const message = await readContract({
  contract,
  method: "function message() view returns (string)",
  params: []
});

console.log(message);
```

## Write a contract

```ts
import { sendTransaction, prepareContractCall } from "thirdweb";
import { privateKeyToAccount } from "thirdweb/wallets";

const account = privateKeyToAccount({
  client,
  privateKey: process.env.PRIVATE_KEY!
});

const tx = prepareContractCall({
  contract,
  method: "function setMessage(string)",
  params: ["Hello, Vellum"]
});

const result = await sendTransaction({ account, transaction: tx });
console.log(result.transactionHash);
```

## Deploy via CLI

The thirdweb CLI can deploy contracts to any custom chain. Pass Vellum's RPC URL when prompted, or configure the chain in the project.

```bash
npx thirdweb deploy
```

## Tips

- Once Vellum is added in thirdweb, the same chain definition can be reused across all SDK calls.
- For dashboards, ensure the explorer URL is published so contract pages link out correctly.

## Related pages

- [Use Hardhat](use-hardhat.md)
- [Use Foundry](use-foundry.md)
- [Use ethers.js](use-ethers.md)
- [Use viem](use-viem.md)
