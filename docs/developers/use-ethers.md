# Use ethers.js

ethers.js is a JavaScript and TypeScript library for interacting with Ethereum-compatible chains. Vellum is fully compatible.

## Install

```bash
npm install ethers
```

## Connect

```ts
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.VELLUM_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
```

## Send a transaction

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

## Read contract state

```ts
const abi = ["function message() view returns (string)"];
const contract = new ethers.Contract("0xYOUR_ADDRESS", abi, provider);
console.log(await contract.message());
```

## Write contract state

```ts
const abi = ["function setMessage(string)"];
const contract = new ethers.Contract("0xYOUR_ADDRESS", abi, wallet);
const tx = await contract.setMessage("New message");
await tx.wait();
```

## Listen for events

```ts
const abi = ["event MessageUpdated(string message)"];
const contract = new ethers.Contract("0xYOUR_ADDRESS", abi, provider);

contract.on("MessageUpdated", (msg) => {
  console.log("Updated:", msg);
});
```

## Estimate gas

```ts
const estimate = await wallet.estimateGas({
  to: "0xYOUR_ADDRESS",
  data: "0x"
});
console.log(estimate.toString());
```

## Watch chain head

```ts
provider.on("block", (n) => console.log("New block:", n));
```

## Tips

- Use `JsonRpcProvider` for HTTPS endpoints and `WebSocketProvider` for the WebSocket endpoint when published.
- Avoid hardcoding gas prices. Let ethers and the wallet estimate.
- Always `await tx.wait()` if you need confirmation before continuing.

## Related pages

- [Send Transactions](send-transactions.md)
- [Read Chain Data](read-chain-data.md)
- [Interact with RPC](interact-with-rpc.md)
- [Use viem](use-viem.md)
