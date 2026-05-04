import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const docsRoot = "docs";
const chainId = "TBD";
const rpcUrl = "TBD";
const wsUrl = "TBD";
const explorerUrl = "TBD";
const bridgeUrl = "TBD";
const statusUrl = "TBD";

const groups = [
  {
    name: "Introduction",
    dir: "introduction",
    pages: [
      ["what-is-vellum.md", "What is Vellum?", "Explain what Vellum is"],
      ["why-vellum.md", "Why Vellum?", "Explain why Vellum exists"],
      ["architecture-overview.md", "Architecture Overview", "High-level architecture overview"],
      ["design-principles.md", "Design Principles", "Design principles"]
    ]
  },
  {
    name: "Network",
    dir: "network",
    pages: [
      ["network-information.md", "Network Information", "Chain information and launch placeholders"],
      ["rpc-endpoints.md", "RPC Endpoints", "RPC endpoint information"],
      ["chain-id-and-currency.md", "Chain ID and Currency", "Chain ID and ETH native currency"],
      ["block-explorer.md", "Block Explorer", "Explorer usage"],
      ["wallet-setup.md", "Wallet Setup", "Wallet setup instructions"],
      ["faucets.md", "Faucets", "Faucet information for testnet"],
      ["network-status.md", "Network Status", "Status page and uptime information"]
    ]
  },
  {
    name: "Architecture",
    dir: "architecture",
    pages: [
      ["base-settlement.md", "Base Settlement", "Base settlement model"],
      ["l3-rollup-architecture.md", "L3 Rollup Architecture", "L3 rollup architecture"],
      ["eth-native-gas.md", "ETH Native Gas", "ETH gas model"],
      ["execution-layer.md", "Execution Layer", "EVM execution layer"],
      ["sequencing.md", "Sequencing", "Sequencer behavior"],
      ["batch-submission.md", "Batch Submission", "Batch submission to Base"],
      ["output-proposals.md", "Output Proposals", "Output proposal lifecycle"],
      ["finality.md", "Finality", "Finality model"],
      ["data-availability.md", "Data Availability", "Data availability model"],
      ["bridge-architecture.md", "Bridge Architecture", "Bridge architecture"],
      ["superbridge-compatibility.md", "Superbridge Compatibility", "Superbridge compatibility"],
      ["high-availability-design.md", "High Availability Design", "No-downtime architecture"]
    ]
  },
  {
    name: "Bridge",
    dir: "bridge",
    pages: [
      ["bridge-overview.md", "Bridge Overview", "Bridge overview"],
      ["deposit-eth-from-base.md", "Deposit ETH from Base", "Deposit ETH from Base to Vellum"],
      ["withdraw-eth-to-base.md", "Withdraw ETH to Base", "Withdraw ETH from Vellum to Base"],
      ["bridge-erc20-tokens.md", "Bridge ERC-20 Tokens", "Bridge ERC-20 tokens"],
      ["withdrawal-finalization.md", "Withdrawal Finalization", "Withdrawal proving and finalization"],
      ["bridge-security.md", "Bridge Security", "Bridge security"],
      ["superbridge-integration.md", "Superbridge Integration", "Superbridge integration requirements"],
      ["troubleshooting-bridge-transfers.md", "Troubleshooting Bridge Transfers", "Bridge troubleshooting"]
    ]
  },
  {
    name: "Developers",
    dir: "developers",
    pages: [
      ["quickstart.md", "Quickstart", "Developer quickstart"],
      ["deploy-a-contract.md", "Deploy a Contract", "Deploy a Solidity contract"],
      ["verify-a-contract.md", "Verify a Contract", "Verify deployed contracts"],
      ["use-hardhat.md", "Use Hardhat", "Hardhat setup"],
      ["use-foundry.md", "Use Foundry", "Foundry setup"],
      ["use-ethers.md", "Use ethers.js", "ethers.js examples"],
      ["use-viem.md", "Use viem", "viem examples"],
      ["use-thirdweb.md", "Use thirdweb", "thirdweb examples"],
      ["use-remix.md", "Use Remix", "Remix deployment"],
      ["interact-with-rpc.md", "Interact with RPC", "JSON-RPC usage"],
      ["read-chain-data.md", "Read Chain Data", "Read data from Vellum"],
      ["send-transactions.md", "Send Transactions", "Send transactions"],
      ["gas-and-fees.md", "Gas and Fees", "Gas and fee behavior"],
      ["predeploys.md", "Predeploys", "Predeploy contracts"],
      ["contract-addresses.md", "Contract Addresses", "Published contract addresses"]
    ]
  },
  {
    name: "Users",
    dir: "users",
    pages: [
      ["add-vellum-to-metamask.md", "Add Vellum to MetaMask", "Add Vellum to MetaMask"],
      ["bridge-to-vellum.md", "Bridge to Vellum", "Bridge assets to Vellum"],
      ["send-eth.md", "Send ETH", "Send ETH on Vellum"],
      ["receive-eth.md", "Receive ETH", "Receive ETH on Vellum"],
      ["use-dapps.md", "Use Dapps", "Use dapps on Vellum"],
      ["common-wallet-errors.md", "Common Wallet Errors", "Common wallet errors"]
    ]
  },
  {
    name: "Operators",
    dir: "operators",
    pages: [
      ["node-architecture.md", "Node Architecture", "Node architecture"],
      ["run-an-rpc-node.md", "Run an RPC Node", "Run an RPC node"],
      ["run-indexing-services.md", "Run Indexing Services", "Run indexing services"],
      ["monitoring.md", "Monitoring", "Monitoring stack"],
      ["alerting.md", "Alerting", "Alerting setup"],
      ["backups.md", "Backups", "Backup strategy"],
      ["incident-response.md", "Incident Response", "Incident response"],
      ["no-downtime-operations.md", "No-Downtime Operations", "No-downtime operations"],
      ["upgrade-process.md", "Upgrade Process", "Upgrade process"]
    ]
  },
  {
    name: "Security",
    dir: "security",
    pages: [
      ["security-model.md", "Security Model", "Security model"],
      ["trust-assumptions.md", "Trust Assumptions", "Trust assumptions"],
      ["threat-model.md", "Threat Model", "Threat model"],
      ["bridge-risk.md", "Bridge Risk", "Bridge risk"],
      ["sequencer-risk.md", "Sequencer Risk", "Sequencer risk"],
      ["rpc-risk.md", "RPC Risk", "RPC risk"],
      ["upgrade-risk.md", "Upgrade Risk", "Upgrade risk"],
      ["audits.md", "Audits", "Audit status"],
      ["bug-bounty.md", "Bug Bounty", "Bug bounty"]
    ]
  },
  {
    name: "Governance",
    dir: "governance",
    pages: [
      ["governance-overview.md", "Governance Overview", "Governance overview"],
      ["roles-and-permissions.md", "Roles and Permissions", "Roles and permissions"],
      ["upgrade-governance.md", "Upgrade Governance", "Upgrade governance"],
      ["emergency-actions.md", "Emergency Actions", "Emergency actions"],
      ["multisig-policy.md", "Multisig Policy", "Multisig policy"]
    ]
  },
  {
    name: "Roadmap",
    dir: "roadmap",
    pages: [
      ["testnet.md", "Testnet", "Testnet roadmap"],
      ["mainnet.md", "Mainnet", "Mainnet roadmap"],
      ["future-work.md", "Future Work", "Future work"]
    ]
  },
  {
    name: "Reference",
    dir: "reference",
    pages: [
      ["glossary.md", "Glossary", "Glossary"],
      ["faq.md", "FAQ", "FAQ"],
      ["links.md", "Links", "Links"],
      ["changelog.md", "Changelog", "Changelog"]
    ]
  }
];

const pageIndex = new Map();
for (const group of groups) {
  for (const [file, title, description] of group.pages) {
    pageIndex.set(`${group.dir}/${file}`, { group: group.name, dir: group.dir, file, title, description });
  }
}

function write(path, content) {
  const fullPath = join(".", path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, content.trimEnd() + "\n");
}

function hint(style, content) {
  return `{% hint style="${style}" %}\n${content}\n{% endhint %}`;
}

function code(lang, content) {
  return `\`\`\`${lang}\n${content.trim()}\n\`\`\``;
}

function table(rows) {
  const body = rows.map(([a, b]) => `| ${a} | ${b} |`).join("\n");
  return `| Field | Value |\n|---|---|\n${body}`;
}

function related(paths) {
  return `## Related pages\n\n${paths.map(([label, path]) => `- [${label}](${path})`).join("\n")}`;
}

function standardPage(page) {
  const groupText = {
    Introduction: "Use this page to orient new readers before they touch RPC endpoints, bridges, or deployment tooling.",
    Network: "Use this page when connecting wallets, scripts, infrastructure, or monitoring systems to Vellum.",
    Architecture: "Use this page to understand how Vellum fits above Base and what the system depends on.",
    Bridge: "Use this page when moving ETH or ERC-20 assets between Base and Vellum.",
    Developers: "Use this page when building, testing, deploying, or debugging contracts and applications on Vellum.",
    Users: "Use this page when using wallets, bridges, and applications on Vellum.",
    Operators: "Use this page when running infrastructure or preparing production operations for Vellum.",
    Security: "Use this page to understand realistic trust assumptions, operational risks, and user safety boundaries.",
    Governance: "Use this page to understand who can change protocol configuration and how critical actions should be controlled.",
    Roadmap: "Use this page to track launch preparation without assuming features are live before they are announced.",
    Reference: "Use this page as a quick lookup while building, operating, or using Vellum."
  }[page.group];

  const facts = table([
    ["Project", "Vellum"],
    ["Settlement layer", "Base"],
    ["Chain type", "Ethereum L3 rollup"],
    ["Execution environment", "EVM-compatible"],
    ["Native gas token", "ETH"],
    ["Launch values", "Final chain ID, public RPC, explorer, bridge URL, and deployed contract addresses are TBD"]
  ]);

  return `# ${page.title}

${page.description}.

${groupText}

${hint("info", "Vellum uses ETH as its native gas token. Ecosystem tokens can exist on Vellum, but they are not gas tokens.")}

${facts}

## What this covers

This page explains the practical shape of ${page.title.toLowerCase()} for Vellum. It focuses on launch preparation, production readiness, and the assumptions builders should make before public endpoints and contract addresses are finalized.

## Builder guidance

- Treat all public URLs as placeholders until they are published through official channels.
- Use dynamic chain configuration in applications where possible.
- Verify the chain ID before signing transactions.
- Keep bridge and RPC links sourced from the official documentation.
- Monitor status updates during testnet and mainnet preparation.

## Operational guidance

Teams operating services on Vellum should keep separate configuration for testnet and mainnet. Do not reuse private keys across environments. Do not hardcode RPC URLs or gas prices. Keep rollback procedures ready for infrastructure changes.

${hint("warning", "Do not describe Vellum as launched, audited, fully decentralized, or Superbridge-live until those statuses are explicitly published.")}

${related([
    ["Network Information", "../network/network-information.md"],
    ["Security Model", "../security/security-model.md"],
    ["FAQ", "../reference/faq.md"]
  ])}`;
}

