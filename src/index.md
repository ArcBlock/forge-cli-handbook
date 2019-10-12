---
title: 'Forge CLI Handbook'
description: '你从这本手册能学到什么？内容是如何组织的？需要具备什么条件？'
keywords: 'forge, forge-cli'
author: 'wangshijun'
category: 'book'
layout: 'documentation'
tags:
  - 'forge'
---

很高兴你能读到这本小书，在区块链的世界里面开启一趟有趣的探索、建设之旅！

相信你应该已经知道 [ArcBlock](https://arcblockio.cn) 是一家什么样的公司：我们坚信区块链会给人类组织和协作方式带来巨大的变革，我们致力于开发简单易用、灵活可扩展的 dApp 开发框架和工具。到目前为止我们已经发布了 [Forge 框架](https://arcblockio.cn/zh/forge-sdk) 及围绕 Forge 框架的一系列工具，而 Forge CLI 是开发者获取、使用这些工具的最佳路径：只需安装一条命令，就得到了整个区块链工具箱。

## 你能得到什么？

毫不夸张的说，Forge CLI 是区块链应用开发的瑞士军刀，包含如下这些开箱即用的功能：

- 管理你的应用链：包括开发环境、生产环境
- 进行链上数据读写：区块、交易、账户、合约、资产等
- 管理 Forge 及其周边工具的发行版本
- 操作钱包和账户（Wallet 和 Account）
- 完成智能合约的编译、部署和管理
- 使用基石程序（Blocklet）进行快速开发
- 使用区块浏览器、模拟器及 dApps Workshop

这些功能在会你开发、部署、运行区块链应用的过程中提供帮助，比如创建测试用的连接点、把链部署到生产环境、使用基石程序快速开发等等。

## 内容组织方式？

这本小书则是按照上面的大功能块去组织：

- [Introduction](./src/1-introduction)
  - [What is Forge CLI?](./src/1-introduction/what-is-forge-cli)
  - [Why Forge CLI?](./src/1-introduction/why-forge-cli)
  - [How to get Forge CLI?](./src/1-introduction/install-forge-cli)
  - [Getting Started](./src/1-introduction/getting-started)
  - [Initial Setup](./src/1-introduction/initial-setup)
- [Chain/Node Management](./src/2-manage-chain-node)
  - [Create/Config a new Chain](./src/2-manage-chain-node/create-config-chain)
  - [Start/Stop the Chain](./src/2-manage-chain-node/start-stop-chain)
  - [Inspect Chain Status](./src/2-manage-chain-node/inspect-chain-status)
  - [View Chain Log](./src/2-manage-chain-node/view-chain-log)
  - [Upgrade a Chain](./src/2-manage-chain-node/upgrade-chain)
  - [Reset/Remove a Chain](./src/2-manage-chain-node/reset-remove-chain)
- [Read/Write on Chain Data](./src/3-read-write-on-chain-data)
  - [Inspect Transactions](./src/3-read-write-on-chain-data/inspect-transactions)
  - [Inspect Blocks](./src/3-read-write-on-chain-data/inspect-blocks)
  - [Inspect Accounts](./src/3-read-write-on-chain-data/inspect-accounts)
  - [Inspect Assets](./src/3-read-write-on-chain-data/inspect-assets)
  - [Inspect Contracts](./src/3-read-write-on-chain-data/inspect-contracts)
- [Forge Release Management](./src/4-manage-forge-release)
  - [Find local/remote releases](./src/4-manage-forge-release/find-release)
  - [Install/Download a release](./src/4-manage-forge-release/download-install-release)
- [Manipulate Wallets/Accounts](./src/5-manipulate-wallets-accounts)
  - [Creating local wallets](./src/5-manipulate-wallets-accounts/local-wallets)
  - [Working with on chain accounts](./src/5-manipulate-wallets-accounts/on-chain-accounts)
- [Working with Contracts](./src/6-working-with-contracts)
  - [Compile/deploy a Contract](./src/6-working-with-contracts/compile-deploy-contract)
  - [Activate/deactivate a Contract](./src/6-working-with-contracts/activate-deactivate-contract)
  - [Creating your own Contract](./src/6-working-with-contracts/create-own-contract)
- [Working with Blocklets](./src/7-working-with-blocklets)
  - [What are Blocklets](./src/7-working-with-blocklets/what-are-blocklets)
  - [Using dApp Blocklets](./src/7-working-with-blocklets/dapp-blocklets)
  - [Using Starter Blocklets](./src/7-working-with-blocklets/starter-blocklets)
  - [Using Contract Blocklets](./src/7-working-with-blocklets/contract-blocklets)
  - [Create and publish your own Blocklet](./src/7-working-with-blocklets/creating-blocklet)
- [Use Forge CLI in production](./src/11-forge-cli-in-production)
  - [Join an Existing Network](./src/11-forge-cli-in-production/join-existing-network)
  - [Deploy a Multi Node Network](./src/11-forge-cli-in-production/deploy-multi-node-network)
  - [Deploy a Multi Party Network](./src/11-forge-cli-in-production/deploy-multi-party-network)
  - [Deploy a Network in Intranet](./src/11-forge-cli-in-production/deploy-in-intranet)
- [Explore Other Tooling](./src/8-explorer-other-tooling)
  - [Forge Web](./src/8-explorer-other-tooling/forge-web)
  - [Forge Simulator](./src/8-explorer-other-tooling/simulator)
  - [dApps Workshop](./src/8-explorer-other-tooling/dapp-workshop)
  - [Forge Swap](./src/8-explorer-other-tooling/forge-swap-service)
- [Customization](./src/9-customization)
  - [Global Config](./src/9-customization/global-config)
- [Troubleshooting](./src/10-troubleshooting)

## 你需要准备什么？

- 安装有 MacOS、CentOS、Ubuntu 等 Linux 操作系统的设备或者云主机都可以
- 安装有好用的命令行工具，比如 Mac 下面的 iTerm，或者 Linux 系统自带的终端程序
- 安装了 Node.js 的运行环境，如果没有也没关系，我们在 [如何获取 Forge CLI](./1-introduction/install-forge-cli) 里有详细的讲解
- 空闲时间和对区块链应用开发的好奇心
