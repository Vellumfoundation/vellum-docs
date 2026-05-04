# Execution Layer

Vellum provides EVM-compatible execution for wallets, Solidity contracts, and standard Ethereum tooling.

## Compatibility target

| Area | Expected behavior |
|---|---|
| Accounts | Standard EOA and contract accounts |
| Transactions | EVM transaction execution |
| Contracts | Solidity and EVM bytecode support |
| Logs | Standard event logs |
| JSON-RPC | Ethereum-compatible methods |
| Tooling | Hardhat, Foundry, Remix, ethers.js, viem |

{% hint style="info" %}
EVM compatibility does not guarantee every Ethereum mainnet assumption applies. Apps should test against Vellum RPC and explorer before launch.
{% endhint %}

## Developer checks

- Deploy a simple contract.
- Read contract state.
- Send an ETH transaction.
- Estimate gas.
- Query logs.
- Verify contract source in the explorer.

## Related pages

- [Deploy a Contract](../developers/deploy-a-contract.md)
- [Predeploys](../developers/predeploys.md)
- [Interact with RPC](../developers/interact-with-rpc.md)