const custom = {
  "README.md": () => `# Vellum

Vellum is a Base-settled Ethereum L3 built for reliable EVM execution, ETH-native gas, Superbridge-compatible bridging, and production-grade uptime.

${code("text", `Ethereum L1
   ↓
Base L2
   ↓
Vellum L3`)}

Vellum uses ETH as its native gas token and supports normal wallet transfers, smart contract deployment, canonical bridging, RPC access, and explorer indexing.

${hint("info", "Final chain ID, public RPC, explorer, bridge URL, and deployed contract addresses are launch placeholders until they are published through official channels.")}

## Quick links

| Need | Page |
|---|---|
| Understand Vellum | [What is Vellum?](introduction/what-is-vellum.md) |
| Add the network | [Wallet Setup](network/wallet-setup.md) |
| Build a contract | [Developer Quickstart](developers/quickstart.md) |
| Bridge assets | [Bridge Overview](bridge/bridge-overview.md) |
| Run infrastructure | [Node Architecture](operators/node-architecture.md) |
| Review risks | [Security Model](security/security-model.md) |

## Network status

| Component | Status |
|---|---|
| Chain ID | TBD |
| Public RPC | TBD |
| WebSocket RPC | TBD |
| Explorer | TBD |
| Bridge | TBD |
| Status page | TBD |

## Developer quickstart

Start with [Developer Quickstart](developers/quickstart.md), then choose Hardhat, Foundry, ethers.js, viem, Remix, or thirdweb based on your workflow.

## Bridge

Vellum is designed for a Superbridge-compatible bridge experience. Bridge routes must not be treated as live until official URLs and contract addresses are published.

## Security note

Vellum inherits settlement from Base, and Base settles to Ethereum. Users and developers should still account for sequencer assumptions, bridge assumptions, RPC trust, upgrade governance, and application-level smart contract risk.

## Links

| Resource | URL |
|---|---|
| Website | TBD |
| Docs | TBD |
| Status | TBD |
| Explorer | TBD |
| Bridge | TBD |
| Support | TBD |
`,

  "SUMMARY.md": () => {
    const lines = ["# Summary", "", "* [Vellum Docs](README.md)", ""];
    for (const group of groups) {
      lines.push(`## ${group.name}`);
      for (const [file, title] of group.pages) {
        lines.push(`* [${title}](${group.dir}/${file})`);
      }
      lines.push("");
    }
    return lines.join("\n");
  },

  "introduction/what-is-vellum.md": () => `# What is Vellum?

Vellum is an Ethereum-compatible L3 rollup that settles to Base and uses ETH as its native gas token.

It is designed for teams that need dependable EVM execution above Base without changing the normal developer or wallet experience. Users send ETH, developers deploy Solidity contracts, and operators run production infrastructure around RPC, indexing, monitoring, and bridge services.

${code("text", `Ethereum L1
   ↓ settlement
Base L2
   ↓ parent chain
Vellum L3
   ↓ execution
Apps, wallets, contracts, and bridge flows`)}

## Core properties

| Property | Vellum position |
|---|---|
| Settlement | Base |
| Native gas | ETH |
| Execution | EVM-compatible |
| Bridge model | OP Stack/Superchain-style native bridge |
| Wallet transfers | Supported |
| Smart contracts | Supported |
| Explorer indexing | Required |
| Superbridge compatibility | Required |

${hint("success", "If an application already supports standard EVM networks, Vellum should feel familiar once chain ID, RPC, explorer, and bridge metadata are published.")}

## What Vellum is not

- Vellum is not a custom gas token network.
- Vellum is not live until public launch information is published.
- Vellum should not be described as fully decentralized unless governance and operations are updated to support that claim.
- Vellum does not remove normal smart contract, bridge, RPC, or wallet risks.

${related([
    ["Why Vellum?", "why-vellum.md"],
    ["Architecture Overview", "architecture-overview.md"],
    ["Security Model", "../security/security-model.md"]
  ])}`,

  "introduction/why-vellum.md": () => `# Why Vellum?

Vellum exists to provide a reliable execution layer above Base while preserving the EVM workflows builders already use.

Teams often need a chain environment with predictable infrastructure, clear documentation, bridge compatibility, explorer support, and normal ETH gas. Vellum focuses on those requirements instead of introducing a new gas token or forcing custom wallet behavior.

## Design goals

| Goal | Why it matters |
|---|---|
| Base settlement | Keeps the L3 anchored to a widely used Ethereum L2 |
| ETH gas | Reduces wallet confusion and avoids custom gas onboarding |
| EVM compatibility | Lets teams reuse Solidity, Hardhat, Foundry, viem, and ethers.js |
| Superbridge compatibility | Makes bridge UX easier to integrate and verify |
| High availability | Supports production applications and public RPC users |
| Clear operations | Gives operators measurable health, recovery, and escalation paths |

## Builder fit

Vellum is suited for applications that want EVM execution, ETH payments for gas, wallet compatibility, explorer indexing, and a documented bridge path to Base.

${hint("warning", "Do not assume final network values until the launch checklist is complete. Use placeholders in application configuration until official values are published.")}

${related([
    ["Design Principles", "design-principles.md"],
    ["Gas and Fees", "../developers/gas-and-fees.md"],
    ["No-Downtime Operations", "../operators/no-downtime-operations.md"]
  ])}`,

  "introduction/architecture-overview.md": () => `# Architecture Overview

Vellum is an Ethereum L3 rollup that uses Base as its settlement layer.

${code("text", `Ethereum L1
   ↓
Base L2
   ↓
Vellum L3
   ↓
Applications and users`)}

## System components

| Component | Role |
|---|---|
| Sequencer | Produces Vellum blocks |
| Execution node | Executes EVM transactions |
| Batch submitter | Posts transaction data or batches to Base |
| Proposer | Posts output roots for withdrawal flows |
| Bridge contracts | Move ETH and supported tokens between Base and Vellum |
| RPC gateway | Serves public JSON-RPC and WebSocket traffic |
| Explorer indexer | Indexes blocks, transactions, contracts, and logs |
| Monitoring stack | Tracks health, latency, lag, and incidents |

## Data flow

${code("text", `User transaction
   ↓
Vellum RPC
   ↓
Sequencer
   ↓
Vellum block
   ↓
Batch submission to Base
   ↓
Output proposal
   ↓
Withdrawal proving and finalization`)}

${hint("info", "The final implementation details should be checked against the live deployment artifacts before public launch.")}

${related([
    ["L3 Rollup Architecture", "../architecture/l3-rollup-architecture.md"],
    ["Base Settlement", "../architecture/base-settlement.md"],
    ["Bridge Architecture", "../architecture/bridge-architecture.md"]
  ])}`,

  "introduction/design-principles.md": () => `# Design Principles

Vellum is designed around practical EVM usability, clear operations, and safe launch preparation.

## Principles

| Principle | Meaning |
|---|---|
| Base settlement | Vellum anchors to Base as its parent chain |
| ETH native gas | ETH pays for transaction execution |
| Full EVM compatibility | Solidity contracts and standard tooling should work |
| Standard bridge behavior | Bridge flows should follow OP Stack-style expectations |
| Production RPC reliability | Public infrastructure needs health checks and failover |
| Explorer compatibility | Users and developers need indexed chain data |
| Clear status | Operators should publish incidents and maintenance windows |
| Safe upgrades | Critical changes need explicit governance and rollback plans |

${hint("warning", "The docs avoid claims that depend on future audits, governance changes, or live integrations. When a value is not final, it remains TBD.")}

## Non-goals

- A custom gas token.
- Hidden bridge behavior.
- Unverified production contract addresses.
- Launch claims before public readiness checks pass.

${related([
    ["ETH Native Gas", "../architecture/eth-native-gas.md"],
    ["Upgrade Governance", "../governance/upgrade-governance.md"],
    ["Trust Assumptions", "../security/trust-assumptions.md"]
  ])}`,

  "network/network-information.md": () => `# Network Information

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

${hint("warning", "Final chain ID, RPC endpoints, explorer, bridge URL, and deployed contract addresses must be filled before public launch.")}

## Environment variables

${code("bash", `export VELLUM_CHAIN_ID=${chainId}
export VELLUM_RPC_URL=${rpcUrl}
export VELLUM_WS_URL=${wsUrl}
export VELLUM_EXPLORER_URL=${explorerUrl}
export VELLUM_BRIDGE_URL=${bridgeUrl}`)}

## Verification checklist

- Confirm chain ID through \`eth_chainId\`.
- Confirm the RPC endpoint is official.
- Confirm explorer and bridge URLs are official.
- Confirm native currency is ETH with 18 decimals.
- Confirm bridge contract addresses match published metadata.

${related([
    ["RPC Endpoints", "rpc-endpoints.md"],
    ["Wallet Setup", "wallet-setup.md"],
    ["Contract Addresses", "../developers/contract-addresses.md"]
  ])}`,

  "network/rpc-endpoints.md": () => `# RPC Endpoints

Vellum exposes JSON-RPC for wallets, dapps, indexers, scripts, and monitoring services.

| Endpoint | Value | Notes |
|---|---|---|
| Public HTTP RPC | TBD | Use for wallets, reads, and transactions |
| Public WebSocket RPC | TBD | Use for subscriptions when available |
| Private operator RPC | Not public | Restricted to internal operators |
| Health endpoint | TBD | Used by load balancers and uptime checks |

${hint("warning", "Only use RPC URLs from official Vellum documentation or status pages. Fake RPC URLs can spoof balances, transaction status, and chain data.")}

## Basic checks

${code("bash", `curl -X POST $VELLUM_RPC_URL \\
  -H "Content-Type: application/json" \\
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'`)}

## Recommended client behavior

- Set request timeouts.
- Retry idempotent read calls.
- Do not retry signed transactions blindly.
- Use \`eth_estimateGas\` before sending transactions.
- Keep a secondary RPC provider for operational tooling.
- Monitor HTTP status codes and JSON-RPC errors separately.

${related([
    ["Interact with RPC", "../developers/interact-with-rpc.md"],
    ["RPC Risk", "../security/rpc-risk.md"],
    ["Run an RPC Node", "../operators/run-an-rpc-node.md"]
  ])}`,

  "network/chain-id-and-currency.md": () => `# Chain ID and Currency

Vellum uses ETH as its native gas token.

| Field | Value |
|---|---|
| Chain ID | TBD |
| Chain ID hex | TBD |
| Native currency | Ether |
| Symbol | ETH |
| Decimals | 18 |
| Parent chain | Base |

${hint("info", "ETH is required for gas on Vellum. Vellum does not use a custom native gas token.")}

## Why chain ID matters

Wallets and signing libraries use the chain ID to prevent replaying a transaction on the wrong network. Applications should verify the chain ID returned by RPC before asking users to sign transactions.

${code("bash", `curl -X POST $VELLUM_RPC_URL \\
  -H "Content-Type: application/json" \\
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'`)}

## Developer guidance

- Store the chain ID in environment configuration.
- Do not hardcode \`0\` or placeholder values in production.
- Display ETH as the gas token in wallet and dapp UI.
- Warn users when their wallet is connected to the wrong chain.

${related([
    ["Wallet Setup", "wallet-setup.md"],
    ["Gas and Fees", "../developers/gas-and-fees.md"],
    ["Send Transactions", "../developers/send-transactions.md"]
  ])}`,

  "network/block-explorer.md": () => `# Block Explorer

The Vellum block explorer indexes blocks, transactions, addresses, contracts, events, and verification metadata.

| Field | Value |
|---|---|
| Explorer URL | TBD |
| Contract verification | TBD |
| API URL | TBD |
| Indexed network | Vellum |

## Common tasks

1. Search for a transaction hash.
2. Confirm transaction status.
3. View block number and timestamp.
4. Inspect logs and events.
5. Check contract source verification.
6. Review token transfers when supported.

${hint("info", "Explorer data can lag the chain during indexing delays. Use RPC for immediate transaction receipts and the explorer for human-readable inspection.")}

## Contract verification

Developers should verify source code after deployment so users can inspect contracts and integrations can read ABIs.

${related([
    ["Verify a Contract", "../developers/verify-a-contract.md"],
    ["Explorer Monitoring", "../operators/run-indexing-services.md"],
    ["Explorer Indexer Lag", "../operators/monitoring.md"]
  ])}`,

  "network/wallet-setup.md": () => `# Wallet Setup

This page explains how to add Vellum to MetaMask or another EVM wallet.

${hint("warning", "Only use official RPC and bridge links. Do not add networks from random social posts, screenshots, or private messages.")}

## MetaMask manual setup

1. Open MetaMask.
2. Select the network dropdown.
3. Choose **Add network**.
4. Choose **Add a network manually**.
5. Enter the fields below.
6. Save the network.
7. Confirm the selected network says Vellum.

| Field | Value |
|---|---|
| Network name | Vellum |
| New RPC URL | TBD |
| Chain ID | TBD |
| Currency symbol | ETH |
| Block explorer URL | TBD |

## Troubleshooting

| Issue | Fix |
|---|---|
| Wrong chain | Switch to Vellum and confirm the chain ID |
| Insufficient ETH | Bridge or receive ETH on Vellum before sending transactions |
| Failed RPC | Check the status page and try the official fallback RPC if published |
| Phishing link | Close the site and reopen links from official docs |
| Transaction stuck | Check the explorer, then confirm with \`eth_getTransactionReceipt\` |

${hint("info", "Vellum uses ETH for gas. If your wallet shows another token as gas, verify your network settings before signing.")}

${related([
    ["Add Vellum to MetaMask", "../users/add-vellum-to-metamask.md"],
    ["Bridge to Vellum", "../users/bridge-to-vellum.md"],
    ["Common Wallet Errors", "../users/common-wallet-errors.md"]
  ])}`,

  "network/faucets.md": () => `# Faucets

Faucets may be available during testnet to help users and developers obtain testnet ETH for gas.

| Field | Value |
|---|---|
| Testnet faucet URL | TBD |
| Asset | Testnet ETH |
| Rate limit | TBD |
| Eligibility | TBD |
| Mainnet faucet | Not applicable |

${hint("warning", "A faucet is only for testnet assets. Mainnet ETH has real value and is not distributed by a faucet.")}

## Expected faucet behavior

- Requests should be rate limited.
- Abuse prevention should be documented.
- The faucet wallet should be monitored.
- Faucet status should be reflected on the status page.

## Developer use

Use faucet funds for deployments, contract tests, wallet transfers, bridge testing, and RPC integration checks. Do not depend on faucet availability in CI unless a dedicated testing allocation exists.

${related([
    ["Testnet Roadmap", "../roadmap/testnet.md"],
    ["Send ETH", "../users/send-eth.md"],
    ["Gas and Fees", "../developers/gas-and-fees.md"]
  ])}`,

  "network/network-status.md": () => `# Network Status

Vellum should publish network status for users, developers, and operators.

| Component | Status source |
|---|---|
| Public RPC | TBD |
| WebSocket RPC | TBD |
| Sequencer | TBD |
| Batch submission | TBD |
| Proposer | TBD |
| Explorer | TBD |
| Bridge frontend | TBD |
| Faucet | TBD |

${hint("info", "A status page should explain incidents, degraded service, maintenance windows, and recovery progress in plain language.")}

## Incident states

| State | Meaning |
|---|---|
| Operational | Service is healthy |
| Degraded | Service works with elevated errors or latency |
| Partial outage | Some users or regions are affected |
| Major outage | Core functionality is unavailable |
| Maintenance | Planned work is in progress |

${related([
    ["Monitoring", "../operators/monitoring.md"],
    ["Incident Response", "../operators/incident-response.md"],
    ["No-Downtime Operations", "../operators/no-downtime-operations.md"]
  ])}`,

  "architecture/base-settlement.md": () => `# Base Settlement

Vellum settles to Base.

Base acts as the parent chain for Vellum. This means Vellum bridge contracts, batch submission, and output proposal flows are anchored to Base rather than directly to Ethereum L1.

${code("text", `Ethereum L1
   ↓
Base L2
   ↓
Vellum L3`)}

## What settlement provides

| Function | Description |
|---|---|
| Parent chain anchoring | Vellum data and outputs are posted to Base |
| Bridge root of trust | Deposits and withdrawals route through Base-side contracts |
| Finality dependency | Vellum finality depends on Vellum state, Base state, and Ethereum finality |
| Operational dependency | Base RPC and block production must be monitored |

${hint("warning", "Settlement on Base does not remove all risk. Vellum still has sequencer, bridge, RPC, upgrade, and operator assumptions.")}

${related([
    ["Finality", "finality.md"],
    ["Batch Submission", "batch-submission.md"],
    ["Security Model", "../security/security-model.md"]
  ])}`,

  "architecture/l3-rollup-architecture.md": () => `# L3 Rollup Architecture

Vellum is an Ethereum L3 rollup above Base.

## Lifecycle

${code("text", `Transaction
   ↓
Sequencer
   ↓
L3 block
   ↓
Batch data posted to Base
   ↓
Output root posted
   ↓
Withdrawal proof and finalization`)}

## Components

| Component | Responsibility |
|---|---|
| Execution node | Executes EVM state transitions |
| Sequencer | Orders transactions and builds blocks |
| Batcher | Posts data or batches to Base |
| Proposer | Posts output roots |
| Bridge contracts | Handle deposits and withdrawals |
| RPC layer | Serves wallets and applications |

## Launch checks

- Genesis generated from deployment artifacts.
- Rollup config generated from deployment artifacts.
- Batch inbox address published.
- System config address published.
- Bridge addresses published.
- Explorer indexing confirmed.

${related([
    ["Sequencing", "sequencing.md"],
    ["Output Proposals", "output-proposals.md"],
    ["High Availability Design", "high-availability-design.md"]
  ])}`,

  "architecture/eth-native-gas.md": () => `# ETH Native Gas

Vellum uses ETH as its native gas token.

Users need ETH on Vellum to send transactions, deploy contracts, approve tokens, interact with dapps, and pay for bridge-related transactions on the Vellum side.

${hint("success", "Wallets and applications should display ETH as the Vellum gas token. No Vellum-specific token is required for gas.")}

## Fee behavior

| Fee input | Description |
|---|---|
| L3 execution | Cost to execute the transaction on Vellum |
| Settlement cost | Cost related to posting data or commitments to Base |
| Congestion | Fees can change with demand and network conditions |
| Estimation | Apps should call \`eth_estimateGas\` and fee RPC methods dynamically |

## Developer guidance

- Do not hardcode gas prices.
- Do not assume every user has ETH on Vellum.
- Show clear errors for insufficient ETH.
- Estimate gas before prompting signatures.
- Use ETH for deployment gas in Hardhat, Foundry, Remix, viem, and ethers.js.

${related([
    ["Gas and Fees", "../developers/gas-and-fees.md"],
    ["Send ETH", "../users/send-eth.md"],
    ["Chain ID and Currency", "../network/chain-id-and-currency.md"]
  ])}`,

  "architecture/execution-layer.md": () => `# Execution Layer

Vellum provides EVM-compatible execution for wallets, Solidity contracts, and standard Ethereum tooling.

## Compatibility target

| Area | Expected behavior |
|---|---|
| Accounts | Standard EOA and contract accounts |
| Transactions | EVM transaction execution |
| Contracts | Solidity and EVM bytecode support |
| Logs | Standard event logs |
| JSON-RPC | Ethereum-compatible methods |
| Tooling | Hardhat, Foundry, Remix, ethers.js, viem |

${hint("info", "EVM compatibility does not guarantee every Ethereum mainnet assumption applies. Apps should test against Vellum RPC and explorer before launch.")}

## Developer checks

- Deploy a simple contract.
- Read contract state.
- Send an ETH transaction.
- Estimate gas.
- Query logs.
- Verify contract source in the explorer.

${related([
    ["Deploy a Contract", "../developers/deploy-a-contract.md"],
    ["Predeploys", "../developers/predeploys.md"],
    ["Interact with RPC", "../developers/interact-with-rpc.md"]
  ])}`,

  "architecture/sequencing.md": () => `# Sequencing

The sequencer orders transactions and produces Vellum blocks.

## Responsibilities

| Responsibility | Description |
|---|---|
| Transaction ordering | Chooses the order of transactions included in blocks |
| Block production | Produces new L3 blocks |
| RPC responsiveness | Affects how quickly users see pending and included transactions |
| Liveness | Needs monitoring and failover planning |

${hint("warning", "A sequencer outage can delay new transactions. Applications should handle temporary submission failures and show clear status to users.")}

## Operator monitoring

- Blocks produced per minute.
- Sequencer head lag.
- Transaction pool depth.
- Error rate.
- CPU and memory pressure.
- Disk usage.
- Failover readiness.

${related([
    ["Sequencer Risk", "../security/sequencer-risk.md"],
    ["Monitoring", "../operators/monitoring.md"],
    ["No-Downtime Operations", "../operators/no-downtime-operations.md"]
  ])}`,

  "architecture/batch-submission.md": () => `# Batch Submission

Batch submission posts Vellum transaction data or commitments to Base.

## Why it matters

Batch submission connects Vellum execution to Base settlement. If batching lags, users may still see L3 execution, but settlement progress and withdrawal readiness can be delayed.

| Signal | Why monitor it |
|---|---|
| Latest submitted batch | Confirms progress to Base |
| Batch submission lag | Measures how far Vellum is behind |
| Base RPC health | Required for submission |
| Submitter balance | Must have funds to post transactions |
| Transaction failures | Indicates configuration, gas, or Base issues |

${hint("warning", "Batch submission failure is an operational risk. It should page operators before it becomes a user-facing incident.")}

${related([
    ["Base Settlement", "base-settlement.md"],
    ["Monitoring", "../operators/monitoring.md"],
    ["Threat Model", "../security/threat-model.md"]
  ])}`,

  "architecture/output-proposals.md": () => `# Output Proposals

Output proposals publish commitments to Vellum state for withdrawal flows.

## Lifecycle

${code("text", `Vellum block
   ↓
State root
   ↓
Output proposal posted to Base
   ↓
Withdrawal proof references output
   ↓
Finalization after required period`)}

## Operator checks

- Proposer is online.
- Output roots are advancing.
- Proposal transactions are accepted on Base.
- Proposer wallet has enough ETH on Base.
- Withdrawal proof tooling can find the expected output.

${hint("info", "Withdrawal timing depends on the configured proof and finalization model. Do not describe withdrawals as instant when a challenge or finality period applies.")}

${related([
    ["Withdrawal Finalization", "../bridge/withdrawal-finalization.md"],
    ["Finality", "finality.md"],
    ["Bridge Risk", "../security/bridge-risk.md"]
  ])}`,

  "architecture/finality.md": () => `# Finality

Vellum finality depends on L3 execution, Base settlement, and Ethereum finality.

## Finality layers

| Layer | Meaning |
|---|---|
| L3 inclusion | Transaction is included in a Vellum block |
| L3 confirmation | Additional Vellum blocks build on top |
| Base settlement | Batch or output information is posted to Base |
| Ethereum finality | Base settlement is ultimately anchored through Ethereum |
| Withdrawal finalization | Bridge-specific proof and waiting period are complete |

${hint("warning", "Applications should distinguish transaction inclusion from withdrawal finalization. They are not the same event.")}

## Practical guidance

- Wallet transfers can show once an L3 receipt is available.
- High-value workflows should wait for additional confirmations.
- Bridge withdrawals should follow the official proof and finalization flow.
- Operators should monitor Base reorgs and proposal progress.

${related([
    ["Withdrawal Finalization", "../bridge/withdrawal-finalization.md"],
    ["Output Proposals", "output-proposals.md"],
    ["Trust Assumptions", "../security/trust-assumptions.md"]
  ])}`,

  "architecture/data-availability.md": () => `# Data Availability

Vellum relies on the configured OP Stack-style data path for publishing transaction data or commitments to Base.

## What to verify before launch

| Item | Requirement |
|---|---|
| Batch submission | Advancing on Base |
| Data path | Documented for users and operators |
| Monitoring | Batch lag, failed submissions, wallet balance |
| Recovery | Runbook for submitter outage |
| Cost model | Tracked and included in fee planning |

${hint("info", "The final data availability configuration should match the deployment artifacts and operator runbooks before public launch.")}

## User impact

If data publication is delayed, withdrawals and settlement-dependent workflows can be delayed. Dapps should surface network status instead of treating all failures as wallet errors.

${related([
    ["Batch Submission", "batch-submission.md"],
    ["Monitoring", "../operators/monitoring.md"],
    ["Threat Model", "../security/threat-model.md"]
  ])}`,

  "architecture/bridge-architecture.md": () => `# Bridge Architecture

Vellum uses an OP Stack/Superchain-style native bridge architecture between Base and Vellum.

## Relationship between layers

${code("text", `Ethereum L1
   ↓
Base L2
   ↓ bridge parent chain
Vellum L3
   ↓ bridge child chain
Users and dapps`)}

Base is the parent chain. Vellum is the child chain. ETH deposits move from Base to Vellum through Base-side bridge contracts. ETH withdrawals start on Vellum, are proven against the relevant output, then finalized on Base after the required period.

## Deposit flow

1. User starts an ETH deposit on Base.
2. Base-side bridge contract receives the deposit.
3. A cross-domain message represents the deposit for Vellum.
4. ETH becomes available on Vellum after the deposit is processed.
5. The user pays future Vellum gas with ETH.

## Withdrawal flow

1. User initiates withdrawal on Vellum.
2. Withdrawal message is recorded on Vellum.
3. Output proposal becomes available on Base.
4. User proves the withdrawal.
5. User waits through the required finalization period.
6. User finalizes on Base and receives assets.

## ERC-20 bridging

ERC-20 bridging uses canonical token mapping. A parent token on Base maps to a corresponding token representation on Vellum. Token metadata, bridge addresses, and token routes must be published and tested before public launch.

## Metadata and indexing

Bridge UIs need:

- Chain ID.
- Public RPC.
- Explorer.
- Parent bridge contracts.
- Vellum bridge contracts.
- Token list.
- Icons and branding assets.
- Tested deposit and withdrawal routes.
- Bridge indexer support for user status.

${hint("warning", "Withdrawals should not be described as instant when proof and finalization steps are required.")}

${related([
    ["Superbridge Compatibility", "superbridge-compatibility.md"],
    ["Bridge Overview", "../bridge/bridge-overview.md"],
    ["Withdrawal Finalization", "../bridge/withdrawal-finalization.md"]
  ])}`,

  "architecture/superbridge-compatibility.md": () => `# Superbridge Compatibility

Vellum should expose the metadata and contract configuration required for a Superbridge-style bridge UI.

Superbridge compatibility means the bridge route can be described through standard chain metadata, bridge contract addresses, token lists, and tested deposit and withdrawal flows.

${hint("info", "Superbridge compatibility is a launch requirement. It should be treated as pending until the route is tested with real deployment artifacts.")}

## Integration checklist

| Item | Status |
|---|---|
| Chain ID finalized | TBD |
| RPC endpoint public and stable | TBD |
| Explorer live | TBD |
| Native currency set to ETH | Required |
| Standard bridge contracts deployed | TBD |
| Base-side bridge contracts configured | TBD |
| Vellum-side bridge contracts configured | TBD |
| Token list prepared | TBD |
| Withdrawal flow tested | TBD |
| Deposit flow tested | TBD |
| Contract addresses published | TBD |
| Chain metadata published | TBD |
| Icons and branding assets prepared | TBD |
| Testnet bridge route tested | TBD |
| Mainnet bridge route tested | TBD |

## Metadata placeholder

${code("json", JSON.stringify({
  name: "Vellum",
  chainId: "TBD",
  parent: {
    name: "Base",
    chainId: 8453
  },
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: ["TBD"],
  blockExplorers: ["TBD"],
  bridge: {
    type: "op-stack-native",
    standardBridge: "TBD",
    portal: "TBD",
    l1CrossDomainMessenger: "TBD",
    l2CrossDomainMessenger: "TBD"
  }
}, null, 2))}

## Required files

- \`chain-metadata.json\`
- \`bridge-addresses.json\`
- \`token-list.json\`
- \`integration-notes.md\`
- Icon and logo assets

## Route testing

Before public launch, test:

1. ETH deposit from Base to Vellum.
2. ETH withdrawal from Vellum to Base.
3. ERC-20 deposit.
4. ERC-20 withdrawal.
5. Failure recovery when a user closes the bridge UI.
6. Explorer links for every transaction.
7. Token list rendering.
8. Wallet chain switching.

${related([
    ["Superbridge Integration", "../bridge/superbridge-integration.md"],
    ["Bridge Architecture", "bridge-architecture.md"],
    ["Contract Addresses", "../developers/contract-addresses.md"]
  ])}`,

  "architecture/high-availability-design.md": () => `# High Availability Design

Vellum infrastructure should be designed so public services can survive routine node failures, deploys, and traffic spikes.

## Reference design

${code("text", `Users and dapps
   ↓
DNS and load balancer
   ↓
RPC gateway pool
   ↓
Execution nodes
   ↓
Sequencer, batcher, proposer, indexers, monitoring`)}

## Availability controls

| Control | Purpose |
|---|---|
| Multiple RPC nodes | Avoid a single RPC failure taking down public access |
| Load balancing | Route traffic away from unhealthy nodes |
| Health checks | Detect failures quickly |
| Blue-green deploys | Release without dropping all traffic |
| Backups and snapshots | Restore data after failure |
| Monitoring and alerts | Find issues before users report them |
| Status page | Communicate clearly during incidents |

${hint("warning", "No-downtime design reduces outage risk. It does not make downtime impossible.")}

${related([
    ["No-Downtime Operations", "../operators/no-downtime-operations.md"],
    ["Monitoring", "../operators/monitoring.md"],
    ["RPC Risk", "../security/rpc-risk.md"]
  ])}`,

  "bridge/bridge-overview.md": () => `# Bridge Overview

The Vellum bridge moves ETH and supported tokens between Base and Vellum.

## Direction

| Flow | Source | Destination |
|---|---|---|
| Deposit | Base | Vellum |
| Withdrawal | Vellum | Base |

ETH bridged to Vellum can be used as gas on Vellum.

${hint("warning", "Only bridge through official links. Bridge phishing is one of the highest-risk user flows for any chain.")}

## Before bridging

- Confirm the bridge URL is official.
- Confirm your wallet is on Base for deposits.
- Confirm your wallet is on Vellum for withdrawals.
- Keep enough ETH on Base for Base transactions.
- Keep enough ETH on Vellum for Vellum transactions.
- Understand withdrawal proving and finalization timing.

${related([
    ["Deposit ETH from Base", "deposit-eth-from-base.md"],
    ["Withdraw ETH to Base", "withdraw-eth-to-base.md"],
    ["Troubleshooting Bridge Transfers", "troubleshooting-bridge-transfers.md"]
  ])}`,

  "bridge/deposit-eth-from-base.md": () => `# Deposit ETH from Base

Depositing ETH moves ETH from Base to Vellum.

## Steps

1. Open the official bridge URL.
2. Connect your wallet.
3. Select Base as the source network.
4. Select Vellum as the destination network.
5. Enter the ETH amount.
6. Review fees and destination address.
7. Confirm the transaction on Base.
8. Wait for the bridge UI or explorer to show completion.

${hint("info", "After the deposit completes, ETH on Vellum can be used for Vellum gas.")}

## Troubleshooting

| Problem | Action |
|---|---|
| Deposit not visible | Check the Base transaction hash and bridge status |
| Wallet on wrong chain | Switch to Base before starting a deposit |
| Insufficient Base ETH | Add ETH on Base for the deposit transaction |
| Bridge UI stale | Refresh from the official URL and search by transaction hash |

${related([
    ["Bridge Overview", "bridge-overview.md"],
    ["Send ETH", "../users/send-eth.md"],
    ["Bridge Security", "bridge-security.md"]
  ])}`,

  "bridge/withdraw-eth-to-base.md": () => `# Withdraw ETH to Base

Withdrawing ETH moves ETH from Vellum back to Base.

## Steps

1. Open the official bridge URL.
2. Connect your wallet.
3. Select Vellum as the source network.
4. Select Base as the destination network.
5. Enter the ETH amount.
6. Confirm the withdrawal transaction on Vellum.
7. Prove the withdrawal when the output is available.
8. Wait through the required finalization period.
9. Finalize the withdrawal on Base.

${hint("warning", "Withdrawals can require proving and finalization. Do not expect them to complete instantly.")}

## Required gas

You may need ETH on both Vellum and Base. Vellum ETH pays for the withdrawal initiation. Base ETH pays for proving and finalization transactions.

${related([
    ["Withdrawal Finalization", "withdrawal-finalization.md"],
    ["Bridge Security", "bridge-security.md"],
    ["Common Wallet Errors", "../users/common-wallet-errors.md"]
  ])}`,

  "bridge/bridge-erc20-tokens.md": () => `# Bridge ERC-20 Tokens

Vellum can support ERC-20 bridging through standard bridge paths and canonical token mapping.

## Token mapping

| Item | Description |
|---|---|
| Parent token | ERC-20 token on Base |
| Vellum token | Canonical representation on Vellum |
| Mapping | Published relationship between the two token addresses |
| Metadata | Symbol, decimals, logo, and bridge route information |

${hint("warning", "Incorrect token mapping can lead to user loss or broken balances. Only use published mappings from official metadata.")}

## Launch checklist

- Base token address verified.
- Vellum token address verified.
- Decimals match expected behavior.
- Deposit tested.
- Withdrawal tested.
- Explorer displays transfers.
- Token list includes both sides.

${related([
    ["Superbridge Integration", "superbridge-integration.md"],
    ["Contract Addresses", "../developers/contract-addresses.md"],
    ["Bridge Risk", "../security/bridge-risk.md"]
  ])}`,

  "bridge/withdrawal-finalization.md": () => `# Withdrawal Finalization

Withdrawals from Vellum to Base can require multiple steps.

## Lifecycle

${code("text", `Initiate withdrawal on Vellum
   ↓
Wait for output proposal
   ↓
Prove withdrawal on Base
   ↓
Wait through finalization period
   ↓
Finalize withdrawal on Base`)}

## What users should know

- The initiation transaction is not the final receipt on Base.
- The proof step may become available later.
- The finalization step may require a waiting period.
- Base gas is needed for Base-side transactions.
- The bridge UI should show each stage clearly.

${hint("info", "Final withdrawal timing is a launch parameter and must be published before public bridge opening.")}

${related([
    ["Withdraw ETH to Base", "withdraw-eth-to-base.md"],
    ["Finality", "../architecture/finality.md"],
    ["Bridge Troubleshooting", "troubleshooting-bridge-transfers.md"]
  ])}`,

  "bridge/bridge-security.md": () => `# Bridge Security

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

${hint("danger", "A compromised bridge frontend, DNS record, or token mapping can put user funds at risk even if underlying contracts are unchanged.")}

${related([
    ["Bridge Risk", "../security/bridge-risk.md"],
    ["Threat Model", "../security/threat-model.md"],
    ["Incident Response", "../operators/incident-response.md"]
  ])}`,

  "bridge/superbridge-integration.md": () => `# Superbridge Integration

Vellum is designed for a Superbridge-compatible bridge experience.

## Required configuration

| Requirement | Status |
|---|---|
| Chain metadata | TBD |
| Base-side bridge addresses | TBD |
| Vellum-side bridge addresses | TBD |
| Token list | TBD |
| Public RPC | TBD |
| Explorer | TBD |
| Icons and branding | TBD |
| Deposit route test | TBD |
| Withdrawal route test | TBD |

## Metadata package

A Superbridge-style integration should include chain metadata, bridge addresses, token list, integration notes, and assets.

${code("json", JSON.stringify({
  name: "Vellum",
  chainId: "TBD",
  parentChainId: 8453,
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    public: "TBD",
    websocket: "TBD"
  },
  explorers: [{ name: "Vellum Explorer", url: "TBD" }],
  bridge: {
    type: "op-stack-canonical",
    parentChainPortalAddress: "TBD",
    parentChainStandardBridgeAddress: "TBD",
    parentChainCrossDomainMessengerAddress: "TBD",
    l3StandardBridgeAddress: "TBD",
    l3CrossDomainMessengerAddress: "TBD"
  }
}, null, 2))}

${hint("warning", "Do not announce Superbridge as live until the route is tested and the official bridge URL is published.")}

${related([
    ["Superbridge Compatibility", "../architecture/superbridge-compatibility.md"],
    ["Bridge Architecture", "../architecture/bridge-architecture.md"],
    ["Bridge Security", "bridge-security.md"]
  ])}`,

  "bridge/troubleshooting-bridge-transfers.md": () => `# Troubleshooting Bridge Transfers

Use this page when a deposit or withdrawal does not appear to progress as expected.

## First checks

| Check | Why |
|---|---|
| Official URL | Avoid bridge phishing |
| Source chain | Deposits start on Base, withdrawals start on Vellum |
| Transaction hash | Confirms whether the transaction was submitted |
| Wallet address | Confirms the destination |
| Status page | Identifies known incidents |
| Explorer | Confirms on-chain state |

## Common issues

| Issue | Likely cause | Action |
|---|---|---|
| Deposit pending | Bridge message still processing | Wait and check source transaction |
| Withdrawal not provable | Output not available yet | Wait for proposal and retry |
| Finalize unavailable | Finalization period not complete | Wait until the bridge UI permits finalization |
| Wrong token | Incorrect route or token mapping | Stop and verify official token list |
| RPC error | Endpoint degraded | Check status and retry later |

${hint("danger", "Never paste your private key or seed phrase into a support form. Official support should only need public transaction hashes and addresses.")}

${related([
    ["Deposit ETH from Base", "deposit-eth-from-base.md"],
    ["Withdraw ETH to Base", "withdraw-eth-to-base.md"],
    ["Common Wallet Errors", "../users/common-wallet-errors.md"]
  ])}`,

  "developers/quickstart.md": () => `# Quickstart

This quickstart gets a developer from zero to deploying and reading a contract on Vellum.

## Prerequisites

- Node.js 20 or newer.
- npm, pnpm, or yarn.
- A wallet private key for testnet development.
- ETH on Vellum for gas.
- Vellum RPC URL and chain ID.
- Hardhat or Foundry.

## Add network

Add Vellum to your wallet using the official values from [Network Information](../network/network-information.md).

${code("bash", `export VELLUM_CHAIN_ID=${chainId}
export VELLUM_RPC_URL=${rpcUrl}
export PRIVATE_KEY=0x...`)}

## Install dependencies

${code("bash", `npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npm install ethers viem`)}

## Deploy with Hardhat

${code("bash", `npx hardhat run scripts/deploy.ts --network vellum`)}

## Deploy with Foundry

${code("bash", `forge script script/Deploy.s.sol:DeployScript \\
  --rpc-url $VELLUM_RPC_URL \\
  --private-key $PRIVATE_KEY \\
  --broadcast`)}

## Send a transaction

${code("bash", `cast send 0x0000000000000000000000000000000000000000 \\
  --value 0.001ether \\
  --rpc-url $VELLUM_RPC_URL \\
  --private-key $PRIVATE_KEY`)}

## Verify deployment

Check the transaction hash in the Vellum explorer. If verification APIs are available, use the explorer verification flow or Foundry and Hardhat verification plugins.

## Read contract state

Use \`eth_call\`, ethers.js, viem, Foundry \`cast call\`, or the explorer read contract tab.

## Troubleshooting

| Error | Fix |
|---|---|
| Wrong chain ID | Confirm \`eth_chainId\` and wallet network |
| Insufficient funds | Add ETH on Vellum |
| RPC timeout | Check status page and retry |
| Underpriced transaction | Estimate fees dynamically |
| Verification failed | Confirm compiler version and constructor args |

${related([
    ["Deploy a Contract", "deploy-a-contract.md"],
    ["Use Hardhat", "use-hardhat.md"],
    ["Use Foundry", "use-foundry.md"]
  ])}`,

  "developers/deploy-a-contract.md": () => `# Deploy a Contract

This page deploys a simple Solidity contract to Vellum.

## Contract

${code("solidity", `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VellumHello {
    string public message;

    event MessageUpdated(string message);

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string calldata newMessage) external {
        message = newMessage;
        emit MessageUpdated(newMessage);
    }
}`)}

## Deploy it

With Hardhat:

${code("bash", `npx hardhat run scripts/deploy.ts --network vellum`)}

With Foundry:

${code("bash", `forge create src/VellumHello.sol:VellumHello \\
  --rpc-url $VELLUM_RPC_URL \\
  --private-key $PRIVATE_KEY \\
  --constructor-args "hello vellum"`)}

## Verify it

Use the Vellum explorer verification flow when the explorer API is live. Keep the compiler version, optimizer settings, source path, and constructor arguments consistent with deployment.

## Common deployment errors

| Error | Cause | Fix |
|---|---|---|
| Insufficient funds | Wallet has no ETH on Vellum | Bridge or receive ETH |
| Chain ID mismatch | Tool connected to wrong network | Check \`VELLUM_CHAIN_ID\` |
| Nonce too low | Account nonce already used | Refresh nonce from RPC |
| Gas estimation failed | Constructor or call may revert | Test locally and inspect revert data |

${hint("info", "ETH is required for deployment gas on Vellum. There is no custom gas token.")}

${related([
    ["Verify a Contract", "verify-a-contract.md"],
    ["Use Hardhat", "use-hardhat.md"],
    ["Use Foundry", "use-foundry.md"]
  ])}`,

  "developers/verify-a-contract.md": () => `# Verify a Contract

Contract verification lets users inspect source code and lets tools load ABI information from the explorer.

## Required inputs

| Input | Example |
|---|---|
| Contract address | \`0x...\` |
| Compiler version | \`0.8.24\` |
| Optimizer settings | Enabled or disabled |
| Source files | Solidity files used at deploy time |
| Constructor args | ABI-encoded or form input |
| License | SPDX identifier |

## Foundry example

${code("bash", `forge verify-contract $CONTRACT_ADDRESS src/VellumHello.sol:VellumHello \\
  --chain-id $VELLUM_CHAIN_ID \\
  --verifier-url $VELLUM_EXPLORER_API_URL \\
  --etherscan-api-key $VELLUM_EXPLORER_API_KEY`)}

## Hardhat example

${code("bash", `npx hardhat verify --network vellum $CONTRACT_ADDRESS "hello vellum"`)}

${hint("warning", "Verification failures are usually caused by compiler mismatch, optimizer mismatch, wrong constructor arguments, or flattened source differences.")}

${related([
    ["Deploy a Contract", "deploy-a-contract.md"],
    ["Block Explorer", "../network/block-explorer.md"],
    ["Contract Addresses", "contract-addresses.md"]
  ])}`,

  "developers/use-hardhat.md": () => `# Use Hardhat

Hardhat works with Vellum through the standard JSON-RPC network configuration.

## Install

${code("bash", `npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox`)}

## Configuration

${code("ts", `import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    vellum: {
      url: process.env.VELLUM_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: Number(process.env.VELLUM_CHAIN_ID || 0)
    }
  }
};

