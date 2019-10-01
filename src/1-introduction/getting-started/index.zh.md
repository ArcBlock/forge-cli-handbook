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

![](./images/install-release.gif)

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
