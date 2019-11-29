---
title: Reset and delete of the chain
description: What's the difference between reset and delete? How does it work?
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

::: error
**Note that the reset and delete operations of the chain are only applicable to the development environment. For the chain of the production environment, there should not be these two operations, because user data will be lost!**
:::

## Reset of the chain

Similar to the development of traditional applications, sometimes you need a clean database to reproduce a certain bug, or re-simulate to generate some data to fill in. At this time, the usual practice is to clear the database used by the application when it is running. Forge CLI also Supports similar operations, because when the application is developed, some bugs may cause the state on the chain to be incorrect.**The reset of the chain only deletes the state of the chain, and retains the configuration of the chain**So that you can quickly restart a chain with the same configuration.

carried out `forge chain:reset test-chain` That is, the state of the chain can be reset. Of course, the Forge CLI requires that only the stopped chain can be reset. If the chain needs to be stopped and then reset, the whole process is as follows:

!TerminalPlayer[](./images/1-chain-reset.yml)

`test-chain` After being reset, you can see the execution `forge chain:ls` Still put `test-chain` List it so that if you continue `forge start test-chain`Will start a blank `test-chain`。

## Delete of chain

If a chain is completely unnecessary, including the chain's data, logs, configuration, etc., you can perform a delete operation to free up the disks it occupied.

carried out `forge chain:remove test-chain` To remove it completely `test-chain`Of course, the Forge CLI requires that only the stopped chain be deleted. If the chain needs to be stopped and then deleted during the operation, the whole process is as follows:

!TerminalPlayer[](./images/2-chain-remove.yml)

`test-chain` After being deleted, you can see the execution `forge chain:ls` Will no longer be listed.
