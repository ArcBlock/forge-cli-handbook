---
title: View the status of the chain
description: >-
  How do I check the status of multiple chains? How do I check the status of a
  single chain?
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## See the status of all the chains created

carried out `forge chain:ls` You can view the current status of all the created chains, the execution process:

!TerminalPlayer[](./images/1-chain-ls.yml)

There may be three kinds of chain states here:

- stopped: indicates that the chain is not started
- running: indicates that the chain is running
- error: indicates that the chain failed to start

## See the status of all chains in operation

carried out `forge ps` You can view the status of all running chains. If there are multiple chains running, they will be listed in order. The execution process:

!TerminalPlayer[](./images/2-forge-ps.yml)

## See the status of a chain

carried out `forge status` You can view the on-chain status of a running chain, such as the chain itself, Forge, validator node, network, etc. The specific commands are:

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

For example we want to check `test-chain` Status, you can execute: `forge status -c test-chain`If the chain is in a stopped state, the Forge CLI will remind us to start it. After starting, execute the command again to see the results. The process is as follows:

!TerminalPlayer[](./images/3-forge-status.yml)

by default, `forge status` Information such as the current chain name, block height, last block time, and supported contracts will be displayed. As for other self-command readers, they can explore on their own.
