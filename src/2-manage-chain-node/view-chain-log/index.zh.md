---
title: 查看链节点日志
description: ''
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

## 有哪些日志？

日志是任何长时间运行的服务都会有的信息记录方式，基于 Forge 启动的链节点也不例外，有如下几个信息：

- Forge 错误日志：记录 Forge 内核的错误，比如无法启动的原因之类的都会打印在这里
- Forge 交易日志：记录交易处理的日志，比如因为什么原因某个交易验证失败都会打印在这里
- 共识引擎的日志：比如什么时候出块了，块里面有什么

基于 Forge CLI 创建的每条链的日志存储路径是相互独立的，比如我们 `test-chain` 的日志存储位置为：

- Forge 错误日志：`~/.forge_chains/forge_test-chain/forge_release/core/logs/forge_error.log`
- Forge 交易日志：`~/.forge_chains/forge_test-chain/forge_release/core/logs/forge_transaction.log`
- 共识引擎日志：`~/.forge_chains/forge_test-chain/forge_release/tendermint/logs/tendermint.log`

## 怎么看日志？

执行 `forge logs` 或者 `forge logs -c test-chain` 就能打开上面几个日志文件的监听模式，如果你想看单独的日志，直接打开它即可。
