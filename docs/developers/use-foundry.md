# Use Foundry

Foundry works with Vellum through standard RPC configuration.

## foundry.toml

```toml
[rpc_endpoints]
vellum = "${VELLUM_RPC_URL}"

[etherscan]
vellum = { key = "${VELLUM_EXPLORER_API_KEY}", url = "${VELLUM_EXPLORER_API_URL}" }
```

## Deploy

```bash
forge script script/Deploy.s.sol:DeployScript \
  --rpc-url $VELLUM_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast
```

## Useful commands

```bash
cast chain-id --rpc-url $VELLUM_RPC_URL
cast block-number --rpc-url $VELLUM_RPC_URL
cast balance $ADDRESS --rpc-url $VELLUM_RPC_URL
forge test
```

{% hint style="info" %}
Use Foundry scripts for repeatable deployments and keep deployment artifacts for verification.
{% endhint %}

## Related pages

- [Deploy a Contract](deploy-a-contract.md)
- [Read Chain Data](read-chain-data.md)
- [Interact with RPC](interact-with-rpc.md)
