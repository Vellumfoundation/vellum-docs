# Read Chain Data

Reading data from Vellum works through standard JSON-RPC and indexing services.

## Common reads

```bash
cast chain-id --rpc-url $VELLUM_RPC_URL
cast block-number --rpc-url $VELLUM_RPC_URL
cast balance $ADDRESS --rpc-url $VELLUM_RPC_URL
cast call $CONTRACT "message()(string)" --rpc-url $VELLUM_RPC_URL
```

## Data sources

| Source | Best for |
|---|---|
| RPC | Latest chain state |
| Explorer | Human-readable transactions and contracts |
| Indexer | Application-specific event history |
| Subgraph or custom index | Query-heavy product features |

{% hint style="warning" %}
Explorer data can lag. For critical execution paths, check RPC receipts and contract state directly.
{% endhint %}

## Related pages

- [Interact with RPC](interact-with-rpc.md)
- [Block Explorer](../network/block-explorer.md)
- [Run Indexing Services](../operators/run-indexing-services.md)
