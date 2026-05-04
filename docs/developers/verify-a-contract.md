# Verify a Contract

Verifying a contract publishes its source code, ABI, and metadata to the Vellum block explorer. This makes it inspectable and usable by users directly from the explorer.

## What gets verified

| Item | Purpose |
|---|---|
| Source code | Human-readable contract code |
| ABI | Interface for tools and explorer read/write tabs |
| Compiler settings | So the explorer can recompile and confirm bytecode |
| Constructor args | Used in recompilation match |

## Required environment

```bash
export VELLUM_EXPLORER_API_URL=TBD
export VELLUM_EXPLORER_API_KEY=TBD
```

## Verify with Hardhat

Add the verification plugin (Hardhat Toolbox includes it) and configure the explorer endpoint in [hardhat.config.ts](#) with the Vellum entry. Then run:

```bash
npx hardhat verify \
  --network vellum \
  0xYOUR_CONTRACT_ADDRESS \
  "Hello, Vellum"
```

Replace `"Hello, Vellum"` with your constructor arguments in order.

## Verify with Foundry

Configure the etherscan section in `foundry.toml`:

```toml
[etherscan]
vellum = { key = "${VELLUM_EXPLORER_API_KEY}", url = "${VELLUM_EXPLORER_API_URL}" }
```

Run verification:

```bash
forge verify-contract \
  --chain-id $VELLUM_CHAIN_ID \
  --etherscan-api-key $VELLUM_EXPLORER_API_KEY \
  --verifier-url $VELLUM_EXPLORER_API_URL \
  0xYOUR_CONTRACT_ADDRESS \
  src/VellumHello.sol:VellumHello
```

For contracts with constructor arguments, pass `--constructor-args` with ABI-encoded arguments.

## Confirming verification

After successful verification:

1. Open the contract address on the [block explorer](../network/block-explorer.md).
2. The contract page should show a verified source tab.
3. The read and write tabs should display the contract's ABI.

## Common verification errors

| Error | Cause | Fix |
|---|---|---|
| Bytecode mismatch | Compiler version or optimizer settings differ | Match exactly to deployment |
| Missing constructor args | Wrong number or encoding | Provide all args in the correct order |
| Imports not resolved | Foundry remappings missing | Add or verify remappings |
| Verifier rate limit | Too many requests in a short time | Wait and retry |

## Verifying proxy contracts

For proxy patterns, verify both the proxy and the implementation. Then mark the proxy as a proxy in the explorer UI so the read and write tabs use the implementation ABI.

## Why verify

- Users can inspect what the contract does.
- Auditors and security tools can analyze the source.
- Wallets and dapps can decode interactions.
- Block explorer interactions become possible without custom UIs.

## Related pages

- [Deploy a Contract](deploy-a-contract.md)
- [Use Hardhat](use-hardhat.md)
- [Use Foundry](use-foundry.md)
- [Block Explorer](../network/block-explorer.md)
