![Forge CLI Handbook](https://www.arcblock.io/.netlify/functions/badge/?text=Forge%20CLI%20Handbook)

A book that helps you to become a power user of forge-cli

> The book structure is defined in the following `Table of Contents` section and generated with script `tools/skeleton.js`

## Getting Started

```shell
git clone git@github.com:ArcBlock/forge-cli-handbook.git
cd forge-cli-handbook
make init
```

Then create a config file `.env` in repo root directory with the following content:

```
GATSBY_ALGOLIA_APP_ID="FU81LCBN51"
GATSBY_ALGOLIA_ADMIN_KEY="this key is secret"
GATSBY_ALGOLIA_SEARCH_KEY="2e4d21878c80877e17a6f9c80722eaeb"
GATSBY_ALGOLIA_INDEX_NAME="forge-cli-handbook"
```

Then compile and server docs from local:

```
make run
```

## Table of Contents

- [Chapter 1: Introduction](./src/1-introduction)
  - [What is Forge CLI?](./src/1-introduction/what-is-forge-cli)
  - [Why Forge CLI?](./src/1-introduction/why-forge-cli)
  - [How to get Forge CLI?](./src/1-introduction/install-forge-cli)
  - [Getting Started](./src/1-introduction/getting-started)
  - [Initial Setup](./src/1-introduction/initial-setup)
- [Chapter 2: Chain/Node Management](./src/2-manage-chain-node)
  - [Create/Config a new Chain](./src/2-manage-chain-node/create-config-chain)
  - [Start/Stop the Chain](./src/2-manage-chain-node/start-stop-chain)
  - [Inspect Chain Status](./src/2-manage-chain-node/inspect-chain-status)
  - [View Chain Log](./src/2-manage-chain-node/view-chain-log)
  - [Upgrade a Chain](./src/2-manage-chain-node/upgrade-chain)
  - [Reset/Remove a Chain](./src/2-manage-chain-node/reset-remove-chain)
- [Chapter 3: Read/Write on Chain Data](./src/3-read-write-on-chain-data)
  - [Inspect Transactions](./src/3-read-write-on-chain-data/inspect-transactions)
  - [Inspect Blocks](./src/3-read-write-on-chain-data/inspect-blocks)
  - [Inspect Accounts](./src/3-read-write-on-chain-data/inspect-accounts)
  - [Inspect Assets](./src/3-read-write-on-chain-data/inspect-assets)
  - [Inspect Contracts](./src/3-read-write-on-chain-data/inspect-contracts)
- [Chapter 4: Forge Release Management](./src/4-manage-forge-release)
  - [Find local/remote releases](./src/4-manage-forge-release/find-release)
  - [Install/Download a release](./src/4-manage-forge-release/download-install-release)
- [Chapter 5: Manipulate Wallets/Accounts](./src/5-manipulate-wallets-accounts)
  - [Creating local wallets](./src/5-manipulate-wallets-accounts/local-wallets)
  - [Working with on chain accounts](./src/5-manipulate-wallets-accounts/on-chain-accounts)
- [Chapter 6: Working with Contracts](./src/6-working-with-contracts)
  - [Compile/deploy a Contract](./src/6-working-with-contracts/compile-deploy-contract)
  - [Activate/deactivate a Contract](./src/6-working-with-contracts/activate-deactivate-contract)
  - [Creating your own Contract](./src/6-working-with-contracts/create-own-contract)
- [Chapter 7: Working with Blocklets](./src/7-working-with-blocklets)
  - [What are Blocklets](./src/7-working-with-blocklets/what-are-blocklets)
  - [Using dApp Blocklets](./src/7-working-with-blocklets/dapp-blocklets)
  - [Using Starter Blocklets](./src/7-working-with-blocklets/starter-blocklets)
  - [Using Contract Blocklets](./src/7-working-with-blocklets/contract-blocklets)
  - [Create and publish your own Blocklet](./src/7-working-with-blocklets/creating-blocklet)
- [Chapter 8: Explore Other Tooling](./src/8-explorer-other-tooling)
  - [Forge Web](./src/8-explorer-other-tooling/forge-web)
  - [Forge Simulator](./src/8-explorer-other-tooling/simulator)
  - [dApps Workshop](./src/8-explorer-other-tooling/dapp-workshop)
  - [Forge Swap](./src/8-explorer-other-tooling/forge-swap-service)
- [Chapter 9: Customization](./src/9-customization)
  - [Global Config](./src/9-customization/global-config)
  - [Multi Chain](./src/9-customization/multi-chain)
- [Chapter 10: Troubleshooting](./src/10-troubleshooting)
- [Chapter 11: Use Forge CLI in production](./src/11-forge-cli-in-production)
  - [Enable Forge Starter](./src/11-forge-cli-in-production/use-forge-starter)
  - [Join an existing network](./src/11-forge-cli-in-production/join-existing-network)
  - [Deploy a multi node network](./src/11-forge-cli-in-production/deploy-multi-node-network)
  - [Deploy a multi-party-multi-node network](./src/11-forge-cli-in-production/deploy-multi-party-network)
  - [Deploy a network in intranet](./src/11-forge-cli-in-production/deploy-in-intranet)
  - [Recover a crashed node](./src/11-forge-cli-in-production/recover-from-crash)
  - [Add or remove validator](./src/11-forge-cli-in-production/add-remove-validator)
