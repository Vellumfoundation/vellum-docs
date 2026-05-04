# Audits

This page tracks the audit status of Vellum's contracts and critical systems.

{% hint style="warning" %}
Vellum does not claim audits that have not been completed. Audit status is reported here transparently, including pending and not-yet-started items.
{% endhint %}

## Status

| Component | Status |
|---|---|
| Bridge contracts (Base side) | Pending |
| Bridge contracts (Vellum side) | Pending |
| Predeploys | Pending |
| Node and rollup software | Pending |

## What "pending" means

It means an audit is planned or in progress but not complete. Until completion and report publication, no audit-based assurance should be assumed for the component.

## Audit reports

When audits are completed, this page will list:

- The auditor.
- The scope.
- The audit period.
- A link to the report.
- A summary of findings and resolutions.

## Audit scope

A typical audit of Vellum's contracts will cover:

- Bridge correctness (deposits, withdrawals, finalization).
- Cross-domain messaging.
- Token mapping.
- Privileged role handling.
- Upgrade procedures.

A typical audit of the node and rollup software will cover:

- State transition correctness.
- Deterministic execution.
- Fee accounting.
- Sequencer behavior.

## Audit limits

Audits reduce risk; they do not eliminate it. Audited components can still contain bugs. Findings may be triaged as accepted risks if the cost of fixing exceeds the benefit. Audit reports describe what was reviewed and what was not.

## Bug bounty

In addition to audits, Vellum maintains a bug bounty for the same components. See [Bug Bounty](bug-bounty.md).

## Related pages

- [Security Model](security-model.md)
- [Threat Model](threat-model.md)
- [Bug Bounty](bug-bounty.md)
- [Bridge Risk](bridge-risk.md)
- [Upgrade Risk](upgrade-risk.md)
