---
title: 全局配置
description: 如果你想偷懒，这里有一些技巧
keywords: 'forge, forge-cli'
author: poulnzh
category: handbook
layout: documentation
tags:
  - forge
---

全局配置指的是在 `~/.forgerc.yml` 文件中支持的自定义配置。其中的有些配置可以通过命令行参数指定，详细的配置项解释可以查看下面的`配置项`一节。
那么如何设置这些配置呢？

## forge config 命令

> 添加于 CLI v0.39.24

当然，可以通过直接编辑 `~/.forgerc.yml` 文件来修改，不过 `CLI` 在 `0.39.24` 版本中添加了 `forge config` 命令来配置这些全局变量。

### 查看当前配置项

``` shell
$ forge config -l

allowMultiChain:    false
defaults:           false
npmRegistry:        https://registry.npmjs.org/
mirror:             https://releases.arcblockio.cn
moderatorSecretKey: cBqbHWmgCfpeG8HhtD6-KuKUP5vtxD8I91hQdE0P-znEiDyIVZpMSzpxDMW9Ejjar5ozlWFmdwooZSOz4odD7g
```

### 查看某一个配置项

``` shell
$ forge config mirror
https://releases.arcblockio.cn
```

### 设置配置项

```terminal
$ forge config mirror
https://releases.arcblock.io/forge/0.39.2/forge_darwin_amd64.tgz

$ forge config mirror https://releases.arcblockio.cn

$ forge config mirror
https://releases.arcblockio.cn
```

## 配置项

### allowMultiChain

布尔值(bool)，是否允许创建多条链。

可选值：

- true: 允许，这种情况下可以在本地创建多条链，方便开发、调试，推荐在开发环境下使用
- false: 不允许，这种情况下`CLI` 会使用 `forge starter` 来启动链，稳定性更好，推荐在生产环境下使用

默认值: true

### configPath

字符串(string)，自定义 `forge config` 文件位置。如果指定的话，`CLI` 会读取该配置，这种情况下不需要显示的创建一条链，也可以进行后续的操作。

默认值：不设置

命令行参数：-i, --config-path

### defaults

布尔值(bool)，出现交互命令是是否使用默认值。

默认值: false

命令行参数：-d, --defaults

可选值：

- true: 当有交互操作时，CLI 会使用该操作的默认值
- false: 当有交互操作时，CLI 会提示开发者填写信息

### mirror

字符串(string)，自定义镜像地址。如果设置的话，在下载(download)、安装(install)等和 `Forge` 发行版本相关的操作时，`CLI` 会使用该镜像地址。

默认值：不设置

命令行参数: -m, --mirror

### moderatorSecretKey

字符串(string)，管理员(moderator)私钥(SK)，如果在创建链的时候没有指定管理员私钥，并且系统环境变量中没有找到，Forge CLI 自动生成的管理员私钥就会存储在这个配置项里面。

默认值：不设置

### npmRegistry

字符串(string), 自定义 `npm` 镜像地址。如果不设置的话 `CLI` 默认读取 `~/.npmrc` 的配置。

默认值：不设置

命令行参数：-r, --npm-registry

### releaseDir

字符串(string), 以本地磁盘作为 Forge 发行版下载镜像。比较少用，部分需要在局域网部署和使用 Forge CLI 的可能会用到，具体用法参考[这里](../../11-forge-cli-in-production/deploy-in-intranet)

默认值：不设置

## 例子

```yml
# ~/.forgerc.yml

allowMultiChain: true
configPath: /tmp/test/forge_release.toml
defaults: false
mirror: https://releases.arcblockio.cn
moderatorSecretKey: BbGCbsZRQuk4bJbtK4-1ZqJc41YDQvIXZC2BDpC4pGdZS2ai83D8N-QM9p9_FBzsmMZD2o4HzmE6gLo6Lxqf2Q
npmRegistry: https://registry.npm.taobao.org
releaseDir: /path/to/release-dir
```
