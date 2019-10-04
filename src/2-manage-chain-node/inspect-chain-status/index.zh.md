---
title: '查看链的状态'
description: '如何查看多条链的状态？如何查看单条链的状态？'
keywords: 'forge, forge-cli'
author: 'wangshijun'
category: 'book'
layout: 'documentation'
tags:
  - 'forge'
---

## 看创建的所有链状态

执行 `forge chain:ls` 可以查看所有创建的链目前所处的状态，执行过程：

!TerminalPlayer[](./images/1-chain-ls.yml)

这里的链状态可能会有 3 种：

- stopped: 表示链未启动
- running: 表示链处于运行状态
- error: 表示链启动失败了

## 看运行中的所有链的状态

执行 `forge ps` 可以查看所有运行中的链的状态，如果有多条链运行中，会依次列出，执行过程：

!TerminalPlayer[](./images/2-forge-ps.yml)

## 看某条链的状态

执行 `forge status` 可以查看运行中的某条链的链上状态，比如链本身、Forge、验证人节点、网络等，具体的命令有：

```shell
❯ forge help status
Usage: status [options] [type]

List info of the running chain/node

Options:
  -h, --help  output usage information

Examples:
  - forge status           display status for chain
  - forge status chain     display status about chain
  - forge status core      display status of forge core
  - forge status net       display status of network
  - forge status validator display status of validators
  - forge status all       display status of all components
  - forge status -c hello  display status for chain named hello
```

比如我们要查看 `test-chain` 的状态，可以执行：`forge status -c test-chain`，如果链处于停止状态 Forge CLI 会提醒我们启动它，启动之后再次执行命令即可看到结果，过程如下：

!TerminalPlayer[](./images/3-forge-status.yml)

默认情况下，`forge status` 会展示当前链的名称、块高、最后区块时间、支持的合约等信息，至于其他的自命令读者可自行探索。
