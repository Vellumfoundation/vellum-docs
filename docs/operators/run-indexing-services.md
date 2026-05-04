# Run Indexing Services

Indexing services power explorers, bridge status, analytics, and application-specific queries.

## Services to index

| Service | Data |
|---|---|
| Explorer | Blocks, transactions, logs, contracts |
| Bridge indexer | Deposits, withdrawals, message status |
| App indexers | Product-specific events |
| Monitoring indexers | Lags, counts, and health signals |

## Operational guidance

- Track latest indexed block.
- Alert on indexer lag.
- Keep database backups.
- Use replayable event ingestion.
- Separate read replicas for heavy query APIs.
- Reindex after schema changes.

{% hint style="info" %}
Indexer lag should be visible on dashboards and status pages when it affects users.
{% endhint %}

## Related pages

- [Block Explorer](../network/block-explorer.md)
- [Monitoring](monitoring.md)
- [Backups](backups.md)
