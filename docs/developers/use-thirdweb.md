# Use thirdweb

thirdweb can connect to Vellum when provided with the final chain ID and RPC URL.

## Configuration shape

```ts
import { defineChain, getContract } from "thirdweb";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID!
});

const vellum = defineChain({
  id: Number(process.env.VELLUM_CHAIN_ID),
  rpc: process.env.VELLUM_RPC_URL!
});

const contract = getContract({
  client,
  chain: vellum,
  address: "0x..."
});
```

## Checklist

- Use official chain ID.
- Use official RPC URL.
- Confirm ETH is displayed as the gas token.
- Test contract reads.
- Test contract writes with small values.
- Confirm explorer links resolve.

{% hint style="info" %}
thirdweb configuration should be updated only after final public network values are published.
{% endhint %}

## Related pages

- [Developer Quickstart](quickstart.md)
- [Use viem](use-viem.md)
- [Contract Addresses](contract-addresses.md)
