---
title: View chain node logs
description: ""
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

## What logs are there?

Logs are a way of recording information for any long-running service.Chain nodes started based on Forge are no exception. They have the following information:

- Forge error log: records Forge kernel errors, such as the reason why it cannot be started, etc. are printed here
- Forge transaction log: a log of transaction processing, for example, a transaction verification failure will be printed here for any reason
- Log of the consensus engine: for example, when the block was produced, what is in the block

The log storage path of each chain created based on the Forge CLI is independent of each other, such as our `test-chain` The log storage location is:

- Forge error log: `~/.forge_chains/forge_test-chain/forge_release/core/logs/forge_error.log`
- Forge Transaction Log: `~/.forge_chains/forge_test-chain/forge_release/core/logs/forge_transaction.log`
- Consensus Engine Log: `~/.forge_chains/forge_test-chain/forge_release/tendermint/logs/tendermint.log`

## How to read the log?

carried out `forge logs` Or `forge logs -c test-chain` You can open the monitoring mode of the above log files. If you want to see a separate log, just open it.