export default config;`)}

## Deploy

${code("bash", `npx hardhat run scripts/deploy.ts --network vellum`)}

## Tips

- Keep \`VELLUM_CHAIN_ID\` outside source code.
- Never commit private keys.
- Use ETH on Vellum for deployment gas.
- Verify contracts after deployment.

${related([
    ["Deploy a Contract", "deploy-a-contract.md"],
    ["Verify a Contract", "verify-a-contract.md"],
    ["Gas and Fees", "gas-and-fees.md"]
  ])}`,

  "developers/use-foundry.md": () => `# Use Foundry

Foundry works with Vellum through standard RPC configuration.

## foundry.toml

${code("toml", `[rpc_endpoints]
vellum = "\${VELLUM_RPC_URL}"

[etherscan]
vellum = { key = "\${VELLUM_EXPLORER_API_KEY}", url = "\${VELLUM_EXPLORER_API_URL}" }`)}

## Deploy

${code("bash", `forge script script/Deploy.s.sol:DeployScript \\
  --rpc-url $VELLUM_RPC_URL \\
  --private-key $PRIVATE_KEY \\
  --broadcast`)}

## Useful commands

${code("bash", `cast chain-id --rpc-url $VELLUM_RPC_URL
cast block-number --rpc-url $VELLUM_RPC_URL
cast balance $ADDRESS --rpc-url $VELLUM_RPC_URL
forge test`)}

${hint("info", "Use Foundry scripts for repeatable deployments and keep deployment artifacts for verification.")}

${related([
    ["Deploy a Contract", "deploy-a-contract.md"],
    ["Read Chain Data", "read-chain-data.md"],
    ["Interact with RPC", "interact-with-rpc.md"]
  ])}`,

  "developers/use-ethers.md": () => `# Use ethers.js

ethers.js can read from Vellum, send transactions, and interact with contracts through the public RPC.

## Send ETH

${code("ts", `import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.VELLUM_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

