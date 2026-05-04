# Use viem

viem is a TypeScript library for building EVM applications. Vellum is fully compatible.

## Install

```bash
npm install viem
```

## Define the chain

```ts
import { defineChain } from "viem";

export const vellum = defineChain({
  id: Number(process.env.VELLUM_CHAIN_ID),
  name: "Vellum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: [process.env.VELLUM_RPC_URL!]
    }
  }
});
```

## Send a transaction

```ts
import { createPublicClient, createWalletClient, http, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { defineChain } from "viem";

export const vellum = defineChain({
  id: Number(process.env.VELLUM_CHAIN_ID),
  name: "Vellum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: [process.env.VELLUM_RPC_URL!]
    }
  }
});

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

const walletClient = createWalletClient({
  account,
  chain: vellum,
  transport: http(process.env.VELLUM_RPC_URL)
});

const hash = await walletClient.sendTransaction({
  to: "0x0000000000000000000000000000000000000000",
  value: parseEther("0.001")
});

console.log(hash);
```

## Read contract state

```ts
import { createPublicClient, http } from "viem";

const publicClient = createPublicClient({
  chain: vellum,
  transport: http(process.env.VELLUM_RPC_URL)
});

const message = await publicClient.readContract({
  address: "0xYOUR_ADDRESS",
  abi: [
    { type: "function", name: "message", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] }
  ],
  functionName: "message"
});

console.log(message);
```

## Write contract state

```ts
const hash = await walletClient.writeContract({
  address: "0xYOUR_ADDRESS",
  abi: [
    { type: "function", name: "setMessage", stateMutability: "nonpayable", inputs: [{ type: "string" }], outputs: [] }
  ],
  functionName: "setMessage",
  args: ["New message"]
});
```

## Watch events

```ts
publicClient.watchContractEvent({
  address: "0xYOUR_ADDRESS",
  abi: [
    { type: "event", name: "MessageUpdated", inputs: [{ type: "string", name: "message" }] }
  ],
  eventName: "MessageUpdated",
  onLogs: (logs) => console.log(logs)
});
```

## Tips

- Define the chain once and import it everywhere.
- Use `createPublicClient` for reads and `createWalletClient` for writes.
- Let viem estimate gas; avoid hardcoded values.

## Related pages

- [Use ethers.js](use-ethers.md)
- [Send Transactions](send-transactions.md)
- [Read Chain Data](read-chain-data.md)
