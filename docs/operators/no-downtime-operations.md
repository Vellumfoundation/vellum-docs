# No-Downtime Operations

No-downtime operations means Vellum services are designed to stay available during routine maintenance, deploys, and node failures.

## Target SLOs

| Component | Target |
|---|---|
| Public RPC uptime | 99.9% or better |
| Explorer uptime | 99.9% or better |
| Bridge frontend uptime | 99.9% or better |
| Sequencer availability | 99.9% or better |
| Batch submission monitoring | 24/7 |
| Incident response | Under 15 minutes for critical issues |

{% hint style="warning" %}
These are targets for operations planning. They are not a guarantee or SLA unless a separate public SLA is published.
{% endhint %}

## Practices

- Multiple RPC nodes.
- Load balancing.
- Health checks.
- Blue-green deploys.
- Sequencer monitoring.
- Batch submission monitoring.
- Bridge monitoring.
- Explorer monitoring.
- Incident alerts.
- Snapshot and backup plan.
- Rollback plan.
- Maintenance windows.
- Public status page.
- SLOs and SLAs.

## Blue-green flow

```text
Current pool
   ↓ add new version
Green pool warms up
   ↓ health checks pass
Load balancer shifts traffic
   ↓ monitor
Old pool drains and remains ready for rollback
```

## Related pages

- [Monitoring](monitoring.md)
- [Alerting](alerting.md)
- [Upgrade Process](upgrade-process.md)