const tx = await wallet.sendTransaction({
  to: "0x0000000000000000000000000000000000000000",
  value: ethers.parseEther("0.001")
});

console.log(tx.hash);`)}

## Read chain ID

${code("ts", `const network = await provider.getNetwork();
console.log(network.chainId);`)}

${hint("warning", "Do not send transactions until the provider reports the expected Vellum chain ID.")}

${related([
    ["Send Transactions", "send-transactions.md"],
    ["Read Chain Data", "read-chain-data.md"],
    ["Gas and Fees", "gas-and-fees.md"]
  ])}`,

  "developers/use-viem.md": () => `# Use viem

viem can define Vellum as a custom chain and use it with public and wallet clients.

## Example

${code("ts", `import { createPublicClient, createWalletClient, http, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { defineChain } from "viem";

export const vellum = defineChain({
  id: Number(process.env.VELLUM_CHAIN_ID),
  name: "Vellum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: [process.env.VELLUM_RPC_URL!]
    }
  }
});

const account = privateKeyToAccount(process.env.PRIVATE_KEY as \`0x\${string}\`);

const walletClient = createWalletClient({
  account,
  chain: vellum,
  transport: http(process.env.VELLUM_RPC_URL)
});

const hash = await walletClient.sendTransaction({
  to: "0x0000000000000000000000000000000000000000",
  value: parseEther("0.001")
});

console.log(hash);`)}

