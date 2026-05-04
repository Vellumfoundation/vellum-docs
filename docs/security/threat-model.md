# Threat Model

This page lists threats Vellum considers in its operational and security planning, with the mitigations applied.

## Threats and mitigations

### Sequencer outage

- Threat: sequencer becomes unavailable; new transactions cannot be sequenced.
- Mitigation: monitoring with paging alerts; documented restart and failover procedure; clear public communication on the [status page](../network/network-status.md).

### RPC outage

- Threat: public RPC becomes unavailable; users and dapps cannot read or submit.
- Mitigation: multiple RPC instances behind a load balancer; health checks; runbooks.

### Bridge frontend compromise

- Threat: an attacker hijacks the bridge frontend or its DNS.
- Mitigation: only official URLs documented here; separate the bridge UI from sensitive infrastructure; integrity checks on deployed assets; user education.

### Incorrect token mapping

- Threat: a non-canonical token is treated as canonical, leading to user loss.
- Mitigation: governance-controlled token list; verification before adding to the list; user warnings about canonical tokens.

### Malicious contract verification

- Threat: an attacker tricks the explorer into displaying false source for a contract.
- Mitigation: verifier matches deployed bytecode against published source; explorer flags partial verification.

### Upgrade key compromise

- Threat: an attacker gains access to upgrade authority.
- Mitigation: multisig with documented signer policy; time locks on critical changes; emergency revocation procedure.

### Multisig compromise

- Threat: signer keys are compromised.
- Mitigation: hardware-backed signing; signer rotation; geographic and organizational distribution; immediate revocation procedures.

### Batch submission failure

- Threat: batch submitter goes offline; settlement progress halts.
- Mitigation: monitoring of `batch_submission_lag`; standby submitter; runbook for restart and recovery.

### Explorer indexer lag

- Threat: explorer falls behind the chain head; user UX suffers and support load grows.
- Mitigation: monitoring of `explorer_indexer_lag`; redundant indexers; status page disclosure.

### Chain reorgs on the parent layer

- Threat: a Base reorg affects Vellum's posted data.
- Mitigation: design accommodates Base reorg behavior; finality model documented; conservative confirmation policy for high-value flows.

### User phishing

- Threat: phishing sites imitate Vellum surfaces.
- Mitigation: official URLs published in this documentation; clear user guidance; reporting channels.

### DNS hijacking

- Threat: an attacker takes over DNS for Vellum surfaces.
- Mitigation: registry-level protections; out-of-band integrity checks; operator runbooks.

### RPC spoofing

- Threat: a malicious or compromised RPC reports false state to wallets.
- Mitigation: official RPC URLs; explorer-based cross-checks; user education.

## What is not in scope

- Smart contract bugs in user-deployed contracts. These are a real risk, but Vellum is not the author of those contracts and cannot fix them. Audits and bug bounties for application contracts are the responsibility of their authors.
- User key management. Vellum cannot recover lost user keys.

## Living document

This threat model evolves as the system grows. New threats and mitigations are added as they are identified.

## Related pages

- [Security Model](security-model.md)
- [Trust Assumptions](trust-assumptions.md)
- [Audits](audits.md)
- [Bug Bounty](bug-bounty.md)
- [Incident Response](../operators/incident-response.md)
