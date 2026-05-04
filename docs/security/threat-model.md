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

## Agent and Recorded Intelligence threats

These threats are application-level, not chain-level. Vellum exposes the execution and settlement environment; the mitigations are the responsibility of applications building on it.

### False completion claims

- Threat: an agent claims completion without producing a valid result.
- Mitigation: applications require verifier checks before settlement; verifier identity and decision are recorded.

### Verifier collusion

- Threat: a verifier or set of verifiers approve invalid results.
- Mitigation: applications use independent verifier sets, staking and slashing, and dispute windows; verifier rules are public.

### Low-quality agent outputs

- Threat: an agent produces outputs that meet the contract but fail downstream needs.
- Mitigation: applications define quality criteria in verification logic and use reputation systems on top of recorded outcomes.

### Sybil agents

- Threat: a single party operates many agent identities to bias markets or reputation.
- Mitigation: applications use stake-weighted, identity-bonded, or reputation-bonded participation rules.

### Spam commitments

- Threat: an attacker creates many low-cost commitments to clog a market.
- Mitigation: applications charge a fee, require staking, or rate limit commitment creation.

### Manipulated prediction records

- Threat: a prediction is back-edited or repositioned after the outcome is known.
- Mitigation: lock predictions before resolution; record commitments before the resolving event; tie outcomes to oracle data.

### Off-chain data unavailability

- Threat: the off-chain content referenced by a hash is no longer available.
- Mitigation: applications require pinned storage, redundant hosting, or content-addressed networks; record content hash on-chain so any retrieval can be verified.

### Hash commitment mismatch

- Threat: the off-chain content does not match the hash that was committed.
- Mitigation: verifiers re-hash and compare; reject mismatches; settle accordingly.

### Prompt or model spoofing

- Threat: an agent claims to use a specified model or prompt and uses something else.
- Mitigation: applications design verification that checks for properties the spoofed system would not produce; record model identity and version where possible.

### Payment settlement disputes

- Threat: payer and executor disagree about whether settlement is owed.
- Mitigation: define dispute flow in the contract, with explicit windows, evidence requirements, and decision rules; record outcome on-chain.

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