## Read block number

${code("ts", `const publicClient = createPublicClient({
  chain: vellum,
  transport: http(process.env.VELLUM_RPC_URL)
});

console.log(await publicClient.getBlockNumber());`)}

${related([
    ["Use ethers.js", "use-ethers.md"],
    ["Send Transactions", "send-transactions.md"],
    ["Interact with RPC", "interact-with-rpc.md"]
  ])}`,

  "developers/use-thirdweb.md": () => `# Use thirdweb

thirdweb can connect to Vellum when provided with the final chain ID and RPC URL.

## Configuration shape

${code("ts", `import { defineChain, getContract } from "thirdweb";
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
});`)}

## Checklist

- Use official chain ID.
- Use official RPC URL.
- Confirm ETH is displayed as the gas token.
- Test contract reads.
- Test contract writes with small values.
- Confirm explorer links resolve.

${hint("info", "thirdweb configuration should be updated only after final public network values are published.")}

${related([
    ["Developer Quickstart", "quickstart.md"],
    ["Use viem", "use-viem.md"],
    ["Contract Addresses", "contract-addresses.md"]
  ])}`,

  "developers/use-remix.md": () => `# Use Remix

Remix can deploy Solidity contracts to Vellum through an injected wallet such as MetaMask.

## Steps

1. Add Vellum to MetaMask.
2. Open Remix.
3. Compile your Solidity contract.
4. Select **Injected Provider** in the deploy panel.
5. Confirm MetaMask is connected to Vellum.
6. Deploy the contract.
7. Save the deployment address and transaction hash.
8. Verify the contract in the explorer when available.

${hint("warning", "Always confirm MetaMask is on Vellum before deploying from Remix. Deploying to the wrong chain can waste gas and confuse users.")}

## Recommended settings

| Setting | Value |
|---|---|
| Compiler | Match your source pragma |
| EVM version | Default unless your project requires otherwise |
| Optimizer | Match your verification plan |
| Network | Vellum |
| Gas token | ETH |

${related([
    ["Wallet Setup", "../network/wallet-setup.md"],
    ["Deploy a Contract", "deploy-a-contract.md"],
    ["Verify a Contract", "verify-a-contract.md"]
  ])}`,

  "developers/interact-with-rpc.md": () => `# Interact with RPC

Vellum supports standard Ethereum JSON-RPC methods.

## Common methods

| Method | Use |
|---|---|
| \`eth_chainId\` | Confirm connected chain |
| \`eth_blockNumber\` | Read latest block number |
| \`eth_getBalance\` | Read ETH balance |
| \`eth_getTransactionByHash\` | Fetch transaction details |
| \`eth_getTransactionReceipt\` | Confirm transaction status |
| \`eth_call\` | Read contract state |
| \`eth_estimateGas\` | Estimate transaction gas |
| \`eth_sendRawTransaction\` | Submit signed transactions |
| \`eth_getLogs\` | Query event logs |

## cURL example

${code("bash", `curl -X POST $VELLUM_RPC_URL \\
  -H "Content-Type: application/json" \\
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'`)}

## Log query guidance

Large \`eth_getLogs\` ranges can be expensive. Indexers and apps should use bounded ranges, retries, and checkpoints.

${hint("info", "Production apps should monitor RPC latency, error rate, and stale block height.")}

${related([
    ["RPC Endpoints", "../network/rpc-endpoints.md"],
    ["Read Chain Data", "read-chain-data.md"],
    ["RPC Risk", "../security/rpc-risk.md"]
  ])}`,

  "developers/read-chain-data.md": () => `# Read Chain Data

Reading data from Vellum works through standard JSON-RPC and indexing services.

## Common reads

${code("bash", `cast chain-id --rpc-url $VELLUM_RPC_URL
cast block-number --rpc-url $VELLUM_RPC_URL
cast balance $ADDRESS --rpc-url $VELLUM_RPC_URL
cast call $CONTRACT "message()(string)" --rpc-url $VELLUM_RPC_URL`)}

## Data sources

| Source | Best for |
|---|---|
| RPC | Latest chain state |
| Explorer | Human-readable transactions and contracts |
| Indexer | Application-specific event history |
| Subgraph or custom index | Query-heavy product features |

${hint("warning", "Explorer data can lag. For critical execution paths, check RPC receipts and contract state directly.")}

${related([
    ["Interact with RPC", "interact-with-rpc.md"],
    ["Block Explorer", "../network/block-explorer.md"],
    ["Run Indexing Services", "../operators/run-indexing-services.md"]
  ])}`,

  "developers/send-transactions.md": () => `# Send Transactions

Transactions on Vellum use ETH for gas.

## Before sending

- Confirm chain ID.
- Confirm account has ETH on Vellum.
- Estimate gas.
- Set a reasonable timeout.
- Store transaction hash.
- Wait for receipt.

## ethers.js send

${code("ts", `const tx = await wallet.sendTransaction({
  to: recipient,
  value: ethers.parseEther("0.001")
});

