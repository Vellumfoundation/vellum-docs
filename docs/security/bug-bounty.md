# Bug Bounty

The Vellum bug bounty rewards responsible disclosure of vulnerabilities in Vellum's contracts and critical infrastructure.

## Status

| Field | Value |
|---|---|
| Program status | Pending public launch |
| Submission portal | TBD |
| Contact (interim) | TBD |

{% hint style="info" %}
Until the public bug bounty program is live, please report serious findings through the interim contact channel above. Do not publicly disclose vulnerabilities before they are remediated.
{% endhint %}

## In scope

- Bridge contracts on Base (Vellum-controlled).
- Bridge contracts on Vellum.
- Predeploys.
- Node and rollup software shipped by Vellum.
- Public RPC, explorer, and bridge frontend operated by Vellum.

## Out of scope

- Application contracts deployed on Vellum by third parties.
- Third-party wallets.
- Issues reported through other parties' bug bounty programs.
- Vulnerabilities in Base or Ethereum L1.
- Social engineering of users not involving Vellum infrastructure.

## Severity

| Severity | Examples |
|---|---|
| Critical | Theft of bridge funds; unauthorized state changes; bypass of finalization |
| High | Funds at risk under specific conditions; denial of service to critical components |
| Medium | Significant misbehavior without direct fund loss |
| Low | Minor information leaks; non-impact bugs |

## Reporting

A good report includes:

- Affected component and version.
- Step-by-step reproduction.
- Expected vs actual behavior.
- Impact analysis.
- Suggested remediation, if any.

## Responsible disclosure

- Do not exploit the bug beyond what is needed to demonstrate it.
- Do not access or modify other users' data.
- Do not publicly disclose before remediation.
- Coordinate timelines with the Vellum team.

## Rewards

Reward amounts depend on severity and impact. They will be published with the program when it goes live.

## Safe harbor

Researchers acting in good faith under the program's rules are protected from legal action by Vellum. Researchers acting outside the rules (such as disrupting service or exfiltrating user data) are not.

## Related pages

- [Audits](audits.md)
- [Security Model](security-model.md)
- [Threat Model](threat-model.md)
