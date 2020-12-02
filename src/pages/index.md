---
title: Forge CLI User Manual
description: >-
  What can you learn from this manual? How is the content organized? What are
  the requirements?
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
requireLogin: false
tags:
  - forge
---

I'm glad you can read this manual and start an interesting journey of exploration and construction in the world of blockchain!

I believe you should already know [ArcBlock](https://arcblockio.cn) What kind of company it is: We firmly believe that blockchain will bring huge changes to human organization and collaboration, and we are committed to developing easy-to-use, flexible and scalable dApp development frameworks and tools. We have released so far [Forge framework](https://arcblockio.cn/zh/forge-sdk) And a series of tools around the Forge framework, and the Forge CLI is the best way for developers to obtain and use these tools: just install a command and get the entire blockchain toolbox.

## What can you learn

I believe that you are already struggling to develop your own blockchain application, but terms that look so inscrutable such as asymmetric encryption, block height, consensus algorithm, etc. may make you discourage again, and the tedious and tedious development environment configuration may also let you You run into walls everywhere.

The Forge framework encapsulates the network layer, consensus layer, data storage layer, and transaction processing layer that need to be considered for the development of blockchain applications. Developers only need to focus on the business logic that needs to be implemented. Forge CLI is more Furthermore, it allows non-developers to quickly create and launch their own chains and applications.

If you are a developer, you can learn from this manual:

- How to use the Forge CLI to quickly launch the dApp environment
- How to deploy a production environment with the Forge CLI
- How to use the Forge CLI for chain operation and maintenance, such as upgrading
- How to quickly read data from or write data to the chain
- How to deploy contracts on the chain, how to manage contracts
- How to use Forge CLI to quickly reuse cornerstone programs

If you are not a developer, you can also start your own nodes to participate in the ArcBlock ecosystem by simple commands.

## What are you going to prepare?

- MacOS, CentOS, Ubuntu and other Linux operating systems or cloud hosts can be used
- Installs useful command line tools, such as those on Mac [iTerm](https://www.iterm2.com/index.html), Or the terminal program that comes with the Linux system
- installed [Node.js](https://nodejs.org/) Operating environment, if it does n’t matter, we are in [How to get the Forge CLI](./1-introduction/install-forge-cli) There are detailed explanations
- Some free time and curiosity about the development of blockchain applications, the mastery and proficiency of any new skills need to be dedicated

## Terminology used in this manual

> The following terms can also be understood as abbreviations, or abbreviations.

- Unless otherwise specified, CLI means Forge CLI
- Unless otherwise specified, PK refers to the public key
- Unless otherwise specified, SK means security key

## Content organization

The contents of this manual are organized according to the above large function blocks as follows:

- [Meet Forge CLI](./1-introduction)
  - [What is the Forge CLI?](./1-introduction/what-is-forge-cli)
  - [Why develop Forge CLI?](./1-introduction/why-forge-cli)
  - [How do I get the Forge CLI?](./1-introduction/install-forge-cli)
  - [One-click issuing chain and one-click coin](./1-introduction/getting-started)
  - [Necessary initial configuration](./1-introduction/initial-setup)
- [Release management](./4-manage-forge-release)
  - [Find Forge Distributions](./4-manage-forge-release/find-release)
  - [Get Forge Release](./4-manage-forge-release/download-install-release)
- [Management chain and nodes](./2-manage-chain-node)
  - [Create and configure chain nodes](./2-manage-chain-node/create-config-chain)
  - [Starting and stopping chain nodes](./2-manage-chain-node/start-stop-chain)
  - [View chain node status](./2-manage-chain-node/inspect-chain-status)
  - [Viewing the logs of a node](./2-manage-chain-node/view-chain-log)
  - [Soft upgrade of the chain](./2-manage-chain-node/upgrade-chain)
  - [Reset and delete of the chain](./2-manage-chain-node/reset-remove-chain)
- [Handle wallet](./5-manipulate-wallets-accounts)
  - [Generate and view local wallets](./5-manipulate-wallets-accounts/local-wallets)
- [Read and write data on the chain](./3-read-write-on-chain-data)
  - [Reading transaction data](./3-read-write-on-chain-data/inspect-transactions)
  - [Read block data](./3-read-write-on-chain-data/inspect-blocks)
  - [Read account status](./3-read-write-on-chain-data/inspect-accounts)
  - [Read asset data](./3-read-write-on-chain-data/inspect-assets)
  - [Read contract data](./3-read-write-on-chain-data/inspect-contracts)
- [Using smart contracts](./6-working-with-contracts)
  - [Compile and deploy smart contracts](./6-working-with-contracts/compile-deploy-contract)
  - [Enable and disable smart contracts](./6-working-with-contracts/activate-deactivate-contract)
  - [Create your own smart contract](./6-working-with-contracts/create-own-contract)
- [Use Blocklet](./7-working-with-blocklets)
  - [What exactly is a blocklet](./7-working-with-blocklets/what-are-blocklets)
  - [Use dApp Blocklet](./7-working-with-blocklets/dapp-blocklets)
  - [Use Starter Blocklet](./7-working-with-blocklets/starter-blocklets)
  - [Use contract blocklet](./7-working-with-blocklets/contract-blocklets)
  - [Create and publish blocklets](./7-working-with-blocklets/creating-blocklet)
- [Use other tools](./8-explorer-other-tooling)
  - [Block Browser](./8-explorer-other-tooling/forge-web)
  - [Traffic simulator](./8-explorer-other-tooling/simulator)
  - [dApps Workshop](./8-explorer-other-tooling/dapp-workshop)
  - [Cross-chain service](./8-explorer-other-tooling/forge-swap-service)
- [Production Environment Guide](./11-forge-cli-in-production)
  - [Enable Daemon](./11-forge-cli-in-production/use-forge-starter)
  - [Join an existing chain](./11-forge-cli-in-production/join-existing-network)
  - [Deploying a multi-node chain](./11-forge-cli-in-production/deploy-multi-node-network)
  - [Deploying a multi-party chain](./11-forge-cli-in-production/deploy-multi-party-network)
  - [Intranet Deployment](./11-forge-cli-in-production/deploy-in-intranet)
  - [Backup and Recovery](./11-forge-cli-in-production/recover-from-crash)
  - [Update Validator](./11-forge-cli-in-production/add-remove-validator)
- [Advanced usage](./9-customization)
  - [Global configuration](./9-customization/global-config)
  - [Multi-chain support](./9-customization/multi-chain)
- [Diagnosis and commissioning](./10-troubleshooting)

---

What are you waiting for? Do it!
