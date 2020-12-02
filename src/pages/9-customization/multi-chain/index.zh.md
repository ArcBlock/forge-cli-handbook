---
title: '操作多条链'
description: 'Forge CLI 支持启动多条链的能力相信你已经见识到了，我们来详细看看它的语法'
keywords: 'forge, forge-cli'
author: 'wangshijun'
category: ''
layout: 'documentation'
tags:
  - 'forge'
---

## 为什么要支持多链？

在链网体系中，会有各种各样、大大小小的应用链、垂直行业链，而在开发环境支持启动多条链在测试跨链特性时对开发者会非常方便。

Forge CLI 的多链支持是在 `v0.35.0` 版本中添加的。

## 多链数据的存储规则

Forge CLI 的多链支持是基于文件系统来实现的，每条链的节点都有自己的配置和数据存储目录，这些信息存储位置如下：

```shell
❯ tree ~/.forge_chains -L 2
/Users/wangshijun/.forge_chains
├── forge_my-forge-chain      # 这里存放 my-forge-chain 的所有信息
│   ├── config.yml
│   ├── forge_release         # my-forge-chain 的数据存储目录，包括日志、链状态等
│   ├── forge_release.toml    # my-forge-chain 的配置文件
│   └── keys                  # my-forge-chain 本地节点的公私钥信息
│
└── forge_test-chain          # 这里存放 test-chain 的所有信息
    ├── config.yml
    ├── forge_release         # test-chain 的数据存储目录，包括日志、链状态等
    ├── forge_release.toml    # test-chain 的配置文件
    └── keys                  # test-chain 本地节点的公私钥信息
```

## 多链时的查找规则

当存在多条链时，Forge CLI 在接受到某条指令时，会看看用户是否指定了某条链，如果没有指定，会按照如下规则去查找：

1. 查找当前正在运行中的链
2. 如果有运行中的链，把运行中的链名称按字母升序排列，取第一个作为默认链
3. 如果没有运行中的链，把所有链的名字按字母升序排列，取第一个作为默认连

::: warning
并不是所有的 Forge CLI 自命令都需要指定链参数，比如 `forge install` 和 `forge download` 就不需要。
:::

## 为命令指定链名称

多链操作的基本语法如下：

```shell
forge [web | workshop | simulator...]
  [chain:create | start | stop | ps | chain:reset ...]
  [--chain-name | -c <chainName>]

```

::: warning
`-c` 或者 `--chain-name` 是绝大部分 Forge CLI 子命令支持的自定义链的参数，在只有一条链的情况下，完全可以忽略这个参数。
:::

### 创建新链

```shell
forge chain:create <chain-name>
```

### 启动某条链

```shell
forge start chain1
forge start chain2
```

### 停止某条链

```shell
forge stop chain1
forge stop chain2
```

### 读写链上数据

```shell
forge tx <hash> -c chain1
forge tx <hash> -c chain2
forge block -f -c chain2
forge account <address> -c chain2
```

### 升级某条链

```shell
forge upgrade -c chain2
```

### 合约管理

```shell
forge protocol:deploy <compiledPath> -c chain2
forge protocol:activate transfer -c chain2
forge protocol:deactivate transfer -c chain2
forge protocol:ls -c chain2
```

### 启停各种工具

`forge web start | stop [--chain-name | -c <chain name>]`

语法适用于：[simulator](../../8-explorer-other-tooling/simulator), [workshop](../../8-explorer-other-tooling/dapp-workshop), [swap](../../8-explorer-other-tooling/forge-swap-service)

```shell
forge web start -c chain1
forge web stop -c chain2
forge web open -c chain3
```
