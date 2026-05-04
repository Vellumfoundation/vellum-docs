# Interact with RPC

Vellum supports standard Ethereum JSON-RPC methods.

## Common methods

| Method | Use |
|---|---|
| `eth_chainId` | Confirm connected chain |
| `eth_blockNumber` | Read latest block number |
| `eth_getBalance` | Read ETH balance |
| `eth_getTransactionByHash` | Fetch transaction details |
| `eth_getTransactionReceipt` | Confirm transaction status |
| `eth_call` | Read contract state |
| `eth_estimateGas` | Estimate transaction gas |
| `eth_sendRawTransaction` | Submit signed transactions |
| `eth_getLogs` | Query event logs |

## cURL example

```bash
curl -X POST $VELLUM_RPC_URL \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
```

## Log query guidance

Large `eth_getLogs` ranges can be expensive. Indexers and apps should use bounded ranges, retries, and checkpoints.

{% hint style="info" %}
Production apps should monitor RPC latency, error rate, and stale block height.
{% endhint %}

## Related pages

- [RPC Endpoints](../network/rpc-endpoints.md)
- [Read Chain Data](read-chain-data.md)
- [RPC Risk](../security/rpc-risk.md)
