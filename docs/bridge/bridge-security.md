# Bridge Security

Bridge flows are sensitive because users move assets across chains and sign high-value transactions.

## User safety checks

- Verify official bridge URL.
- Check source and destination chains.
- Review token addresses.
- Confirm transaction amounts.
- Save transaction hashes.
- Do not sign transactions from unknown bridge clones.

## Operator safety checks

- Monitor bridge contracts.
- Monitor deposit and withdrawal counts.
- Monitor failed messages.
- Watch indexer lag.
- Publish contract addresses.
- Keep incident response procedures ready.

{% hint style="danger" %}
A compromised bridge frontend, DNS record, or token mapping can put user funds at risk even if underlying contracts are unchanged.
{% endhint %}

## Related pages

- [Bridge Risk](../security/bridge-risk.md)
- [Threat Model](../security/threat-model.md)
- [Incident Response](../operators/incident-response.md)
