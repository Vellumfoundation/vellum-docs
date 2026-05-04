# Verify a Contract

Contract verification lets users inspect source code and lets tools load ABI information from the explorer.

## Required inputs

| Input | Example |
|---|---|
| Contract address | `0x...` |
| Compiler version | `0.8.24` |
| Optimizer settings | Enabled or disabled |
| Source files | Solidity files used at deploy time |
| Constructor args | ABI-encoded or form input |
| License | SPDX identifier |

## Foundry example

```bash
forge verify-contract $CONTRACT_ADDRESS src/VellumHello.sol:VellumHello \
  --chain-id $VELLUM_CHAIN_ID \
  --verifier-url $VELLUM_EXPLORER_API_URL \
  --etherscan-api-key $VELLUM_EXPLORER_API_KEY
```

## Hardhat example

```bash
npx hardhat verify --network vellum $CONTRACT_ADDRESS "hello vellum"
```

{% hint style="warning" %}
Verification failures are usually caused by compiler mismatch, optimizer mismatch, wrong constructor arguments, or flattened source differences.
{% endhint %}

## Related pages

- [Deploy a Contract](deploy-a-contract.md)
- [Block Explorer](../network/block-explorer.md)
- [Contract Addresses](contract-addresses.md)
