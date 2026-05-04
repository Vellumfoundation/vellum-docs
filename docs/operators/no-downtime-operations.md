# No-Downtime Operations

Vellum's operational design treats public-facing availability as a deliverable. This page lays out the practices and targets that support that goal.

## Practices

### Multiple RPC nodes

- Run multiple RPC instances behind a load balancer.
- Spread instances across availability zones.
- Use health checks to route around failing nodes.

### Load balancing

- Apply per-IP rate limits.
- Drop or throttle abusive clients.
- Terminate TLS at the balancer.

### Health checks

- Liveness for process up.
- Readiness for caught up to chain head.
- Aggregated probes for end-to-end behavior.

### Blue-green deploys

- Bring up new version alongside old.
- Shift traffic gradually.
- Roll back fast if issues appear.

### Sequencer monitoring

- Watch sequencer lag and block production.
- Alert immediately on unhealthy sequencer.

### Batch submission monitoring

- Track time between latest block and last batch.
- Alert when above target.
- Keep submitter funded.

### Bridge monitoring

- Watch deposit and withdrawal counts.
- Watch finalization lag.
- Watch bridge frontend uptime.

### Explorer monitoring

- Watch indexer lag.
- Watch frontend availability.

### Incident alerts

- Page on user-facing impact.
- Warn on degraded but not user-impacting.
- See [Alerting](alerting.md).

### Snapshot and backup plan

- Daily node snapshots.
- Daily indexer snapshots.
- Off-host, ideally off-region.
- Restore tests.

### Rollback plan

- Know how to roll back each component.
- Test rollback procedures.
- Avoid one-way deploys.

### Maintenance windows

- Communicate in advance.
- Avoid high-traffic periods.
- Document expected impact.

### Public status page

- Component health.
- Active and historical incidents.
- Postmortems where applicable.

### SLOs and SLAs

- Internal SLOs drive engineering priorities.
- External SLAs, if offered, are derived from SLOs with margin.

## Target SLOs

| Component | Target |
|---|---|
| Public RPC uptime | 99.9% or better |
| Explorer uptime | 99.9% or better |
| Bridge frontend uptime | 99.9% or better |
| Sequencer availability | 99.9% or better |
| Batch submission monitoring | 24/7 |
| Incident response | Under 15 minutes for critical issues |

These are operational targets, not guarantees. Real outages can and do happen. Vellum's goal is to detect them quickly, mitigate them, and learn from them.

## What no-downtime does not mean

- Withdrawals are still subject to the bridge finalization window. That is a security feature, not downtime.
- Maintenance windows may briefly affect non-critical surfaces.
- Upstream dependencies (Base, Ethereum) can still impact Vellum.

## Related pages

- [Monitoring](monitoring.md)
- [Alerting](alerting.md)
- [Incident Response](incident-response.md)
- [High Availability Design](../architecture/high-availability-design.md)