const receipt = await tx.wait();
console.log(receipt?.hash);`)}

## viem send

${code("ts", `const hash = await walletClient.sendTransaction({
  to: recipient,
  value: parseEther("0.001")
});`)}

${hint("info", "Do not retry a signed transaction by signing a new one unless you understand nonce handling.")}

${related([
    ["Use ethers.js", "use-ethers.md"],
    ["Use viem", "use-viem.md"],
    ["Gas and Fees", "gas-and-fees.md"]
  ])}`,

  "developers/gas-and-fees.md": () => `# Gas and Fees

ETH pays for gas on Vellum.

## Fee model

Vellum transaction costs can include L3 execution costs and settlement-related costs. Gas price may change based on demand and network conditions.

| Rule | Guidance |
|---|---|
| Native gas token | ETH |
| User requirement | Users need ETH on Vellum before sending transactions |
| Estimation | Use dynamic gas estimation |
| Hardcoding | Do not hardcode gas prices |
| UX | Explain insufficient ETH clearly |

## Application guidance

- Call \`eth_estimateGas\`.
- Read fee data from the provider.
- Show gas in ETH.
- Keep a buffer for contract interactions.
- Handle fee changes between estimate and signing.
- Avoid fixed gas assumptions in production.

${hint("warning", "If a wallet or dapp shows a non-ETH gas token for Vellum, stop and verify the network configuration.")}

${related([
    ["ETH Native Gas", "../architecture/eth-native-gas.md"],
    ["Send Transactions", "send-transactions.md"],
    ["Chain ID and Currency", "../network/chain-id-and-currency.md"]
  ])}`,

  "developers/predeploys.md": () => `# Predeploys

Vellum follows standard OP Stack-style predeploy expectations where applicable.

## Common predeploy examples

| Contract | Address | Notes |
|---|---|---|
| WETH | \`0x4200000000000000000000000000000000000006\` | Standard WETH predeploy pattern |
| L2 CrossDomainMessenger | TBD | Publish final address before launch |
| L2 StandardBridge | TBD | Publish final address before launch |
| GasPriceOracle | TBD | Confirm from deployment artifacts |

${hint("info", "Final predeploy behavior should be verified against the live genesis and deployment artifacts.")}

## Developer guidance

- Do not assume non-standard predeploys.
- Use published addresses from official docs.
- Check bytecode before integrating.
- Use ABIs that match deployed contracts.

${related([
    ["Contract Addresses", "contract-addresses.md"],
    ["Execution Layer", "../architecture/execution-layer.md"],
    ["Bridge Architecture", "../architecture/bridge-architecture.md"]
  ])}`,

  "developers/contract-addresses.md": () => `# Contract Addresses

Final contract addresses must be published before public launch.

## Core addresses

| Contract | Network | Address |
|---|---|---|
| Optimism Portal | Base | TBD |
| L1 Standard Bridge | Base | TBD |
| L1 CrossDomainMessenger | Base | TBD |
| SystemConfig | Base | TBD |
| DisputeGameFactory or L2OutputOracle | Base | TBD |
| L2 Standard Bridge | Vellum | TBD |
| L2 CrossDomainMessenger | Vellum | TBD |
| WETH | Vellum | \`0x4200000000000000000000000000000000000006\` |
| Multicall3 | Vellum | TBD |

${hint("warning", "Do not integrate against contract addresses from screenshots, chat messages, or unverified deployment logs. Use official published metadata.")}

## Publication requirements

- Address.
- Chain.
- Contract name.
- Source verification status.
- Deployment transaction hash.
- ABI.
- Upgradeability notes where relevant.

${related([
    ["Superbridge Integration", "../bridge/superbridge-integration.md"],
    ["Verify a Contract", "verify-a-contract.md"],
    ["Bridge Risk", "../security/bridge-risk.md"]
  ])}`,

  "users/add-vellum-to-metamask.md": () => `# Add Vellum to MetaMask

Use this page to add Vellum manually to MetaMask.

## Fields

| Field | Value |
|---|---|
| Network name | Vellum |
| RPC URL | TBD |
| Chain ID | TBD |
| Currency symbol | ETH |
| Explorer URL | TBD |

## Steps

1. Open MetaMask.
2. Open the network selector.
3. Choose **Add network**.
4. Choose **Add a network manually**.
5. Enter the official Vellum values.
6. Save.
7. Confirm the gas symbol is ETH.

${hint("danger", "Do not add Vellum using links from unofficial accounts or direct messages. Incorrect RPC settings can mislead users.")}

${related([
    ["Wallet Setup", "../network/wallet-setup.md"],
    ["Common Wallet Errors", "common-wallet-errors.md"],
    ["Bridge to Vellum", "bridge-to-vellum.md"]
  ])}`,

  "users/bridge-to-vellum.md": () => `# Bridge to Vellum

Users can bridge assets from Base to Vellum through the official bridge route once it is live.

## Before you bridge

- Confirm the bridge URL is official.
- Confirm your wallet is on Base.
- Confirm the destination is Vellum.
- Start with a small amount when testing.
- Save the transaction hash.

${hint("info", "ETH bridged to Vellum can be used as gas on Vellum.")}

## Basic flow

1. Open official bridge.
2. Connect wallet.
3. Select Base to Vellum.
4. Choose ETH or a supported ERC-20.
5. Confirm amount.
6. Sign the Base transaction.
7. Wait for completion.

${related([
    ["Deposit ETH from Base", "../bridge/deposit-eth-from-base.md"],
    ["Bridge Security", "../bridge/bridge-security.md"],
    ["Send ETH", "send-eth.md"]
  ])}`,

  "users/send-eth.md": () => `# Send ETH

Sending ETH on Vellum works like sending ETH on other EVM networks.

## Steps

1. Open your wallet.
2. Select Vellum.
3. Enter recipient address.
4. Enter ETH amount.
5. Review gas fee.
6. Confirm transaction.
7. Check the transaction hash in the explorer.

${hint("warning", "Make sure the recipient address is correct. On-chain transfers cannot be reversed by Vellum operators.")}

## Common issues

| Issue | Fix |
|---|---|
| Insufficient ETH | Receive or bridge ETH to Vellum |
| Wrong network | Switch to Vellum |
| Pending transaction | Check explorer and status page |
| Invalid address | Confirm the address format |

${related([
    ["Receive ETH", "receive-eth.md"],
    ["Common Wallet Errors", "common-wallet-errors.md"],
    ["Gas and Fees", "../developers/gas-and-fees.md"]
  ])}`,

  "users/receive-eth.md": () => `# Receive ETH

You can receive ETH on Vellum at your normal EVM address.

## Share your address

Use the same public wallet address format that you use on Ethereum and Base. Never share your private key or seed phrase.

## Confirm receipt

1. Copy the transaction hash from the sender.
2. Open the Vellum explorer.
3. Search the hash.
4. Confirm status is successful.
5. Confirm the destination address matches your wallet.

${hint("info", "If you receive ETH on Vellum, it can be used for Vellum gas.")}

${related([
    ["Send ETH", "send-eth.md"],
    ["Block Explorer", "../network/block-explorer.md"],
    ["Common Wallet Errors", "common-wallet-errors.md"]
  ])}`,

  "users/use-dapps.md": () => `# Use Dapps

Dapps on Vellum use standard EVM wallet connections.

## User checklist

- Confirm the site is official.
- Connect wallet.
- Confirm wallet network is Vellum.
- Review transaction details.
- Confirm gas is paid in ETH.
- Save transaction hash for important actions.

${hint("warning", "A dapp can request risky permissions. Review approvals, token spends, and contract interactions before signing.")}

## Common actions

| Action | What to check |
|---|---|
| Token approval | Amount and spender address |
| Swap | Token pair, route, and slippage |
| Mint | Contract address and price |
| Claim | Gas fee and destination |
| Bridge | Source chain, destination chain, and token |

${related([
    ["Wallet Setup", "../network/wallet-setup.md"],
    ["Security Model", "../security/security-model.md"],
    ["Common Wallet Errors", "common-wallet-errors.md"]
  ])}`,

  "users/common-wallet-errors.md": () => `# Common Wallet Errors

This page lists common wallet issues and fixes.

| Error | Meaning | Fix |
|---|---|---|
| Wrong network | Wallet is not connected to Vellum | Switch to Vellum |
| Insufficient funds | Not enough ETH for gas | Add ETH on Vellum |
| RPC error | RPC endpoint failed or timed out | Check status and retry |
| Chain ID mismatch | Wallet network config is wrong | Re-add network with official values |
| Transaction rejected | User rejected signature | Retry if intended |
| Gas estimation failed | Transaction may revert | Review contract call |
| Unknown token | Token not in wallet list | Verify token address before importing |

${hint("danger", "Never enter your seed phrase to fix a wallet error. No legitimate support process requires it.")}

${related([
    ["Add Vellum to MetaMask", "add-vellum-to-metamask.md"],
    ["Wallet Setup", "../network/wallet-setup.md"],
    ["Troubleshooting Bridge Transfers", "../bridge/troubleshooting-bridge-transfers.md"]
  ])}`,

  "operators/node-architecture.md": () => `# Node Architecture

Vellum operations rely on execution nodes, rollup services, RPC gateways, indexers, and monitoring.

## Reference components

| Component | Role |
|---|---|
| Execution node | Stores and executes Vellum state |
| Rollup node | Tracks rollup protocol state |
| Sequencer | Produces blocks |
| Batcher | Submits batches to Base |
| Proposer | Posts output roots |
| RPC gateway | Routes public RPC traffic |
| Explorer indexer | Indexes blocks and contracts |
| Monitoring stack | Tracks health and alerts |

${hint("info", "Separate public RPC nodes from privileged operational nodes. Do not expose admin RPC methods publicly.")}

${related([
    ["Run an RPC Node", "run-an-rpc-node.md"],
    ["Monitoring", "monitoring.md"],
    ["No-Downtime Operations", "no-downtime-operations.md"]
  ])}`,

  "operators/run-an-rpc-node.md": () => `# Run an RPC Node

RPC nodes serve wallet, dapp, indexer, and monitoring traffic.

## Production requirements

- Dedicated host or container resources.
- Disk sized for chain growth.
- Health checks.
- Metrics export.
- Log collection.
- Rate limiting at the gateway.
- Admin methods disabled on public endpoints.
- Load balancer integration.

## Example environment

${code("bash", `export VELLUM_RPC_PORT=8545
export VELLUM_WS_PORT=8546
export VELLUM_CHAIN_ID=${chainId}
export VELLUM_L3_DATA_DIR=/var/lib/vellum`)}

${hint("warning", "Do not expose private RPC endpoints, debug endpoints, or admin methods to the public internet.")}

${related([
    ["RPC Endpoints", "../network/rpc-endpoints.md"],
    ["RPC Risk", "../security/rpc-risk.md"],
    ["No-Downtime Operations", "no-downtime-operations.md"]
  ])}`,

  "operators/run-indexing-services.md": () => `# Run Indexing Services

Indexing services power explorers, bridge status, analytics, and application-specific queries.

## Services to index

| Service | Data |
|---|---|
| Explorer | Blocks, transactions, logs, contracts |
| Bridge indexer | Deposits, withdrawals, message status |
| App indexers | Product-specific events |
| Monitoring indexers | Lags, counts, and health signals |

## Operational guidance

- Track latest indexed block.
- Alert on indexer lag.
- Keep database backups.
- Use replayable event ingestion.
- Separate read replicas for heavy query APIs.
- Reindex after schema changes.

${hint("info", "Indexer lag should be visible on dashboards and status pages when it affects users.")}

${related([
    ["Block Explorer", "../network/block-explorer.md"],
    ["Monitoring", "monitoring.md"],
    ["Backups", "backups.md"]
  ])}`,

  "operators/monitoring.md": () => `# Monitoring

Vellum operators should monitor the chain, RPC, bridge, explorer, and infrastructure.

## Metrics

| Metric | Purpose |
|---|---|
| \`chain_head\` | Latest observed L3 head |
| \`safe_head\` | Safe head tracking |
| \`finalized_head\` | Finalized head tracking |
| \`rpc_request_count\` | RPC traffic volume |
| \`rpc_error_rate\` | RPC failure rate |
| \`rpc_latency_p95\` | User-facing latency |
| \`sequencer_blocks_produced\` | Sequencer liveness |
| \`sequencer_lag\` | Sequencer delay |
| \`batch_submission_lag\` | Settlement delay |
| \`bridge_deposit_count\` | Deposit activity |
| \`bridge_withdrawal_count\` | Withdrawal activity |
| \`withdrawal_finalization_lag\` | Withdrawal delay |
| \`explorer_indexer_lag\` | Explorer freshness |
| \`node_peer_count\` | Network connectivity |
| \`disk_usage\` | Storage pressure |
| \`memory_usage\` | Memory pressure |
| \`cpu_usage\` | CPU pressure |

## Stack

- Prometheus for metrics.
- Grafana for dashboards.
- Loki for logs.
- Alertmanager for paging.
- Uptime checks for public endpoints.

${hint("warning", "Monitor sequencer, batch submission, proposer, RPC, bridge, and explorer systems. A green RPC alone does not mean the network is healthy.")}

${related([
    ["Alerting", "alerting.md"],
    ["No-Downtime Operations", "no-downtime-operations.md"],
    ["Incident Response", "incident-response.md"]
  ])}`,

  "operators/alerting.md": () => `# Alerting

Alerting turns monitoring signals into operator action.

## Critical alerts

| Alert | Trigger |
|---|---|
| Sequencer stalled | No new blocks within threshold |
| RPC high error rate | Error percentage above threshold |
| RPC high latency | p95 latency above threshold |
| Batch submission lag | Batch delay above threshold |
| Proposer lag | Output roots not advancing |
| Explorer lag | Indexer behind chain head |
| Bridge failures | Deposit or withdrawal processing errors |
| Disk pressure | Disk usage above threshold |
| Certificate expiry | TLS certificate near expiry |

## Routing

- Critical alerts page an on-call operator.
- High alerts notify the operations channel.
- Low alerts create tickets.
- Public incidents update the status page.

${hint("info", "Every critical alert should have an owner, severity, dashboard link, and runbook link.")}

${related([
    ["Monitoring", "monitoring.md"],
    ["Incident Response", "incident-response.md"],
    ["No-Downtime Operations", "no-downtime-operations.md"]
  ])}`,

  "operators/backups.md": () => `# Backups

Backups reduce recovery time after data loss, indexer corruption, or operator error.

## Backup targets

| Target | Strategy |
|---|---|
| Node data | Snapshots and rebuild procedure |
| Explorer database | Scheduled logical and physical backups |
| Indexer database | Scheduled backups with retention |
| Configuration | Version-controlled and secret-managed |
| Deployment artifacts | Immutable archive |
| Monitoring config | Version-controlled dashboards and alerts |

## Recovery checks

- Restore backups in a non-production environment.
- Document restore time.
- Verify database consistency.
- Keep retention aligned with incident investigation needs.
- Protect backups with access controls.

${hint("warning", "A backup strategy is incomplete until restores are tested.")}

${related([
    ["Incident Response", "incident-response.md"],
    ["Run Indexing Services", "run-indexing-services.md"],
    ["Upgrade Process", "upgrade-process.md"]
  ])}`,

  "operators/incident-response.md": () => `# Incident Response

Incident response defines how operators detect, triage, communicate, and recover from production issues.

## Process

1. Detect alert or report.
2. Assign incident commander.
3. Confirm impact.
4. Mitigate user-facing symptoms.
5. Communicate on status page.
6. Preserve logs and evidence.
7. Resolve root cause.
8. Publish post-incident summary when appropriate.

## Severity

| Severity | Example |
|---|---|
| Critical | Sequencer down, bridge disabled, major RPC outage |
| High | Elevated RPC errors, batch lag, explorer unavailable |
| Medium | Degraded faucet, partial indexer delay |
| Low | Cosmetic status issue or documentation correction |

${hint("danger", "During security incidents, prioritize user safety, key containment, and clear communication over speed of feature restoration.")}

${related([
    ["Alerting", "alerting.md"],
    ["Security Model", "../security/security-model.md"],
    ["Emergency Actions", "../governance/emergency-actions.md"]
  ])}`,

  "operators/no-downtime-operations.md": () => `# No-Downtime Operations

No-downtime operations means Vellum services are designed to stay available during routine maintenance, deploys, and node failures.

## Target SLOs

| Component | Target |
|---|---|
| Public RPC uptime | 99.9% or better |
| Explorer uptime | 99.9% or better |
| Bridge frontend uptime | 99.9% or better |
| Sequencer availability | 99.9% or better |
| Batch submission monitoring | 24/7 |
| Incident response | Under 15 minutes for critical issues |

${hint("warning", "These are targets for operations planning. They are not a guarantee or SLA unless a separate public SLA is published.")}

## Practices

- Multiple RPC nodes.
- Load balancing.
- Health checks.
- Blue-green deploys.
- Sequencer monitoring.
- Batch submission monitoring.
- Bridge monitoring.
- Explorer monitoring.
- Incident alerts.
- Snapshot and backup plan.
- Rollback plan.
- Maintenance windows.
- Public status page.
- SLOs and SLAs.

## Blue-green flow

${code("text", `Current pool
   ↓ add new version
