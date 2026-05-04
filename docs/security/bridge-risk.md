# Bridge Risk

Bridge risk includes contracts, token mapping, frontend integrity, indexing, finalization, and user signing behavior.

## Key risks

| Risk | Example mitigation |
|---|---|
| Contract bug | Review, testing, audits when available |
| Token mapping error | Formal token list review |
| Frontend compromise | Official deployment process and monitoring |
| Stale status | Bridge indexer and explorer monitoring |
| User phishing | Official links and wallet warnings |
| Finalization confusion | Clear UI states and documentation |

{% hint style="warning" %}
Bridge routes should not be treated as production-ready until deposits, withdrawals, finalization, token mapping, and explorer links are tested.
{% endhint %}

## Related pages

- [Bridge Security](../bridge/bridge-security.md)
- [Withdrawal Finalization](../bridge/withdrawal-finalization.md)
- [Superbridge Integration](../bridge/superbridge-integration.md)
