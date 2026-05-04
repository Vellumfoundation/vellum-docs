# Backups

Backups reduce recovery time after data loss, indexer corruption, or operator error.

## Backup targets

| Target | Strategy |
|---|---|
| Node data | Snapshots and rebuild procedure |
| Explorer database | Scheduled logical and physical backups |
| Indexer database | Scheduled backups with retention |
| Configuration | Version-controlled and secret-managed |
| Deployment artifacts | Immutable archive |
| Monitoring config | Version-controlled dashboards and alerts |

## Recovery checks

- Restore backups in a non-production environment.
- Document restore time.
- Verify database consistency.
- Keep retention aligned with incident investigation needs.
- Protect backups with access controls.

{% hint style="warning" %}
A backup strategy is incomplete until restores are tested.
{% endhint %}

## Related pages

- [Incident Response](incident-response.md)
- [Run Indexing Services](run-indexing-services.md)
- [Upgrade Process](upgrade-process.md)
