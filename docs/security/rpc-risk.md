# RPC Risk

Public RPC endpoints are the most-used surface of Vellum. This page covers the risks associated with relying on RPC.

## What an RPC endpoint can do

- Serve transaction submission.
- Serve chain state reads.
- Serve event subscriptions.

## What a malicious or compromised RPC can do

- Lie about state.
- Withhold transactions.
- Reorder or drop transactions before forwarding.
- Track requests by IP and address.

This is why the trustworthy source of state is the chain itself: state derived from posted Vellum data on Base, verified by replay, is canonical. RPC is a convenience layer on top.

## Mitigations for users

- Use only the official RPC URL listed in [RPC Endpoints](../network/rpc-endpoints.md).
- Cross-check important reads against the [block explorer](../network/block-explorer.md).
- For high-value transactions, confirm receipts on the explorer, not only in the wallet.

## Mitigations for applications

- Pin to official RPC URLs.
- Cache reads where reasonable.
- Implement client-side retries with backoff and a fallback path.
- Consider running your own node for critical workloads. See [Run an RPC Node](../operators/run-an-rpc-node.md).

## Mitigations for operators

- Run multiple RPC instances behind a load balancer.
- Apply rate limits and abuse protections.
- Monitor `rpc_request_count`, `rpc_error_rate`, and `rpc_latency_p95`.
- Have a documented incident response runbook. See [Incident Response](../operators/incident-response.md).

## Privacy

- RPC operators can see request patterns by IP.
- Address-level activity is public on chain regardless of RPC choice.
- For privacy-sensitive workflows, expect minimal privacy from RPC.

## DNS and TLS

- Use DNSSEC where possible at the domain level.
- TLS certificates should be monitored for unexpected reissuance.
- Operators should track certificate expiry.

## Related pages

- [RPC Endpoints](../network/rpc-endpoints.md)
- [Run an RPC Node](../operators/run-an-rpc-node.md)
- [Threat Model](threat-model.md)
- [Trust Assumptions](trust-assumptions.md)
