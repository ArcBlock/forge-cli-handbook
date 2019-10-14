---
title: 链的重置和删除
description: 重置和删除有什么区别？怎么操作？
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

::: error
**注意，链的重置和删除操作只适用于开发环境，对于生产环境的链，不应该有这两种操作，因为会导致用户数据丢失！**
:::

## 链的重置

和开发传统应用类似，有时候你需要 1 个干净的数据库去复现某个 Bug，或者重新模拟生成一些数据填充进去，这时候通常的做法是把应用运行时所用的数据库清空下，Forge CLI 也支持类似的操作，因为开发应用时因为某些 Bug 导致链上状态不对的情况是很有可能发生的，**链的重置只是会删掉链的状态，而会保留链的配置**，这样你可以快速的再启动一条相同配置的链。

执行 `forge chain:reset test-chain` 即可以重置链的状态，当然 Forge CLI 要求只能重置停掉的链，如果链运行中需要先停掉再重置，整个过程如下：

!TerminalPlayer[](./images/1-chain-reset.yml)

`test-chain` 被重置完之后，可以看到执行 `forge chain:ls` 还是会把 `test-chain` 列出来，这样如果继续 `forge start test-chain`，就会启动一个空白的 `test-chain`。

## 链的删除

如果某个链完全不要，包括链的数据、日志、配置等，可以执行删除操作来释放掉其所占用的磁盘。

执行 `forge chain:remove test-chain` 即可彻底删除 `test-chain`，当然 Forge CLI 要求只能删除停掉的链，如果链运行中需要先停掉再删除，整个过程如下：

!TerminalPlayer[](./images/2-chain-remove.yml)

`test-chain` 被删除之后，可以看到执行 `forge chain:ls` 已经不会在列在里面了。
