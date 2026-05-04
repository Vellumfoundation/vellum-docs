# High Availability Design

Vellum infrastructure should be designed so public services can survive routine node failures, deploys, and traffic spikes.

## Reference design

```text
Users and dapps
   ↓
DNS and load balancer
   ↓
RPC gateway pool
   ↓
Execution nodes
   ↓
Sequencer, batcher, proposer, indexers, monitoring
```

## Availability controls

| Control | Purpose |
|---|---|
| Multiple RPC nodes | Avoid a single RPC failure taking down public access |
| Load balancing | Route traffic away from unhealthy nodes |
| Health checks | Detect failures quickly |
| Blue-green deploys | Release without dropping all traffic |
| Backups and snapshots | Restore data after failure |
| Monitoring and alerts | Find issues before users report them |
| Status page | Communicate clearly during incidents |

{% hint style="warning" %}
No-downtime design reduces outage risk. It does not make downtime impossible.
{% endhint %}

## Related pages

- [No-Downtime Operations](../operators/no-downtime-operations.md)
- [Monitoring](../operators/monitoring.md)
- [RPC Risk](../security/rpc-risk.md)
