# Block Explorer

The Vellum block explorer is the canonical surface for inspecting addresses, transactions, blocks, contracts, and bridge activity on Vellum.

## Explorer URL

| Field | Value |
|---|---|
| Explorer | TBD |
| Explorer API | TBD |

{% hint style="warning" %}
Until the explorer URL is published in this documentation, treat any explorer claiming to index Vellum with caution.
{% endhint %}

## What you can do

| Action | How |
|---|---|
| Look up a transaction | Paste the transaction hash into the search bar |
| Look up an address | Paste the address into the search bar |
| Inspect a block | Use the block number or block hash |
| Verify a contract | Use the contract verification flow |
| Read events | Open the contract page and view emitted events |
| Read state | Open the contract page and use the read tab |
| Write state | Connect a wallet on the contract write tab |

## Contract verification

Verifying a contract publishes its source code, ABI, and metadata so that users can read and write to it directly from the explorer. See [Verify a Contract](../developers/verify-a-contract.md) for the verification flow with Hardhat and Foundry.

## Bridge activity

The explorer indexes bridge events. Deposits and withdrawals between Base and Vellum can be traced by transaction hash on the originating chain.

## Programmatic access

The explorer exposes an API for read access. Common uses include:

- Fetching transaction lists for an address.
- Fetching token transfers.
- Fetching verified contract sources.
- Fetching event logs.

Once the API URL and key fields are published, set them as environment variables for tooling such as Foundry:

```bash
export VELLUM_EXPLORER_API_URL=TBD
export VELLUM_EXPLORER_API_KEY=TBD
```

## Health and status

Explorer indexing lag and uptime are reported on the [Network Status](network-status.md) page. Operators monitor explorer indexer lag as part of [Monitoring](../operators/monitoring.md).
