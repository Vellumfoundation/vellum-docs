# Network Status

The Vellum status page reports the live health of public infrastructure: RPC, explorer, bridge, and core chain components.

## Status page

| Field | Value |
|---|---|
| Status page URL | TBD |

The status page exposes:

- Component-level uptime.
- Active and recent incidents.
- Maintenance windows.
- Historical incident logs.

## Components reported

| Component | What it measures |
|---|---|
| Public RPC | Endpoint availability and latency |
| WebSocket RPC | Endpoint availability |
| Block explorer | Indexing health and frontend availability |
| Bridge frontend | Availability of the bridge UI |
| Sequencer | Block production health |
| Batch submission | Posting batches to Base |
| Output proposer | Posting output roots to Base |
| Indexers | Backfill and live indexing health |

## Operational targets

| Component | Target |
|---|---|
| Public RPC uptime | 99.9% or better |
| Explorer uptime | 99.9% or better |
| Bridge frontend uptime | 99.9% or better |
| Sequencer availability | 99.9% or better |
| Batch submission monitoring | 24/7 |
| Incident response | Under 15 minutes for critical issues |

These are operational targets, not guarantees. See [No-Downtime Operations](../operators/no-downtime-operations.md).

## Reading an incident

Each incident on the status page should include:

- Summary of the issue.
- Affected components.
- Timeline of detection, mitigation, and resolution.
- Root cause once known.
- Follow-up actions.

## When to check the status page

- Before bridging or signing a high-value transaction.
- When transactions stall or RPC requests fail unexpectedly.
- Before making operational changes against Vellum infrastructure.

## Reporting issues

If you observe a problem that is not on the status page:

- Check the [FAQ](../reference/faq.md) for known wallet and bridge errors.
- Reach out to support via the channels listed in [Links](../reference/links.md).
- Include transaction hashes, block numbers, error messages, and timestamps.
