# RPC Endpoints

Vellum exposes JSON-RPC over HTTPS and, where available, JSON-RPC over WebSocket. Endpoint URLs are placeholders until Vellum's public launch.

## Public endpoints

| Endpoint type | URL |
|---|---|
| HTTPS JSON-RPC | TBD |
| WebSocket JSON-RPC | TBD |

{% hint style="warning" %}
Use only the official endpoints listed here. Third-party RPC URLs may log, censor, modify, or replay traffic.
{% endhint %}

## Quick check

Once endpoints are published, you can verify connectivity with a simple JSON-RPC call:

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
```

A healthy response returns the chain ID as a hex string.

## Rate limits and reliability

Public RPC endpoints are shared infrastructure. They are operated for high availability but apply rate limits to protect against abuse. Production applications should:

- Cache reads where possible.
- Backoff on rate limit responses.
- Consider running their own [RPC node](../operators/run-an-rpc-node.md) for heavy workloads.

## Supported methods

Standard Ethereum JSON-RPC methods are supported. See [Interact with RPC](../developers/interact-with-rpc.md) for examples and the canonical method list.

## WebSockets

Where the WebSocket endpoint is published, it supports `eth_subscribe` for new heads and logs. Use it for real-time event indexing, mempool watching, and dapp UIs that need push updates.

## Health and status

Endpoint health is reported on the [Network Status](network-status.md) page. Operational targets are documented in [No-Downtime Operations](../operators/no-downtime-operations.md).

## Need a private endpoint?

For applications with strict latency or rate budgets, Vellum supports running self-hosted RPC nodes. See [Run an RPC Node](../operators/run-an-rpc-node.md).
