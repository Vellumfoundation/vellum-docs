# Emergency Actions

Emergency actions exist for cases where the standard upgrade process cannot respond in time, such as an active exploit.

## When emergency actions apply

| Trigger | Example |
|---|---|
| Active exploit | A bug is being used to drain bridge funds |
| Imminent loss | A bug is detected that will be exploited if not paused |
| Critical operational failure | A core service is misbehaving in a way that threatens user funds |

Emergency actions do not apply to:

- Routine bugs.
- Performance issues.
- UI changes.
- Anything that can wait for normal governance.

## Authority

Emergency actions are authorized per [Roles and Permissions](roles-and-permissions.md), typically through:

- A guardian role with narrow, pre-authorized authority to pause specific functions.
- A multisig with reduced quorum or accelerated approval for emergency-only actions.

The exact emergency authority is documented and constrained. It is not an unlimited backstop.

## Procedures

```text
Detect -> Classify -> Decide -> Act -> Communicate -> Postmortem
```

- Detect: monitoring or external report flags the issue.
- Classify: confirm severity and confirm emergency criteria are met.
- Decide: invoke emergency authority per role policy.
- Act: pause or otherwise mitigate.
- Communicate: status page update and public notice.
- Postmortem: write up what happened, why, and what changes follow.

## Pausing

Pause functions, where they exist, are scoped to specific contracts and behaviors. They:

- Do not extend to non-emergency operations.
- Are time-limited where possible.
- Are reversible.

## Guardrails

- Emergency actions follow a pre-agreed list of allowed actions.
- They do not allow arbitrary state changes or fund movements outside their scope.
- They are logged on chain and reflected in the [Changelog](../reference/changelog.md).

## Communication

- The status page is updated immediately when an emergency action is taken.
- Public notice describes what was done, why, and what comes next.
- Postmortem follows once the incident is fully resolved.

## After an emergency

- Resume normal operations as soon as it is safe.
- Reverse pauses or emergency parameters once the underlying cause is fixed.
- Track follow-up items to closure.

## Related pages

- [Roles and Permissions](roles-and-permissions.md)
- [Upgrade Governance](upgrade-governance.md)
- [Multisig Policy](multisig-policy.md)
- [Incident Response](../operators/incident-response.md)
- [Threat Model](../security/threat-model.md)
