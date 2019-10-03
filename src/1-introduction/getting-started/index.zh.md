---
title: 'Forge CLI 极简入门'
description: 'Gavin Wood 能在 30 分钟内发一条链，用 Forge CLI 你能把这个时间缩的更短'
keywords: 'forge, forge-cli'
author: 'wangshijun'
category: 'book'
layout: 'documentation'
tags:
  - 'forge'
---

> 资深区块链开发者 Gavin Wood 能在 30 分钟内发一条链，用 Forge CLI 即使是技术小白也能把这个时间缩短 50%，当然需要你有个靠谱的网络环境，嘿嘿！

## 安装 Forge 工具集

我们已经安装好 Forge CLI，但是我们还没有把 Forge 的其他组件安装到电脑里面，继续执行如下命令来安装这些组件：

```bash
forge install latest
```

::: tip
对于中国大陆的用户，可以使用阿里云的镜像来加速安装：`forge install --mirror http://arcblockcn.oss-cn-beijing.aliyuncs.com`
:::

::: tip
这里的 Forge 工具集也称为 Forge Release，想了解更多的细节可以参见：[Forge Release 管理](../../4-manage-forge-release)。
:::

整个安装过程如下图所示：

!TerminalPlayer[](./images/1-install-release.yml)

## 发链和发币

万事俱备，接下来我们就直接实现开头吹下的牛逼：使用 Forge CLI 创建并启动一条链！

依次执行如下两条命令：

```bash
# 使用默认配置来创建一条链，然后使用
forge chain:create my-forge-chain -d

# 启动刚刚创建的链
forge start my-forge-chain
```

整个过程如下图示：

![](./images/create-chain.gif)

然后，执行 `forge web open`，不出意外，你本地的浏览器会打开刚刚启动的这条链的区块浏览器，区块浏览器里面能看到链的基本信息。

![](./images/forge-web.png)

::: warning
如果你是在云平台上的远端机器，`forge web open` 大概率无法工作，如果你想通过网络访问刚刚启动链的区块浏览器，需要这个机器有公网的 IP，并且打开 8210 端口。关于 Forge WEB 的更多介绍参见 [这里](../../8-explorer-other-tooling/forge-web)
:::

::: success
使用 `forge status` 也能检查当前链的状态，如果想查看链上币的配置，可以执行 `forge status core`，关于链状态的查看，更多参见[检查链的状态](../../2-manage-chain-node/inspect-chain-status)
:::
