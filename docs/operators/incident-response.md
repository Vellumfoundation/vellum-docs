# Incident Response

This page describes Vellum's incident response process. The goal is to detect issues quickly, mitigate them, and learn from them.

## Phases

```text
Detect -> Triage -> Mitigate -> Resolve -> Postmortem
```

## Detect

Sources of detection:

- Internal monitoring alerts.
- External uptime checks.
- User reports.

The earliest reliable detection wins. If users are detecting incidents before monitoring, monitoring needs improvement.

## Triage

When an alert fires:

1. Acknowledge to stop paging.
2. Identify the affected component.
3. Estimate user impact.
4. Decide severity.
5. Open an incident channel.
6. Update the [status page](../network/network-status.md).

## Mitigate

Mitigation aims to restore user-facing functionality quickly. Common mitigations:

| Symptom | Mitigation |
|---|---|
| RPC node failure | Drain from load balancer; failover to healthy nodes |
| Sequencer outage | Restart sequencer; activate standby if available |
| Batch submitter offline | Restart submitter; check funding |
| Output proposer offline | Restart proposer; check funding |
| Bridge frontend down | Re-deploy or roll back |
| Indexer stuck | Restart and check from last processed block |
| Spike in RPC errors | Scale RPC fleet; rate-limit abusive clients |

## Resolve

A resolution is when:

- Component is back to healthy thresholds.
- User-facing impact has ended.
- Recurrence is unlikely in the very short term.

Update the status page when an incident is resolved.

## Postmortem

For non-trivial incidents, write a postmortem with:

- Timeline.
- Root cause.
- Contributing factors.
- What went well.
- What did not go well.
- Action items with owners and target dates.

Postmortems are blameless. Their purpose is to prevent recurrence, not to assign fault.

## Communication

- Update the [Network Status](../network/network-status.md) page during the incident.
- Avoid speculation; report what is known.
- Provide ETAs as ranges and update them.
- After resolution, post the postmortem when ready.

## Drills

- Run incident drills regularly.
- Cover RPC failover, sequencer restart, batch submitter failover, bridge incident, and explorer outage.
- Update runbooks based on what you learn.

## Related pages

- [Monitoring](monitoring.md)
- [Alerting](alerting.md)
- [No-Downtime Operations](no-downtime-operations.md)
- [Network Status](../network/network-status.md)
