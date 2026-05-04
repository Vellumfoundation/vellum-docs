# Predeploys

Predeploys are system contracts deployed at fixed addresses on Vellum. They handle bridge messaging, fee accounting, and other system functions. Application contracts should be aware of these addresses but generally do not call them directly except through standard interfaces.

## Categories

| Category | Examples |
|---|---|
| Bridge messaging | Cross-domain messenger, standard bridge |
| Fee accounting | Sequencer fee vault, base fee vault, L1 fee vault |
| ETH wrappers and helpers | Standard wrappers used by the bridge model |
| System utilities | Information about chain context |

Specific predeploy addresses are placeholders until launch. They will be published in [Contract Addresses](contract-addresses.md).

## Why fixed addresses

Predeploys live at known addresses so that:

- Tooling can rely on consistent locations.
- Dapps can integrate with messaging and bridge contracts without configuration.
- Audits and security reviews have stable targets.

## Touching predeploys

In most cases application code does not call predeploys directly. Common interaction patterns:

- Bridges interact with the standard bridge and cross-domain messenger predeploys.
- Wallets interact with WETH if a wrapped ETH variant is exposed for ERC-20 compatibility.
- System functions read context from a system info predeploy.

## Upgrade behavior

Predeploys may be upgraded as part of system upgrades. Upgrade history and procedures are documented in [Upgrade Process](../operators/upgrade-process.md) and [Upgrade Governance](../governance/upgrade-governance.md).

## Common predeploy interactions

| Interaction | Predeploy |
|---|---|
| Send a cross-domain message Vellum to Base | L2 cross-domain messenger |
| Receive a cross-domain message from Base | L2 cross-domain messenger |
| Bridge ERC-20 from Vellum to Base | L2 standard bridge |
| Wrap or unwrap ETH | WETH wrapper, if exposed |

## Best practices

- Treat predeploy addresses as configuration. Look them up from this documentation rather than hardcoding from memory.
- When interacting via libraries, use the appropriate ABI for the predeploy version.
- Subscribe to the [Changelog](../reference/changelog.md) for predeploy-related changes.

## Related pages

- [Contract Addresses](contract-addresses.md)
- [Bridge Architecture](../architecture/bridge-architecture.md)
- [Upgrade Process](../operators/upgrade-process.md)
