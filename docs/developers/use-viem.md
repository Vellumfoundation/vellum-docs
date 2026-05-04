# Use viem

viem can define Vellum as a custom chain and use it with public and wallet clients.

## Example

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

## Read block number

```ts
const publicClient = createPublicClient({
  chain: vellum,
  transport: http(process.env.VELLUM_RPC_URL)
});

console.log(await publicClient.getBlockNumber());
```

## Related pages

- [Use ethers.js](use-ethers.md)
- [Send Transactions](send-transactions.md)
- [Interact with RPC](interact-with-rpc.md)
