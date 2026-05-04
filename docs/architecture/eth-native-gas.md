# ETH Native Gas

Vellum uses ETH as its native gas token. There is no custom gas token. There is no requirement to acquire a separate asset to transact.

## What this means

| Action | Asset used |
|---|---|
| Pay transaction gas | ETH |
| Send value between accounts | ETH |
| Deploy a contract | ETH |
| Call a contract | ETH |

## How ETH gets to Vellum

ETH on Vellum arrives in three ways:

1. **Bridge from Base.** Users deposit ETH on Base into the bridge contract; the bridge credits ETH on Vellum. See [Deposit ETH from Base](../bridge/deposit-eth-from-base.md).
2. **Receive on Vellum.** Another Vellum user sends ETH to the address.
3. **Faucet (testnet only).** See [Faucets](../network/faucets.md).

## Fee structure

A Vellum transaction fee compensates for:

- Vellum execution work.
- Settlement costs to Base, which in turn cover Base's own settlement to Ethereum.

These costs are bundled into the gas the transaction consumes. Users see one ETH-denominated cost. Developers should not hardcode gas prices and should let wallets and tooling estimate dynamically.

## EIP-1559 style fee market

Vellum uses an EIP-1559 style fee structure with base fee and priority fee components. Wallets and libraries handle this automatically. Implementations that want to tune fees explicitly should query:

- `eth_feeHistory`
- `eth_gasPrice`
- `eth_maxPriorityFeePerGas`

## What is not used

- A separate ERC-20 token for gas.
- A wrapped ETH variant for gas.
- A non-ETH staking token for gas.

{% hint style="info" %}
Ecosystem tokens may be deployed on Vellum and used by individual applications. They are not used to pay native gas.
{% endhint %}

## Why ETH is the right gas asset for Vellum

Vellum is the chain for Recorded Intelligence and agent coordination. ETH-native gas keeps that environment simple:

- ETH keeps Vellum simple for wallets, bridges, developers, and infrastructure.
- Agent protocols can still use their own ERC-20 tokens for task payments, incentives, staking, reputation, or market-specific settlement.
- ETH is used only for transaction execution and value transfer at the protocol level.
- Application-level assets are separate from native gas, so changing an application's economics does not change Vellum's economics.

## Gas budgeting tips

- Always keep a small ETH balance on Vellum to cover gas, even if your dapp uses ERC-20s.
- Use fee estimation calls before submitting heavy transactions.
- Catch and surface "insufficient funds for gas" cleanly in dapp UIs.

## Related pages

- [Gas and Fees](../developers/gas-and-fees.md)
- [Send Transactions](../developers/send-transactions.md)
- [Chain ID and Currency](../network/chain-id-and-currency.md)
