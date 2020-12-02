---
title: 'Forge CLI 使用手册'
description: '你从这本手册能学到什么？内容是如何组织的？需要具备什么条件？'
keywords: 'forge, forge-cli'
author: 'wangshijun'
category: ''
layout: 'documentation'
requireLogin: false
tags:
  - 'forge'
---

很高兴你能读到这本手册，在区块链的世界里面开启一趟有趣的探索、建设之旅！

相信你应该已经知道 [ArcBlock](https://arcblockio.cn) 是一家什么样的公司：我们坚信区块链会给人类组织和协作方式带来巨大的变革，我们致力于开发简单易用、灵活可扩展的 dApp 开发框架和工具。到目前为止我们已经发布了 [Forge 框架](https://arcblockio.cn/zh/forge-sdk) 及围绕 Forge 框架的一系列工具，而 Forge CLI 是开发者获取、使用这些工具的最佳路径：只需安装一条命令，就得到了整个区块链工具箱。

## 你能学到什么？

相信你已经在为开发自己的区块链应用而摩拳擦掌，但诸如非对称加密、区块高度、共识算法等看起来高深莫测的名词可能又让你望而却步，繁琐冗长的开发环境配置也可能让你四处碰壁。

Forge 框架把开发区块链应用所需要考虑的网络层、共识层、数据存储层、交易处理层都做了很好的封装，开发者只需要关注需要实现的业务逻辑即可，而 Forge CLI 更进一步，让非开发者也能快速的创建和启动自己的链、应用。

如果你是个开发者，可以从这本手册里面了解到：

- 如何用 Forge CLI 快速的启动 dApp 的运行环境
- 如何用 Forge CLI 部署生产环境的链
- 如何用 Forge CLI 进行链的运维，比如升级
- 如何快速的从链上读取数据或者把数据写到链上
- 如何在链上部署合约、如何管理合约
- 如何用 Forge CLI 快速复用基石程序

如果你不是开发者，也能通过简单的命令启动自己的节点参加到 ArcBlock 的生态中去。

## 你要准备什么？

- 安装有 MacOS、CentOS、Ubuntu 等 Linux 操作系统的设备或者云主机都可以
- 安装有好用的命令行工具，比如 Mac 下面的 [iTerm](https://www.iterm2.com/index.html)，或者 Linux 系统自带的终端程序
- 安装了 [Node.js](https://nodejs.org/) 的运行环境，如果没有也没关系，我们在 [如何获取 Forge CLI](./1-introduction/install-forge-cli) 里有详细的讲解
- 一些空闲时间和对区块链应用开发的好奇心，任何新技能的掌握和熟练都需要用心力去浇灌

## 本手册使用的术语

> 下面这些术语也可以理解成简写，或者缩写。

- 如果没有特殊说明，CLI 是指 Forge CLI
- 如果没有特殊说明，PK 是指 public key (公钥)
- 如果没有特殊说明，SK 是指 security key (私钥)

## 内容组织方式

这本手册的内容整体按照上面的大功能块去组织，具体如下：

- [初识 Forge CLI](./1-introduction)
  - [什么是 Forge CLI？](./1-introduction/what-is-forge-cli)
  - [为什么开发 Forge CLI？](./1-introduction/why-forge-cli)
  - [如何获取 Forge CLI？](./1-introduction/install-forge-cli)
  - [一键发链和一键发币](./1-introduction/getting-started)
  - [必要的初始配置](./1-introduction/initial-setup)
- [发行版管理](./4-manage-forge-release)
  - [查找 Forge 发行版](./4-manage-forge-release/find-release)
  - [获取 Forge 发行版](./4-manage-forge-release/download-install-release)
- [管理链和节点](./2-manage-chain-node)
  - [创建和配置链节点](./2-manage-chain-node/create-config-chain)
  - [启动和停止链节点](./2-manage-chain-node/start-stop-chain)
  - [查看链节点状态](./2-manage-chain-node/inspect-chain-status)
  - [查看节点的日志](./2-manage-chain-node/view-chain-log)
  - [链的软升级](./2-manage-chain-node/upgrade-chain)
  - [链的重置和删除](./2-manage-chain-node/reset-remove-chain)
- [处理钱包](./5-manipulate-wallets-accounts)
  - [生成和查看本地钱包](./5-manipulate-wallets-accounts/local-wallets)
- [读写链上数据](./3-read-write-on-chain-data)
  - [读取交易数据](./3-read-write-on-chain-data/inspect-transactions)
  - [读取区块数据](./3-read-write-on-chain-data/inspect-blocks)
  - [读取账户状态](./3-read-write-on-chain-data/inspect-accounts)
  - [读取资产数据](./3-read-write-on-chain-data/inspect-assets)
  - [读取合约数据](./3-read-write-on-chain-data/inspect-contracts)
- [使用智能合约](./6-working-with-contracts)
  - [编译和部署智能合约](./6-working-with-contracts/compile-deploy-contract)
  - [启用和停用智能合约](./6-working-with-contracts/activate-deactivate-contract)
  - [创建自己的智能合约](./6-working-with-contracts/create-own-contract)
- [使用 Blocklet](./7-working-with-blocklets)
  - [到底什么是 Blocklet](./7-working-with-blocklets/what-are-blocklets)
  - [使用 dApp Blocklet](./7-working-with-blocklets/dapp-blocklets)
  - [使用 Starter Blocklet](./7-working-with-blocklets/starter-blocklets)
  - [使用合约 Blocklet](./7-working-with-blocklets/contract-blocklets)
  - [创建和发布 Blocklet](./7-working-with-blocklets/creating-blocklet)
- [使用其他工具](./8-explorer-other-tooling)
  - [区块浏览器](./8-explorer-other-tooling/forge-web)
  - [流量模拟器](./8-explorer-other-tooling/simulator)
  - [dApps Workshop](./8-explorer-other-tooling/dapp-workshop)
  - [跨链服务](./8-explorer-other-tooling/forge-swap-service)
- [生产环境指南](./src/11-forge-cli-in-production)
  - [启用守护进程](./src/11-forge-cli-in-production/use-forge-starter)
  - [加入现有的链](./src/11-forge-cli-in-production/join-existing-network)
  - [部署多节点的链](./src/11-forge-cli-in-production/deploy-multi-node-network)
  - [部署多参与方的链](./src/11-forge-cli-in-production/deploy-multi-party-network)
  - [局域网部署方法](./src/11-forge-cli-in-production/deploy-in-intranet)
  - [节点的备份和恢复](./src/11-forge-cli-in-production/recover-from-crash)
  - [更新验证人节点](./src/11-forge-cli-in-production/add-remove-validator)
- [高级用法](./9-customization)
  - [全局配置](./9-customization/global-config)
  - [多链支持](./9-customization/multi-chain)
- [诊断和调试](./10-troubleshooting)

---

还等什么？动手吧！
