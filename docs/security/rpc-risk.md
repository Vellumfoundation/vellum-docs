# RPC Risk

RPC risk appears when users and applications rely on endpoints for balances, simulation, transaction submission, and chain data.

## Risks and controls

| Risk | Control |
|---|---|
| Outage | Multiple nodes and load balancers |
| Stale data | Head lag checks |
| Spoofing | Official endpoints and chain ID checks |
| Rate limiting | Clear limits and backoff |
| Admin exposure | Disable public admin methods |
| Log query abuse | Range limits and indexing guidance |

{% hint style="warning" %}
Applications should not treat a single RPC response as a security boundary for high-value decisions.
{% endhint %}

## Related pages

- [RPC Endpoints](../network/rpc-endpoints.md)
- [Run an RPC Node](../operators/run-an-rpc-node.md)
- [Monitoring](../operators/monitoring.md)
