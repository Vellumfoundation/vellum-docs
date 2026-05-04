# Use Foundry

Foundry is a Rust-based EVM development toolchain. Vellum supports the full Foundry workflow.

## Install

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

Confirm:

```bash
forge --version
cast --version
anvil --version
```

## Configure

Set environment variables:

```bash
export VELLUM_RPC_URL=TBD
export VELLUM_CHAIN_ID=TBD
export VELLUM_EXPLORER_API_URL=TBD
export VELLUM_EXPLORER_API_KEY=TBD
export PRIVATE_KEY=0x...
```

`foundry.toml`:

```toml
[rpc_endpoints]
vellum = "${VELLUM_RPC_URL}"

[etherscan]
vellum = { key = "${VELLUM_EXPLORER_API_KEY}", url = "${VELLUM_EXPLORER_API_URL}" }
```

## Compile

```bash
forge build
```

## Deploy

A minimal `script/Deploy.s.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import {VellumHello} from "../src/VellumHello.sol";

contract DeployScript is Script {
    function run() external {
        vm.startBroadcast();
        new VellumHello("Hello, Vellum");
        vm.stopBroadcast();
    }
}
```

Run:

```bash
forge script script/Deploy.s.sol:DeployScript \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast
```

## Verify

```bash
forge verify-contract \
  --chain-id $VELLUM_CHAIN_ID \
  --etherscan-api-key $VELLUM_EXPLORER_API_KEY \
  --verifier-url $VELLUM_EXPLORER_API_URL \
  0xYOUR_CONTRACT_ADDRESS \
  src/VellumHello.sol:VellumHello
```

For constructor arguments use `--constructor-args` with ABI-encoded values.

## Send a transaction with `cast`

```bash
cast send \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY \
  0xYOUR_CONTRACT_ADDRESS \
  "setMessage(string)" "Hello again, Vellum"
```

## Read state with `cast`

```bash
cast call \
  --rpc-url $VELLUM_RPC_URL \
  0xYOUR_CONTRACT_ADDRESS \
  "message()(string)"
```

## Tips

- Use `forge fmt` to keep formatting consistent.
- Use `forge test` with fork tests against Vellum before deploying.
- Keep `foundry.toml` solc version in sync with your contracts.

## Related pages

- [Deploy a Contract](deploy-a-contract.md)
- [Verify a Contract](verify-a-contract.md)
- [Interact with RPC](interact-with-rpc.md)
