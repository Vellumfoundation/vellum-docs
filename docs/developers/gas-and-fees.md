# Gas and Fees

Gas on Vellum is paid in ETH. Fees cover Vellum execution and Vellum's contribution to settlement on Base.

## Currency

| Item | Currency |
|---|---|
| Gas | ETH |
| Transaction fees | ETH |
| Contract deployment | ETH |

ETH is required on Vellum before any transaction can be sent. See [ETH Native Gas](../architecture/eth-native-gas.md).

## Fee components

A Vellum transaction fee covers:

- Vellum execution gas (the EVM work).
- A settlement contribution that helps cover the cost of posting Vellum data and output roots to Base.

These are bundled into the gas the user pays. The user does not need to manage them separately.

## Fee market

Vellum follows an EIP-1559 style fee market with:

- Base fee that adjusts with demand.
- Priority fee paid to the sequencer to prioritize inclusion.

Tools and wallets handle this automatically. You can query:

| Method | Use |
|---|---|
| `eth_gasPrice` | Suggested gas price |
| `eth_feeHistory` | Recent fee history |
| `eth_maxPriorityFeePerGas` | Suggested priority fee |

## Estimation

Estimate gas before submitting heavy transactions:

ethers.js:

```ts
const estimate = await wallet.estimateGas({
  to: "0xCONTRACT",
  data: "0x..."
});
```

viem:

```ts
const estimate = await publicClient.estimateGas({
  account,
  to: "0xCONTRACT",
  data: "0x..."
});
```

cast:

```bash
cast estimate \
  --rpc-url $VELLUM_RPC_URL \
  0xCONTRACT \
  "setMessage(string)" "Hello, Vellum"
```

## Funding ETH for gas

- Bridge ETH from Base. See [Deposit ETH from Base](../bridge/deposit-eth-from-base.md).
- Receive ETH from another Vellum user.
- Testnet only: use a [faucet](../network/faucets.md).

## Best practices

| Practice | Why |
|---|---|
| Do not hardcode gas prices | Network conditions change |
| Use estimation per transaction | Reflects actual call cost |
| Surface gas errors clearly in UIs | Users need to know why a transaction failed |
| Keep a safety margin | Avoid stuck transactions due to undersized gas |

{% hint style="info" %}
Demand on Vellum and on Base can change quickly. Hardcoding gas leads to dropped or expensive transactions.
{% endhint %}

## Why users need ETH on Vellum

Even applications that primarily use ERC-20 tokens require their users to have ETH on Vellum to pay gas. UIs should detect missing ETH and prompt users to bridge.

## Related pages

- [ETH Native Gas](../architecture/eth-native-gas.md)
- [Send Transactions](send-transactions.md)
- [Deposit ETH from Base](../bridge/deposit-eth-from-base.md)
