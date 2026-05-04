# Send Transactions

This page shows how to send transactions on Vellum using common libraries and tools.

## Prerequisites

- A wallet with ETH on Vellum for gas.
- Vellum RPC URL.
- A signing key.

## ethers.js

```ts
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.VELLUM_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

const tx = await wallet.sendTransaction({
  to: "0xRECIPIENT",
  value: ethers.parseEther("0.001")
});

console.log("Hash:", tx.hash);
const receipt = await tx.wait();
console.log("Status:", receipt?.status);
```

## viem

```ts
import { createWalletClient, http, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

const walletClient = createWalletClient({
  account,
  chain: vellum,
  transport: http(process.env.VELLUM_RPC_URL)
});

const hash = await walletClient.sendTransaction({
  to: "0xRECIPIENT",
  value: parseEther("0.001")
});
```

## cast (Foundry)

```bash
cast send \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY \
  --value 0.001ether \
  0xRECIPIENT
```

For contract calls:

```bash
cast send \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY \
  0xCONTRACT \
  "setMessage(string)" "Hello, Vellum"
```

## Manual via JSON-RPC

1. Build a transaction object.
2. Sign it offline with a library like ethers, web3, or viem.
3. Submit with `eth_sendRawTransaction`.

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xSIGNED_TX"],"id":1}'
```

## Gas

- Use library defaults for gas estimation.
- Avoid hardcoding gas prices.
- For high-priority transactions, raise `maxPriorityFeePerGas` modestly.
- See [Gas and Fees](gas-and-fees.md).

## Confirmations

- For UI feedback, wait for the receipt.
- For higher-value flows, consider waiting for batch inclusion on Base.
- For bridge withdrawal claims on Base, follow the [Withdrawal Finalization](../bridge/withdrawal-finalization.md) flow.

## Common errors

| Error | Cause | Fix |
|---|---|---|
| `insufficient funds for gas` | No ETH on Vellum | Bridge ETH from Base |
| `nonce too low` / `too high` | Stale nonce | Refresh wallet or wait |
| `replacement transaction underpriced` | Speeding up an unconfirmed tx | Increase gas modestly |
| `intrinsic gas too low` | Gas limit too small | Use estimation |

## Related pages

- [Use ethers.js](use-ethers.md)
- [Use viem](use-viem.md)
- [Use Foundry](use-foundry.md)
- [Gas and Fees](gas-and-fees.md)
