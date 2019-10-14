---
title: 查找 Forge 发行版本
description: Find local/remote releases
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

## 用 `forge ls` 查看已安装的 Forge

如果想查看本地已经安装了哪些版本的 Forge，可以执行：`forge ls`，输出结果如下所示：

![](./images/forge-ls.png)

这里面高亮的那个版本是最近使用 `forge install` 安装到本地的那个版本，也是执行 `forge chain:create` 时默认使用的 Forge 版本。

## 用 `forge ls:remote` 查看已发布的 Forge

Forge 每周都会有新的版本，如何查看我们都发布了哪些版本呢？执行 `forge ls:remote`，即可拿到完整的已经发布过的 Forge 版本

![](./images/forge-ls-remote.png)

类似的，这个列表会把本地已经安装的版本标记出来。
