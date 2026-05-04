# Quickstart

This quickstart gets a developer from zero to deploying and reading a contract on Vellum.

## Prerequisites

- Node.js 20 or newer.
- npm, pnpm, or yarn.
- A wallet private key for testnet development.
- ETH on Vellum for gas.
- Vellum RPC URL and chain ID.
- Hardhat or Foundry.

## Add network

Add Vellum to your wallet using the official values from [Network Information](../network/network-information.md).

```bash
export VELLUM_CHAIN_ID=TBD
export VELLUM_RPC_URL=TBD
export PRIVATE_KEY=0x...
```

## Install dependencies

```bash
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npm install ethers viem
```

## Deploy with Hardhat

```bash
npx hardhat run scripts/deploy.ts --network vellum
```

## Deploy with Foundry

```bash
forge script script/Deploy.s.sol:DeployScript \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast
```

## Send a transaction

```bash
cast send 0x0000000000000000000000000000000000000000 \
  --value 0.001ether \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY
```

## Verify deployment

Check the transaction hash in the Vellum explorer. If verification APIs are available, use the explorer verification flow or Foundry and Hardhat verification plugins.

## Read contract state

Use `eth_call`, ethers.js, viem, Foundry `cast call`, or the explorer read contract tab.

## Troubleshooting

| Error | Fix |
|---|---|
| Wrong chain ID | Confirm `eth_chainId` and wallet network |
| Insufficient funds | Add ETH on Vellum |
| RPC timeout | Check status page and retry |
| Underpriced transaction | Estimate fees dynamically |
| Verification failed | Confirm compiler version and constructor args |

## Related pages

- [Deploy a Contract](deploy-a-contract.md)
- [Use Hardhat](use-hardhat.md)
- [Use Foundry](use-foundry.md)
