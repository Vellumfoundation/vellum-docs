# Use ethers.js

ethers.js can read from Vellum, send transactions, and interact with contracts through the public RPC.

## Send ETH

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

## Read chain ID

```ts
const network = await provider.getNetwork();
console.log(network.chainId);
```

{% hint style="warning" %}
Do not send transactions until the provider reports the expected Vellum chain ID.
{% endhint %}

## Related pages

- [Send Transactions](send-transactions.md)
- [Read Chain Data](read-chain-data.md)
- [Gas and Fees](gas-and-fees.md)
