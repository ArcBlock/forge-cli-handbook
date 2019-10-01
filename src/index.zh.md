---
title: 'Forge CLI 使用手册'
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

- [初识 Forge CLI](./1-introduction)
  - [什么是 Forge CLI](./1-introduction/what-is-forge-cli)
  - [为什么开发 Forge CLI](./1-introduction/why-forge-cli)
  - [如何获取 Forge CLI](./1-introduction/install-forge-cli)
  - [Hello Forge CLI](./1-introduction/getting-started)
  - [初始化配置](./1-introduction/initial-setup)
- [管理链和节点](./2-manage-chain-node)
  - [创建和配置应用链](./2-manage-chain-node/create-config-chain)
  - [启动和停止应用链](./2-manage-chain-node/start-stop-chain)
  - [查看应用链的状态](./2-manage-chain-node/inspect-chain-status)
  - [升级应用链](./2-manage-chain-node/upgrade-chain)
  - [重置应用链](./2-manage-chain-node/reset-remove-chain)
- [读写链上数据](./3-read-write-on-chain-data)
  - [读取交易数据](./3-read-write-on-chain-data/inspect-transactions)
  - [读取区块数据](./3-read-write-on-chain-data/inspect-blocks)
  - [读取账户状态](./3-read-write-on-chain-data/inspect-accounts)
  - [读取资产数据](./3-read-write-on-chain-data/inspect-assets)
  - [读取合约数据](./3-read-write-on-chain-data/inspect-contracts)
- [管理 Forge Release](./4-manage-forge-release)
  - [查看本地或远程的 Forge Release](./4-manage-forge-release/find-release)
  - [下载、安装特定的 Forge Release](./4-manage-forge-release/download-install-release)
- [处理钱包和账户](./5-manipulate-wallets-accounts)
  - [创建本地钱包](./5-manipulate-wallets-accounts/local-wallets)
  - [使用链上账户](./5-manipulate-wallets-accounts/on-chain-accounts)
- [使用和管理智能合约](./6-working-with-contracts)
  - [编译和部署智能合约](./6-working-with-contracts/compile-deploy-contract)
  - [启用和停用智能合约](./6-working-with-contracts/activate-deactivate-contract)
  - [创建自己的只能合约](./6-working-with-contracts/create-own-contract)
- [使用基石程序 Blocklet](./7-working-with-blocklets)
  - [到底什么是基石程序](./7-working-with-blocklets/what-are-blocklets)
  - [使用 dApp 基石程序](./7-working-with-blocklets/dapp-blocklets)
  - [使用 Starter 基石程序](./7-working-with-blocklets/starter-blocklets)
  - [使用合约基石程序](./7-working-with-blocklets/contract-blocklets)
  - [创建和发布基石程序](./7-working-with-blocklets/creating-blocklet)
- [探索其他工具](./8-explorer-other-tooling)
  - [区块浏览器](./8-explorer-other-tooling/forge-web)
  - [流量模拟器](./8-explorer-other-tooling/simulator)
  - [dApps Workshop](./8-explorer-other-tooling/dapp-workshop)
  - [跨链服务](./8-explorer-other-tooling/forge-swap-service)
- [自定义你的 Forge CLI](./9-customization)
- [诊断和调试](./10-troubleshooting)

## 你需要准备什么？

- 安装有 MacOS、CentOS、Ubuntu 等 Linux 操作系统的设备或者云主机都可以
- 安装有好用的命令行工具，比如 Mac 下面的 iTerm，或者 Linux 系统自带的终端程序
- 安装了 Node.js 的运行环境，如果没有也没关系，我们在 [如何获取 Forge CLI](./1-introduction/install-forge-cli) 里有详细的讲解
- 空闲时间和对区块链应用开发的好奇心
