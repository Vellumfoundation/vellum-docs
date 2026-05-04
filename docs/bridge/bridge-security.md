# Bridge Security

The bridge is the highest-value surface in any rollup. Vellum's bridge follows the OP Stack native bridge model and inherits its security properties from data availability on Base, output proposals, and a finalization window.

## Trust assumptions

| Assumption | Source |
|---|---|
| Vellum data is posted to Base and remains retrievable | Data availability of Base |
| Output roots posted to Base reflect Vellum state | Output proposer behavior, verifiable by replay |
| The finalization window is enforced | Bridge contracts on Base |
| Bridge contracts are deployed and configured correctly | Operational deployment |
| Token mappings reflect canonical assets | Bridge configuration controlled by governance |

See [Trust Assumptions](../security/trust-assumptions.md).

## What the bridge protects against

- Users claiming withdrawals not backed by Vellum state.
- Output roots being treated as final before they could be challenged.
- Non-canonical token contracts being treated as canonical assets.

## What users must protect against

- Phishing bridge UIs.
- Wrong recipient addresses.
- Approving unlimited token allowances unnecessarily.
- Bridging non-canonical or counterfeit tokens.

{% hint style="danger" %}
The bridge contract cannot reverse a deposit sent to the wrong address or a wrong token bridged in error. Verify before signing.
{% endhint %}

## What operators must protect against

- Misconfiguration of bridge contracts.
- Incorrect token mappings.
- Output proposer or batch submitter failures that delay or break finalization.
- Compromise of any privileged role.

See [Roles and Permissions](../governance/roles-and-permissions.md) and [Threat Model](../security/threat-model.md).

## Practical user guidance

| Practice | Why |
|---|---|
| Use only the official bridge URL | Phishing UIs can drain wallets |
| Check the destination chain in your wallet | Wrong chain can break bridging |
| Verify token contract addresses | Counterfeit tokens are common |
| Bridge a small test amount first | Catches configuration mistakes cheaply |
| Save transaction hashes | Useful if support is needed |

## Practical operator guidance

| Practice | Why |
|---|---|
| Monitor batch submission lag | Affects withdrawal eligibility |
| Monitor output proposer | Affects finalization |
| Monitor bridge frontend uptime | Users rely on it |
| Track token list updates | Errors affect user assets |
| Run incident response drills | Real incidents are not the time to learn |

## Withdrawal correctness depends on the full chain of components

A claimed withdrawal on Base is only as correct as:

- The Vellum state it references.
- The batch data backing that state.
- The output root covering that state.
- The finalization window being respected.

If any of these is broken, withdrawals based on the broken portion are not safe.

## Related pages

- [Bridge Risk](../security/bridge-risk.md)
- [Withdrawal Finalization](withdrawal-finalization.md)
- [Threat Model](../security/threat-model.md)
- [Audits](../security/audits.md)
