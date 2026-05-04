# Predeploys

Vellum follows standard OP Stack-style predeploy expectations where applicable.

## Common predeploy examples

| Contract | Address | Notes |
|---|---|---|
| WETH | `0x4200000000000000000000000000000000000006` | Standard WETH predeploy pattern |
| L2 CrossDomainMessenger | TBD | Publish final address before launch |
| L2 StandardBridge | TBD | Publish final address before launch |
| GasPriceOracle | TBD | Confirm from deployment artifacts |

{% hint style="info" %}
Final predeploy behavior should be verified against the live genesis and deployment artifacts.
{% endhint %}

## Developer guidance

- Do not assume non-standard predeploys.
- Use published addresses from official docs.
- Check bytecode before integrating.
- Use ABIs that match deployed contracts.

## Related pages

- [Contract Addresses](contract-addresses.md)
- [Execution Layer](../architecture/execution-layer.md)
- [Bridge Architecture](../architecture/bridge-architecture.md)
