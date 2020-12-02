---
title: Start and stop of the chain
description: ""
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

After the chain nodes are configured, we can use the Forge CLI to start and stop the created chain at any time.

## Start of the chain node

The command to start the chain is `forge start <chainName>`, Such as can be executed `forge start test-chain` To start `test-chain`The execution process is as follows:

!TerminalPlayer[](./images/6-start-chain.yml)

`forge start` The Forge kernel, consensus engine, and Forge Web components in the Forge toolbox will be started in turn. If you disable Forge Web in the configuration file, it will not start. A single startup can usually be completed in about 15 seconds, more than 40 seconds. Will be considered as failed to start.

After the startup is complete, the Forge CLI will print out the process list of the running chain, as follows:

```shell

 Chain: test-chain v0.38.4
┌───────────────┬──────────┬──────────┬──────────┬──────────┬──────────────────────────────┐
│ Name          │ PID      │ Uptime   │ Memory   │ CPU      │ Endpoint                     │
├───────────────┼──────────┼──────────┼──────────┼──────────┼──────────────────────────────┤
│ web           │ 55527    │ 3s       │ 139 MB   │ 102.00 % │ http://127.0.0.1:8211/api    │
├───────────────┼──────────┼──────────┼──────────┼──────────┼──────────────────────────────┤
│ forge         │ 55398    │ 12s      │ 184 MB   │ 61.33 %  │ tcp://127.0.0.1:38211        │
├───────────────┼──────────┼──────────┼──────────┼──────────┼──────────────────────────────┤
│ tendermint    │ 55424    │ 10s      │ 26.2 MB  │ 2.00 %   │ -                            │
└───────────────┴──────────┴──────────┴──────────┴──────────┴──────────────────────────────┘
```

There are several important pieces of information in it:

- `test-chain` Forge version used is `v0.38.4`
- `test-chain` The GraphQL interface address is `https://127.0.0.1:8211/api`
- `test-chain` The gRPC interface address is `tcp://127.0.0.1:38211`

The last two interface addresses are in use [Forge SDK]() The time is critical.

## Stop of chain nodes

There are several situations where we need to stop the running chain (the stop here refers to the suspension of the operation, not the deletion of configuration or data):

- Need to release the disk or CPU resources occupied by the running node: Forge itself is relatively resource-efficient, as long as the machine memory is greater than 512M, Forge will be able to start with a high probability
- Need to delete the corresponding chain and node configuration and data
- The node's configuration has been re-modified and needs to be restarted to take effect

The stop chain command is similar to the start command `forge stop <chainName>`, Such as can be executed `forge stop test-chain` Come to stop `test-chain`The execution process is as follows:

!TerminalPlayer[](./images/7-stop-chain.yml)

Of course, if you start multiple chains locally, you need to stop them all at the same time, you can directly execute `forge stop -a`, And then wait a few seconds, all the chains are stopped.

::: warning
To simplify `forge start` with `forge stop` Followed directly by the chain node name to specify which chain to operate without appending `-c` Parameter flag.
:::
