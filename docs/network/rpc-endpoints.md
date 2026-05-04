# RPC Endpoints

Vellum exposes JSON-RPC for wallets, dapps, indexers, scripts, and monitoring services.

| Endpoint | Value | Notes |
|---|---|---|
| Public HTTP RPC | TBD | Use for wallets, reads, and transactions |
| Public WebSocket RPC | TBD | Use for subscriptions when available |
| Private operator RPC | Not public | Restricted to internal operators |
| Health endpoint | TBD | Used by load balancers and uptime checks |

{% hint style="warning" %}
Only use RPC URLs from official Vellum documentation or status pages. Fake RPC URLs can spoof balances, transaction status, and chain data.
{% endhint %}

## Basic checks

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
```

## Recommended client behavior

- Set request timeouts.
- Retry idempotent read calls.
- Do not retry signed transactions blindly.
- Use `eth_estimateGas` before sending transactions.
- Keep a secondary RPC provider for operational tooling.
- Monitor HTTP status codes and JSON-RPC errors separately.

## Related pages

- [Interact with RPC](../developers/interact-with-rpc.md)
- [RPC Risk](../security/rpc-risk.md)
- [Run an RPC Node](../operators/run-an-rpc-node.md)
