# FAQ

## What is Vellum?

Vellum is an Ethereum-compatible Layer 3 rollup that settles to Base. It uses ETH as its native gas token and supports standard EVM tooling.

## Is Vellum an L2 or L3?

Vellum is an L3. Base is its parent L2. Ethereum is the L1 below Base.

## What does Vellum settle to?

Vellum settles to Base. Base settles to Ethereum.

## What is the native gas token?

ETH. Vellum does not use a custom gas token.

## Does Vellum use ETH for gas?

Yes. All gas on Vellum is paid in ETH.

## Can I deploy Solidity contracts?

Yes. Vellum is EVM-compatible. Standard Solidity contracts work without modification.

## Can I use MetaMask?

Yes. Vellum supports MetaMask and other standard EVM wallets. See [Add Vellum to MetaMask](../users/add-vellum-to-metamask.md).

## Can I bridge from Base?

Yes. ETH and supported ERC-20s can be bridged from Base to Vellum. See [Deposit ETH from Base](../bridge/deposit-eth-from-base.md).

## Is Vellum compatible with Superbridge?

Vellum is designed to be Superbridge-compatible. It exposes the standard OP Stack bridge contracts and chain metadata that Superbridge-style UIs require. See [Superbridge Compatibility](../architecture/superbridge-compatibility.md). Live integration with any specific bridge UI is a separate operational step.

## How do withdrawals work?

Withdrawals from Vellum to Base require initiating on Vellum, waiting for inclusion and an output root on Base, proving on Base, waiting for the finalization window, then claiming on Base. See [Withdrawal Finalization](../bridge/withdrawal-finalization.md).

## How long do withdrawals take?

Hours to days, depending on bridge configuration and chain conditions. The finalization window is the largest contributor.

## Can I bridge ERC-20 tokens?

Yes. Bridging uses canonical token mapping. See [Bridge ERC-20 Tokens](../bridge/bridge-erc20-tokens.md).

## Is Vellum EVM compatible?

Yes. Solidity contracts, EVM opcodes, ABIs, gas accounting, and standard tooling work as expected.

## Does Vellum have an explorer?

Yes. The explorer URL is published in [Block Explorer](../network/block-explorer.md).

## What RPC should I use?

Use the official RPC URL from [RPC Endpoints](../network/rpc-endpoints.md). Avoid third-party endpoints unless you know what they are doing with your traffic.

## Can I run a node?

Yes. See [Run an RPC Node](../operators/run-an-rpc-node.md).

## What happens if the sequencer goes down?

New transactions cannot be sequenced until the sequencer is restored. Already finalized state is unaffected. See [Sequencer Risk](../security/sequencer-risk.md).

## What happens if the RPC goes down?

Public RPC traffic is impacted, but the chain itself continues. Operators run multiple RPC nodes to mitigate this. See [RPC Risk](../security/rpc-risk.md).

## Is Vellum decentralized?

Vellum is not fully decentralized at launch. Several roles, including the sequencer, are operated centrally at launch. Progressive decentralization is a future-work item, not a current property.

## Is Vellum audited?

Audits are tracked transparently in [Audits](../security/audits.md). At launch, several components are pending audit. Vellum does not claim audits that have not been completed.

## How do I verify contracts?

Use Hardhat or Foundry against Vellum's explorer verification API. See [Verify a Contract](../developers/verify-a-contract.md).

## How do I add Vellum to my wallet?

Add it manually with the values from [Network Information](../network/network-information.md). See [Add Vellum to MetaMask](../users/add-vellum-to-metamask.md).

## Can developers build dapps on Vellum?

Yes. Vellum supports the standard EVM development stack: Hardhat, Foundry, ethers.js, viem, thirdweb, Remix.

## What makes Vellum different?

Vellum is an L3 settled to Base, with ETH gas, OP Stack bridging, Superbridge compatibility, and a strong operational focus on uptime. It targets teams that want a dependable execution layer above Base without giving up EVM tooling.

## Where can I get support?

Use the channels listed in [Links](links.md).

## Why are some values marked TBD in the documentation?

Some values, such as final chain ID, RPC URLs, explorer URLs, bridge URLs, and contract addresses, are placeholders until the launch readiness checklist is complete. They will be filled in before public launch.

## Related pages

- [Glossary](glossary.md)
- [Links](links.md)
- [What is Vellum?](../introduction/what-is-vellum.md)
- [Network Information](../network/network-information.md)