Green pool warms up
   ↓ health checks pass
Load balancer shifts traffic
   ↓ monitor
Old pool drains and remains ready for rollback`)}

${related([
    ["Monitoring", "monitoring.md"],
    ["Alerting", "alerting.md"],
    ["Upgrade Process", "upgrade-process.md"]
  ])}`,

  "operators/upgrade-process.md": () => `# Upgrade Process

Upgrades should be planned, reviewed, tested, communicated, and reversible where possible.

## Upgrade stages

1. Define scope.
2. Review protocol and infrastructure impact.
3. Test in devnet.
4. Test in public testnet when appropriate.
5. Prepare rollback plan.
6. Schedule maintenance window if needed.
7. Execute with monitoring.
8. Verify health.
9. Publish status update.

## Required artifacts

- Change description.
- Risk assessment.
- Affected contracts or services.
- Deployment commands.
- Rollback plan.
- Monitoring checklist.
- Signer approvals.

${hint("warning", "Protocol upgrades can affect trust assumptions. Governance and user communication should match the risk level.")}

${related([
    ["Upgrade Governance", "../governance/upgrade-governance.md"],
    ["Upgrade Risk", "../security/upgrade-risk.md"],
    ["Multisig Policy", "../governance/multisig-policy.md"]
  ])}`,

  "security/security-model.md": () => `# Security Model

Vellum inherits settlement from Base, and Base inherits settlement from Ethereum.

This does not mean Vellum has no risk. Users and builders should understand the assumptions around sequencing, bridging, upgrades, RPC, wallets, and smart contracts.

${hint("warning", "Do not overclaim decentralization or security. Security depends on implementation, operations, governance, and the behavior of parent layers.")}

## Assumptions

| Area | Assumption |
|---|---|
| Base settlement | Vellum posts relevant data or outputs to Base |
| Ethereum settlement | Base ultimately settles through Ethereum |
| Sequencer | Sequencer availability affects transaction inclusion |
| Bridge | Bridge contracts and message flows must be correct |
| Upgrades | Admin roles can affect protocol behavior |
| RPC | Users may trust RPC responses unless they verify |
| User safety | Users must avoid phishing and wrong-chain signing |
| Smart contracts | Application contracts can have their own bugs |
| Withdrawals | Withdrawal timing and proof assumptions matter |
| Finality | L3, Base, and Ethereum finality are distinct |

${related([
    ["Trust Assumptions", "trust-assumptions.md"],
    ["Threat Model", "threat-model.md"],
    ["Bridge Risk", "bridge-risk.md"]
  ])}`,

  "security/trust-assumptions.md": () => `# Trust Assumptions

Vellum users trust a combination of protocol contracts, operators, parent chain behavior, infrastructure, and wallets.

## Assumption table

| Assumption | Impact |
|---|---|
| Sequencer remains available | Transactions can be included normally |
| Batcher submits data to Base | Settlement progress continues |
| Proposer posts outputs | Withdrawals can be proven |
| Bridge contracts are correct | Assets move as expected |
| Admin keys are secure | Upgrades and emergency actions are controlled |
| RPC is honest and fresh | Wallets show accurate data |
| Users verify links | Phishing risk is reduced |

${hint("info", "Trust assumptions should become more explicit, not less explicit, as Vellum moves from testnet toward mainnet.")}

${related([
    ["Security Model", "security-model.md"],
    ["Roles and Permissions", "../governance/roles-and-permissions.md"],
    ["Sequencer Risk", "sequencer-risk.md"]
  ])}`,

  "security/threat-model.md": () => `# Threat Model

This page lists major threats and practical mitigations.

| Threat | Mitigation |
|---|---|
| Sequencer outage | Monitoring, failover planning, status updates |
| RPC outage | Multiple RPC nodes, load balancing, fallback providers |
| Bridge frontend compromise | Content security, signed releases, monitoring, official links |
| Incorrect token mapping | Review process, published metadata, route tests |
| Malicious contract verification | Verified explorer process and user education |
| Upgrade key compromise | Multisig, hardware wallets, timelocks where appropriate |
| Multisig compromise | Signer policy, monitoring, emergency response |
| Batch submission failure | Alerts, funded submitter, Base RPC failover |
| Explorer indexer lag | Lag alerts, reindex runbooks |
| Chain reorgs on parent layer | Confirmation policy and monitoring |
| User phishing | Official links, warnings, support process |
| DNS hijacking | DNS monitoring, registry locks, incident plan |
| RPC spoofing | Official endpoints, chain ID checks, multiple providers |

${hint("danger", "No documentation can remove the need for secure key management, verified deployment artifacts, and tested incident response.")}

${related([
    ["Security Model", "security-model.md"],
    ["Incident Response", "../operators/incident-response.md"],
    ["Emergency Actions", "../governance/emergency-actions.md"]
  ])}`,

  "security/bridge-risk.md": () => `# Bridge Risk

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

${hint("warning", "Bridge routes should not be treated as production-ready until deposits, withdrawals, finalization, token mapping, and explorer links are tested.")}

${related([
    ["Bridge Security", "../bridge/bridge-security.md"],
    ["Withdrawal Finalization", "../bridge/withdrawal-finalization.md"],
    ["Superbridge Integration", "../bridge/superbridge-integration.md"]
  ])}`,

  "security/sequencer-risk.md": () => `# Sequencer Risk

Sequencer risk comes from transaction ordering power and liveness dependency.

## Risks

| Risk | Impact |
|---|---|
| Outage | New transactions may be delayed |
| Censorship | Certain transactions may not be included promptly |
| Reordering | Transaction ordering can affect some applications |
| Misconfiguration | Blocks or service health can be affected |

## Mitigations

- Monitor block production.
- Publish incidents quickly.
- Maintain failover procedures.
- Keep operational access controlled.
- Document future decentralization plans accurately.

${hint("info", "Do not describe Vellum as fully decentralized while sequencing is operated by a limited set of operators.")}

${related([
    ["Sequencing", "../architecture/sequencing.md"],
    ["No-Downtime Operations", "../operators/no-downtime-operations.md"],
    ["Trust Assumptions", "trust-assumptions.md"]
  ])}`,

  "security/rpc-risk.md": () => `# RPC Risk

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

${hint("warning", "Applications should not treat a single RPC response as a security boundary for high-value decisions.")}

${related([
    ["RPC Endpoints", "../network/rpc-endpoints.md"],
    ["Run an RPC Node", "../operators/run-an-rpc-node.md"],
    ["Monitoring", "../operators/monitoring.md"]
  ])}`,

  "security/upgrade-risk.md": () => `# Upgrade Risk

Upgrade risk comes from the ability to change protocol contracts, bridge behavior, infrastructure configuration, or emergency controls.

## Risk areas

| Area | Risk |
|---|---|
| Contract upgrades | Logic changes can affect funds or state |
| Bridge config | Incorrect addresses can break transfers |
| Sequencer config | Liveness can be affected |
| RPC config | Users can see degraded or wrong behavior |
| Key management | Compromised keys can authorize bad changes |

## Controls

- Multisig approvals.
- Clear role ownership.
- Testnet rehearsal.
- Deployment runbooks.
- Rollback planning.
- Public communication for user-impacting changes.

${hint("warning", "Upgrade authority is a trust assumption and should be documented clearly.")}

${related([
    ["Upgrade Governance", "../governance/upgrade-governance.md"],
    ["Multisig Policy", "../governance/multisig-policy.md"],
    ["Upgrade Process", "../operators/upgrade-process.md"]
  ])}`,

  "security/audits.md": () => `# Audits

Audit status must be stated accurately.

| Item | Status |
|---|---|
| Protocol contracts | TBD |
| Bridge configuration review | TBD |
| Infrastructure review | TBD |
| Frontend review | TBD |
| Mainnet readiness review | TBD |

${hint("warning", "Do not claim Vellum has completed audits unless audit reports are published or explicitly announced.")}

## Publication requirements

When audits exist, publish:

- Auditor name.
- Scope.
- Commit hash or artifact version.
- Report date.
- Findings summary.
- Remediation status.
- Remaining known risks.

${related([
    ["Security Model", "security-model.md"],
    ["Threat Model", "threat-model.md"],
    ["Bug Bounty", "bug-bounty.md"]
  ])}`,

  "security/bug-bounty.md": () => `# Bug Bounty

Bug bounty details are TBD.

## Before launch

| Item | Status |
|---|---|
| Program provider | TBD |
| Scope | TBD |
| Severity levels | TBD |
| Reward ranges | TBD |
| Disclosure policy | TBD |
| Contact | TBD |

${hint("info", "Until a formal bounty is published, security researchers should use the official security contact when available.")}

## Suggested scope categories

- Bridge contracts.
- Protocol contracts.
- Upgrade controls.
- RPC infrastructure.
- Explorer and verification.
- Bridge frontend.
- Documentation link integrity.

${related([
    ["Audits", "audits.md"],
    ["Threat Model", "threat-model.md"],
    ["Incident Response", "../operators/incident-response.md"]
  ])}`,

  "governance/governance-overview.md": () => `# Governance Overview

Governance defines how Vellum changes are proposed, approved, executed, and communicated.

## Governance scope

| Area | Examples |
|---|---|
| Protocol upgrades | Contract implementation changes |
| Bridge configuration | Token mapping and bridge parameters |
| Emergency actions | Pauses or safety actions if applicable |
| Infrastructure policy | Public RPC, explorer, and status commitments |
| Signer policy | Multisig membership and key controls |

${hint("warning", "Governance details should be finalized before mainnet. Until then, docs should describe policies as launch preparation.")}

${related([
    ["Roles and Permissions", "roles-and-permissions.md"],
    ["Upgrade Governance", "upgrade-governance.md"],
    ["Multisig Policy", "multisig-policy.md"]
  ])}`,

  "governance/roles-and-permissions.md": () => `# Roles and Permissions

Critical roles should be documented before public launch.

| Role | Responsibility |
|---|---|
| Protocol admin | Protocol upgrades and emergency actions |
| Bridge admin | Bridge configuration and token mapping |
| Sequencer operator | Block production |
| Batch submitter | Submits transaction data or batches to Base |
| Proposer | Posts output roots |
| Guardian | Emergency pause or safety action if applicable |
| Multisig signers | Secure approval of critical changes |

${hint("warning", "The final role addresses and permissions must be published from deployment artifacts.")}

## Publication checklist

- Role name.
- Address.
- Permissions.
- Owner or multisig.
- Upgrade or pause authority.
- Rotation process.

${related([
    ["Upgrade Governance", "upgrade-governance.md"],
    ["Emergency Actions", "emergency-actions.md"],
    ["Trust Assumptions", "../security/trust-assumptions.md"]
  ])}`,

  "governance/upgrade-governance.md": () => `# Upgrade Governance

Upgrade governance controls protocol and bridge changes.

## Recommended process

1. Draft upgrade proposal.
2. Identify affected contracts and services.
3. Publish risk assessment.
4. Test on devnet.
5. Test on testnet.
6. Collect approvals.
7. Execute during a monitored window.
8. Verify and publish completion.

${hint("warning", "Users should know whether an upgrade can affect balances, withdrawals, bridge routing, or transaction inclusion.")}

${related([
    ["Upgrade Process", "../operators/upgrade-process.md"],
    ["Upgrade Risk", "../security/upgrade-risk.md"],
    ["Multisig Policy", "multisig-policy.md"]
  ])}`,

  "governance/emergency-actions.md": () => `# Emergency Actions

Emergency actions are reserved for severe incidents where user safety or protocol integrity may be at risk.

## Examples

| Action | Use case |
|---|---|
| Pause bridge frontend | Suspected frontend compromise |
| Disable a route | Incorrect token mapping |
| Rotate keys | Key compromise or signer loss |
| Freeze deployment | Failed upgrade or inconsistent artifacts |
| Publish warning | Active phishing or RPC spoofing |

${hint("danger", "Emergency authority is powerful. It must be scoped, logged, reviewed, and communicated.")}

## Response requirements

- Identify commander.
- Record timeline.
- Preserve evidence.
- Communicate user impact.
- Execute only approved action.
- Publish post-incident review when appropriate.

${related([
    ["Incident Response", "../operators/incident-response.md"],
    ["Threat Model", "../security/threat-model.md"],
    ["Roles and Permissions", "roles-and-permissions.md"]
  ])}`,

  "governance/multisig-policy.md": () => `# Multisig Policy

Multisigs should protect critical Vellum roles and upgrades.

## Policy areas

| Area | Requirement |
|---|---|
| Signer count | TBD |
| Threshold | TBD |
| Hardware wallets | Recommended |
| Key rotation | Required procedure |
| Transaction simulation | Required for critical actions |
| Emergency contact | Required |
| Public addresses | Publish before mainnet |

${hint("warning", "Do not publish mainnet governance as finalized until signer policy, role addresses, and upgrade process are confirmed.")}

## Good practices

- Separate personal wallets from signer wallets.
- Require transaction descriptions.
- Simulate before signing.
- Monitor multisig activity.
- Remove inactive signers.
- Document emergency rotations.

${related([
    ["Roles and Permissions", "roles-and-permissions.md"],
    ["Upgrade Governance", "upgrade-governance.md"],
    ["Upgrade Risk", "../security/upgrade-risk.md"]
  ])}`,

  "roadmap/testnet.md": () => `# Testnet

The Vellum testnet roadmap prepares the network, bridge, explorer, and developer experience before mainnet.

## Steps

| Step | Status |
|---|---|
| Internal devnet | In progress |
| Public testnet | TBD |
| RPC testing | TBD |
| Bridge testing | TBD |
| Superbridge route testing | TBD |
| Explorer testing | TBD |
| Contract deployment testing | TBD |
| Load testing | TBD |
| Security review | TBD |
| Mainnet candidate | TBD |

${hint("info", "Testnet may reset. Any reset policy should be published before users rely on testnet state.")}

${related([
    ["Network Information", "../network/network-information.md"],
    ["Testnet Faucets", "../network/faucets.md"],
    ["Mainnet Roadmap", "mainnet.md"]
  ])}`,

  "roadmap/mainnet.md": () => `# Mainnet

The mainnet roadmap should only move forward after testnet launch criteria are complete.

## Steps

| Step | Status |
|---|---|
| Final chain ID | TBD |
| Final bridge contracts | TBD |
| Final RPC endpoints | TBD |
| Explorer launch | TBD |
| Superbridge integration | TBD |
| Mainnet genesis | TBD |
| Public bridge opening | TBD |
| Ecosystem onboarding | TBD |
| Monitoring and incident response | TBD |
| Progressive decentralization | Future goal |

${hint("warning", "Do not describe Vellum mainnet as live until final values, contracts, RPC, explorer, bridge, and status systems are published.")}

${related([
    ["Testnet Roadmap", "testnet.md"],
    ["Security Model", "../security/security-model.md"],
    ["Governance Overview", "../governance/governance-overview.md"]
  ])}`,

  "roadmap/future-work.md": () => `# Future Work

Future work should be described carefully and separated from launch requirements.

## Areas

| Area | Direction |
|---|---|
| Progressive decentralization | Broader operator and governance model over time |
| Bridge UX | More complete status and recovery flows |
| Developer tooling | More templates, SDK helpers, and examples |
| Indexing | Better app data APIs |
| Observability | More public metrics and dashboards |
| Ecosystem onboarding | Guides for dapps, wallets, and infrastructure providers |

${hint("info", "Future work is not a promise of delivery date. Public roadmap items should be updated as priorities change.")}

${related([
    ["Mainnet Roadmap", "mainnet.md"],
    ["Design Principles", "../introduction/design-principles.md"],
    ["FAQ", "../reference/faq.md"]
  ])}`,

  "reference/glossary.md": () => `# Glossary

| Term | Meaning |
|---|---|
| Base | Ethereum L2 used as Vellum's settlement layer |
| Batch | Data or commitment submitted from Vellum to Base |
| Batcher | Service that submits batches to Base |
| Bridge | Contracts and UI used to move assets between Base and Vellum |
| Challenge period | Waiting period before some withdrawals can finalize |
| EVM | Ethereum Virtual Machine |
| Explorer | Service for viewing blocks, transactions, contracts, and logs |
| Finality | Confidence level that a transaction or state will not be reverted |
| L3 | Rollup layer above an L2 |
| Native gas | Token used to pay transaction fees |
| Output root | Commitment to L3 state posted for withdrawal flows |
| Proposer | Service that posts output roots |
| RPC | JSON-RPC interface for wallets and applications |
| Sequencer | Service that orders transactions and produces blocks |
| Superbridge | Bridge UI pattern requiring chain metadata and bridge configuration |
| Vellum | Base-settled Ethereum L3 using ETH for gas |

${related([
    ["FAQ", "faq.md"],
    ["Architecture Overview", "../introduction/architecture-overview.md"],
    ["Network Information", "../network/network-information.md"]
  ])}`,

  "reference/faq.md": () => `# FAQ

## What is Vellum?

Vellum is a Base-settled Ethereum L3 rollup designed for EVM execution, ETH gas, and Superbridge-compatible bridging.

## Is Vellum an L2 or L3?

Vellum is an L3. It settles to Base, which is an Ethereum L2.

## What does Vellum settle to?

Vellum settles to Base.

## What is the native gas token?

ETH is the native gas token.

## Does Vellum use ETH for gas?

Yes. Vellum uses ETH for gas.

## Can I deploy Solidity contracts?

Yes. Vellum is EVM-compatible and supports Solidity contract deployment.

## Can I use MetaMask?

Yes, once final network values are published.

## Can I bridge from Base?

Yes, Vellum is designed for bridging from Base. The public bridge route is TBD until launch.

## Is Vellum compatible with Superbridge?

Vellum is designed for Superbridge-compatible bridging. Live integration status is TBD.

## How do withdrawals work?

Withdrawals start on Vellum, are proven against output data, then finalize on Base after the required period.

## How long do withdrawals take?

The final timing is TBD and must be published before public bridge opening.

## Can I bridge ERC-20 tokens?

Supported ERC-20 routes can be added through canonical token mapping. Final supported tokens are TBD.

## Is Vellum EVM compatible?

Yes. Vellum targets normal EVM contract and wallet behavior.

## Does Vellum have an explorer?

Explorer URL is TBD and must be published before public launch.

## What RPC should I use?

Use only official Vellum RPC endpoints. Public RPC URL is TBD.

## Can I run a node?

Operator documentation describes node architecture and RPC node requirements. Public node release details are TBD.

## What happens if the sequencer goes down?

New transaction inclusion can be delayed. Operators should publish status updates and follow incident runbooks.

## What happens if the RPC goes down?

Wallets and dapps may fail to read data or submit transactions through that endpoint. Use official status updates and fallback endpoints when published.

## Is Vellum decentralized?

Do not assume full decentralization. Decentralization should be described according to the current operator and governance model.

## Is Vellum audited?

Audit status is TBD. Do not assume audits are complete until reports are published.

## How do I verify contracts?

Use the Vellum explorer verification flow when the explorer and API are live.

## How do I add Vellum to my wallet?

Use the official network fields from the Wallet Setup page once final values are published.

## Can developers build dapps on Vellum?

Yes. Developers can use standard EVM tools such as Hardhat, Foundry, viem, ethers.js, Remix, and thirdweb.

## What makes Vellum different?

Vellum focuses on Base settlement, ETH gas, EVM compatibility, Superbridge-compatible bridging, and production operations.

## Where can I get support?

Official support links are TBD. Use only links published in official Vellum channels.

${related([
    ["Glossary", "glossary.md"],
    ["Links", "links.md"],
    ["Security Model", "../security/security-model.md"]
  ])}`,

  "reference/links.md": () => `# Links

Official links are placeholders until launch.

| Resource | URL |
|---|---|
| Website | TBD |
| Docs | TBD |
| GitHub | TBD |
| Status | TBD |
| Explorer | TBD |
| Bridge | TBD |
| RPC | TBD |
| Support | TBD |
| Security contact | TBD |

${hint("warning", "Users should verify official links before bridging, signing transactions, or importing tokens.")}

${related([
    ["Network Information", "../network/network-information.md"],
    ["Bridge Security", "../bridge/bridge-security.md"],
    ["FAQ", "faq.md"]
  ])}`,

  "reference/changelog.md": () => `# Changelog

## Unreleased

Initial GitBook documentation set for Vellum.

### Added

- Introduction.
- Network setup.
- Architecture.
- Bridge flows.
- Developer guides.
- User guides.
- Operator runbooks.
- Security model.
- Governance pages.
- Roadmap.
- Reference.

${hint("info", "Update this page for every public documentation release.")}

${related([
    ["Roadmap", "../roadmap/testnet.md"],
    ["Links", "links.md"],
    ["FAQ", "faq.md"]
  ])}`
};

function contentFor(path) {
  if (custom[path]) return custom[path]();
  const page = pageIndex.get(path);
  if (!page) throw new Error(`Missing page data for ${path}`);
  return standardPage(page);
}

write(`${docsRoot}/README.md`, contentFor("README.md"));
write(`${docsRoot}/SUMMARY.md`, contentFor("SUMMARY.md"));

for (const group of groups) {
  for (const [file] of group.pages) {
    const path = `${group.dir}/${file}`;
    write(`${docsRoot}/${path}`, contentFor(path));
  }
}

console.log(`Generated ${2 + groups.reduce((sum, group) => sum + group.pages.length, 0)} GitBook Markdown files.`);
