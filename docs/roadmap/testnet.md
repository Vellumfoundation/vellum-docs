# Testnet

This page describes Vellum's testnet plan and the readiness milestones that lead to a public testnet.

## Stages

```text
Internal devnet
       ↓
Public testnet
       ↓
Mainnet candidate
```

## Steps

### 1. Internal devnet

- Bring up sequencer, batch submitter, output proposer, and bridge contracts in a closed environment.
- Validate end-to-end deposit and withdrawal flows.
- Validate basic operational tooling.

### 2. Public testnet

- Deploy bridge contracts on Base testnet and Vellum testnet.
- Publish RPC, explorer, and bridge URLs.
- Open faucet access.
- Allow external developers to connect.

### 3. RPC testing

- Validate public RPC under expected load.
- Confirm rate limit behavior.
- Test load balancer failover.

### 4. Bridge testing

- Test ETH deposits and withdrawals.
- Test ERC-20 deposits and withdrawals.
- Confirm finalization window behavior.
- Test edge cases: insufficient balance, wrong chain, expired approvals.

### 5. Superbridge route testing

- Verify chain metadata is accepted by Superbridge-style integrations.
- Verify deposit and withdrawal routes end-to-end.

### 6. Explorer testing

- Validate indexing throughput.
- Validate search, contract pages, and API.
- Confirm verification flows work for typical contracts.

### 7. Contract deployment testing

- Deploy reference contracts.
- Confirm deployment, verification, and interaction work via Hardhat, Foundry, ethers, viem, thirdweb, and Remix.

### 8. Load testing

- Generate synthetic load against RPC.
- Measure sequencer behavior under transaction bursts.
- Identify and fix bottlenecks.

### 9. Security review

- Audit the bridge contracts and predeploys.
- Review node and rollup software.
- Run a bug bounty preview.

### 10. Mainnet candidate

- Stabilize the testnet for an extended period.
- Resolve all P0/P1 issues.
- Run final dry-run upgrades.
- Confirm operator readiness for mainnet.

## Readiness checklist

- [ ] Internal devnet stable
- [ ] Public testnet deployed
- [ ] Bridge contracts deployed on Base testnet and Vellum testnet
- [ ] RPC, explorer, bridge URLs published
- [ ] Faucet live
- [ ] Deposit and withdrawal flows tested
- [ ] Superbridge-compatible route validated
- [ ] Explorer and indexers stable
- [ ] Contract deployment tooling verified
- [ ] Load testing completed
- [ ] Security review completed
- [ ] Mainnet candidate criteria met

## Related pages

- [Mainnet](mainnet.md)
- [Future Work](future-work.md)
- [Faucets](../network/faucets.md)
- [Superbridge Compatibility](../architecture/superbridge-compatibility.md)
