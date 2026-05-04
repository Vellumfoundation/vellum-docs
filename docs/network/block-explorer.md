# Block Explorer

The Vellum block explorer indexes blocks, transactions, addresses, contracts, events, and verification metadata.

| Field | Value |
|---|---|
| Explorer URL | TBD |
| Contract verification | TBD |
| API URL | TBD |
| Indexed network | Vellum |

## Common tasks

1. Search for a transaction hash.
2. Confirm transaction status.
3. View block number and timestamp.
4. Inspect logs and events.
5. Check contract source verification.
6. Review token transfers when supported.

{% hint style="info" %}
Explorer data can lag the chain during indexing delays. Use RPC for immediate transaction receipts and the explorer for human-readable inspection.
{% endhint %}

## Contract verification

Developers should verify source code after deployment so users can inspect contracts and integrations can read ABIs.

## Related pages

- [Verify a Contract](../developers/verify-a-contract.md)
- [Explorer Monitoring](../operators/run-indexing-services.md)
- [Explorer Indexer Lag](../operators/monitoring.md)
