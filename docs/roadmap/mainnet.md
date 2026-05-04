# Mainnet

This page describes the steps to bring Vellum to mainnet.

## Sequence

```text
Final chain ID
   ↓
Final bridge contracts
   ↓
Final RPC endpoints
   ↓
Explorer launch
   ↓
Superbridge integration
   ↓
Mainnet genesis
   ↓
Public bridge opening
   ↓
Ecosystem onboarding
   ↓
Monitoring and incident response
   ↓
Progressive decentralization
```

## Steps

### 1. Final chain ID

- Reserve and finalize Vellum's mainnet chain ID.
- Publish in [Network Information](../network/network-information.md).

### 2. Final bridge contracts

- Deploy audited bridge contracts on Base and Vellum.
- Publish addresses in [Contract Addresses](../developers/contract-addresses.md).

### 3. Final RPC endpoints

- Stand up production RPC infrastructure with HA design.
- Publish RPC URLs in [RPC Endpoints](../network/rpc-endpoints.md).

### 4. Explorer launch

- Deploy and validate the block explorer for mainnet.
- Publish the URL.

### 5. Superbridge integration

- Submit chain metadata to Superbridge-style bridge UIs.
- Validate routes end-to-end.

### 6. Mainnet genesis

- Produce the genesis block.
- Verify chain progresses cleanly.
- Validate batch submission and output proposing.

### 7. Public bridge opening

- Open deposits and withdrawals.
- Communicate clearly that withdrawals are subject to the finalization window.

### 8. Ecosystem onboarding

- Coordinate with applications planning to deploy.
- Provide developer and integrator support.

### 9. Monitoring and incident response

- Confirm 24/7 operational coverage.
- Validate alerting rules in production.
- Stand up the public status page.

### 10. Progressive decentralization

- Identify which roles can be progressively decentralized.
- Sequence the changes with public milestones.
- Communicate changes via the [Changelog](../reference/changelog.md).

## Readiness checklist

- [ ] Chain ID finalized
- [ ] Bridge contracts deployed on Base and Vellum
- [ ] Audits completed for in-scope components
- [ ] RPC endpoints public and stable
- [ ] Explorer live
- [ ] Bridge UI live
- [ ] Status page live
- [ ] Multisig configured and signers in place
- [ ] Documentation published with all placeholders resolved
- [ ] Incident response on-call active

## Related pages

- [Testnet](testnet.md)
- [Future Work](future-work.md)
- [Superbridge Compatibility](../architecture/superbridge-compatibility.md)
- [No-Downtime Operations](../operators/no-downtime-operations.md)
