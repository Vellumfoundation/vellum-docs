# Run an RPC Node

RPC nodes serve wallet, dapp, indexer, and monitoring traffic.

## Production requirements

- Dedicated host or container resources.
- Disk sized for chain growth.
- Health checks.
- Metrics export.
- Log collection.
- Rate limiting at the gateway.
- Admin methods disabled on public endpoints.
- Load balancer integration.

## Example environment

```bash
export VELLUM_RPC_PORT=8545
export VELLUM_WS_PORT=8546
export VELLUM_CHAIN_ID=TBD
export VELLUM_L3_DATA_DIR=/var/lib/vellum
```

{% hint style="warning" %}
Do not expose private RPC endpoints, debug endpoints, or admin methods to the public internet.
{% endhint %}

## Related pages

- [RPC Endpoints](../network/rpc-endpoints.md)
- [RPC Risk](../security/rpc-risk.md)
- [No-Downtime Operations](no-downtime-operations.md)
