---
title: Manipulating multiple chains
description: >-
  Forge CLI supports the ability to launch multiple chains. I believe you have
  seen it. Let's take a closer look at its syntax.
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## Why support multi-chain?

In the chain network system, there will be various, large and small application chains, vertical industry chains, and the development environment supports the launch of multiple chains, which is very convenient for developers when testing cross-chain characteristics.

Forge CLI multi-chain support is available at `v0.35.0` Added in version.

## Storage rules for multi-chain data

Forge CLI's multi-chain support is implemented based on the file system. Each node of the chain has its own configuration and data storage directory. The information storage locations are as follows:

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

## Finding rules when multi-chain

When there are multiple chains, when the Forge CLI receives a certain instruction, it will see if the user has specified a certain chain. If not, it will search according to the following rules:

1.  Finding currently running chains
2.  If there are running chains, arrange the running chain names in ascending alphabetical order, and take the first as the default chain
3.  If there are no running chains, the names of all chains are listed in ascending alphabetical order, and the first one is taken as the default connection.

::: warning
Not all Forge CLI self-commands need to specify chain parameters, such as `forge install` with `forge download` No need.
:::

## Specify a chain name for the command

The basic syntax of multi-chain operation is as follows:

```shell
forge [web | workshop | simulator...]
  [chain:create | start | stop | ps | chain:reset ...]
  [--chain-name | -c <chainName>]

```

::: warning
`-c` Or `--chain-name` It is a parameter of the custom chain supported by most Forge CLI subcommands. In the case of only one chain, this parameter can be completely ignored.
:::

### Create new chain

```shell
forge chain:create <chain-name>
```

### Start a chain

```shell
forge start chain1
forge start chain2
```

### Stop a chain

```shell
forge stop chain1
forge stop chain2
```

### Read and write data on the chain

```shell
forge tx <hash> -c chain1
forge tx <hash> -c chain2
forge block -f -c chain2
forge account <address> -c chain2
```

### Upgrade a chain

```shell
forge upgrade -c chain2
```

### Contract management

```shell
forge protocol:deploy <compiledPath> -c chain2
forge protocol:activate transfer -c chain2
forge protocol:deactivate transfer -c chain2
forge protocol:ls -c chain2
```

### Start and stop various tools

`forge web start | stop [--chain-name | -c <chain name>]`

The syntax applies to: [simulator](../../8-explorer-other-tooling/simulator), [workshop](../../8-explorer-other-tooling/dapp-workshop), [swap](../../8-explorer-other-tooling/forge-swap-service)

```shell
forge web start -c chain1
forge web stop -c chain2
forge web open -c chain3
```
