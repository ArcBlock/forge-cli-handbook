---
title: '获取 Forge 发行版本'
description: ''
keywords: 'forge, forge-cli'
author: 'wangshijun'
category: 'book'
layout: 'documentation'
tags:
  - 'forge'
---

## 用 `forge install` 安装 Forge

在 [极简入门](../../1-introduction/getting-started) 中我们已经知道如何获取 Forge 的发行版本，即使用 `forge install latest` 来安装最新版，当然如果你确切的知道想要安装的版本，比如说 `v0.37.7`，可以执行 `forge install v0.37.7`，关于安装 Forge 发行版本的详细用法见下面这个演示：

!TerminalPlayer[](./images/1-forge-install.yml)

细心的同学可能注意到演示里执行了两次安装，第二次安装的命令是：`forge install v0.37.7 --force`，其中的 `--force` 参数是强制重新下载，因为默认情况下 Forge CLI 支持继续下载某个未下载不完整的版本。

## 用 `forge download` 下载 Forge

跟 `forge install` 类似的还有个 `forge download` 命令，两者的功能几乎是相同的，不同点在于 `forge install` 下载完成后，会把当前 Forge CLI 默认使用的 Forge 版本切换到刚刚下载的版本，而 `forge download` 没有这个步骤，这是因为 Forge CLI 默认情况下是支持创建多条链的，并且支持不同的链可以选择使用不同的 Forge 版本，Forge CLI 创建新链的时候需要知道用户想使用哪个版本。

**下载**和**安装**的区别就像是你要在电脑里面装一个软件时的下载和安装的区别。

在某些场合下，我们只需要**下载**某个版本的 Forge 发行版本，比如我们在进行[链上升级](../../2-manage-chain-node/upgrade-chain)的时候就需要先把要升级到的版本下载到本地。
