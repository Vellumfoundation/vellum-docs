# Governance Overview

This page summarizes how decisions about Vellum's contracts, parameters, and operational policy are made and executed.

## Goals

- Predictable upgrade behavior.
- Clear authority for each kind of change.
- Documented emergency procedures.
- Honest communication with users.

## Scope

| Area | Governance scope |
|---|---|
| Bridge contracts | Yes |
| Predeploys | Yes |
| Output proposer settings | Yes |
| Sequencer policy | Yes |
| Public RPC operation | Operational, not contract governance |
| Bridge token list | Yes |
| Branding and documentation | Operational |

## Roles

Vellum uses a small set of named roles. See [Roles and Permissions](roles-and-permissions.md).

## Decision process

```text
Proposal -> Discussion -> Approval -> Execution -> Communication
```

- Proposal: a clear statement of the change, the motivation, and the impact.
- Discussion: review by relevant roles and stakeholders.
- Approval: per the role's procedure (e.g., multisig signing, time lock).
- Execution: contract or parameter change.
- Communication: status page update, [Changelog](../reference/changelog.md) entry.

## Multisig

Critical changes require multisig approval. See [Multisig Policy](multisig-policy.md).

## Emergency actions

In rare cases, an emergency action may be taken. The procedure is documented in [Emergency Actions](emergency-actions.md). Emergency procedures preserve as much of the standard process as possible.

## Progressive decentralization

Vellum's governance is centralized at launch in line with operational reality. Vellum's roadmap includes progressive decentralization where it is meaningful.

{% hint style="warning" %}
Vellum does not claim full decentralization at launch. Progressive decentralization is a goal, not a current property.
{% endhint %}

## Transparency

- Roles and signers are documented.
- Multisig addresses are published.
- Changes are logged in the [Changelog](../reference/changelog.md).
- Postmortems are written for emergency actions.

## Related pages

- [Roles and Permissions](roles-and-permissions.md)
- [Upgrade Governance](upgrade-governance.md)
- [Emergency Actions](emergency-actions.md)
- [Multisig Policy](multisig-policy.md)
- [Future Work](../roadmap/future-work.md)
