# Backups

Backups protect against data loss in nodes, indexers, and configuration stores. This page covers what to back up, how often, and how to verify.

## What to back up

| Item | Why |
|---|---|
| Node data directories | Faster recovery than syncing from scratch |
| Indexer database | Avoids long reindex on restore |
| Monitoring data | Useful for incident retrospectives |
| Configuration repositories | Reproducible deployments |
| Secrets references | Recovery of access (not the secrets themselves; use a secret manager) |

{% hint style="warning" %}
Never store unencrypted private keys in backups. Use a secret manager.
{% endhint %}

## Cadence

| Item | Cadence |
|---|---|
| Node snapshots | Daily |
| Indexer database | Daily |
| Monitoring data | Continuous to long-term storage |
| Configuration | On every merge |

Adjust based on chain growth, traffic, and recovery time targets.

## Storage strategy

- Store snapshots off-host.
- Prefer off-region replication for catastrophic-failure resilience.
- Apply lifecycle policies so old snapshots age out.

## Verification

A backup that has not been restored is not really a backup. Periodically:

1. Pick a random recent snapshot.
2. Restore it to a test environment.
3. Validate the restored service comes up healthy.
4. Record the result.

## Recovery time targets

| Component | RTO | RPO |
|---|---|---|
| RPC node | Under 30 minutes | Acceptable to resync from snapshot |
| Indexer | Under 1 hour | Last successful snapshot |
| Configuration | Under 15 minutes | Last commit in source control |

Adjust RTO and RPO based on user impact tolerance.

## Catastrophic loss

If primary infrastructure is lost:

1. Provision new hosts from infrastructure-as-code.
2. Restore node data from latest verified snapshot.
3. Restore indexer database from latest verified snapshot.
4. Reconnect to chain head and let services catch up.
5. Re-add to load balancer once health checks pass.

## Related pages

- [Run an RPC Node](run-an-rpc-node.md)
- [Run Indexing Services](run-indexing-services.md)
- [Incident Response](incident-response.md)
- [No-Downtime Operations](no-downtime-operations.md)
