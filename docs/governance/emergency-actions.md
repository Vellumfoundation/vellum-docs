# Emergency Actions

Emergency actions are reserved for severe incidents where user safety or protocol integrity may be at risk.

## Examples

| Action | Use case |
|---|---|
| Pause bridge frontend | Suspected frontend compromise |
| Disable a route | Incorrect token mapping |
| Rotate keys | Key compromise or signer loss |
| Freeze deployment | Failed upgrade or inconsistent artifacts |
| Publish warning | Active phishing or RPC spoofing |

{% hint style="danger" %}
Emergency authority is powerful. It must be scoped, logged, reviewed, and communicated.
{% endhint %}

## Response requirements

- Identify commander.
- Record timeline.
- Preserve evidence.
- Communicate user impact.
- Execute only approved action.
- Publish post-incident review when appropriate.

## Related pages

- [Incident Response](../operators/incident-response.md)
- [Threat Model](../security/threat-model.md)
- [Roles and Permissions](roles-and-permissions.md)
