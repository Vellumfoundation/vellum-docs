# Network Information

Use this page for chain connection details once public values are finalized.

| Field | Value |
|---|---|
| Network name | Vellum |
| Settlement layer | Base |
| Native currency | ETH |
| Currency symbol | ETH |
| Decimals | 18 |
| Chain ID | TBD |
| Public RPC | TBD |
| WebSocket RPC | TBD |
| Block explorer | TBD |
| Bridge | TBD |
| Superbridge route | TBD |

{% hint style="warning" %}
Final chain ID, RPC endpoints, explorer, bridge URL, and deployed contract addresses must be filled before public launch.
{% endhint %}

## Environment variables

```bash
export VELLUM_CHAIN_ID=TBD
export VELLUM_RPC_URL=TBD
export VELLUM_WS_URL=TBD
export VELLUM_EXPLORER_URL=TBD
export VELLUM_BRIDGE_URL=TBD
```

## Verification checklist

- Confirm chain ID through `eth_chainId`.
- Confirm the RPC endpoint is official.
- Confirm explorer and bridge URLs are official.
- Confirm native currency is ETH with 18 decimals.
- Confirm bridge contract addresses match published metadata.

## Related pages

- [RPC Endpoints](rpc-endpoints.md)
- [Wallet Setup](wallet-setup.md)
- [Contract Addresses](../developers/contract-addresses.md)
