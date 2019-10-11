---
title: '全局配置'
description: '如果你想偷懒，这里有一些技巧'
keywords: 'forge, forge-cli'
author: 'poulnzh'
category: 'book'
layout: 'documentation'
tags:
  - 'forge'
---

全局配置指的是在 `~/.forgerc.yml` 文件中支持的自定义配置。其中的有些配置可以通过命令行参数指定。

### allowMultiChain

布尔值(bool)，是否允许创建多条链。

可选值：

- true: 允许，这种情况下可以在本地创建多条链，方便开发、调试，推荐在开发环境下使用
- false: 不允许，这种情况下`CLI` 会使用 `forge starter` 来启动链，稳定性更好，推荐在生产环境下使用

默认值: true

### autoUpgrade

布尔值(bool)，是否允许检查 `CLI` 的更新。

可选值：

- true: 允许，`CLI` 会自动检查更新，如果有更新，会提示用户是否更新
- false，不允许，开发者只能手动更新 `CLI`

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

- true: 当有交互操作时，CLI会使用该操作的默认值
- false: 当有交互操作时，CLI会提示开发者填写信息

### mirror

字符串(string)，自定义镜像地址。如果设置的话，在下载(download)、安装(install)等和 `Forge` 发行版本相关的操作时，`CLI` 会使用该镜像地址。

默认值：不设置

命令行参数: -m, --mirror

### moderatorSecretKey

字符串(string)，管理员(moderator)私钥(SK)。

默认值：不设置

### npmRegistry

字符串(string), 自定义 `npm` 镜像地址。如果不设置的话 `CLI` 默认读取 `~/.npmrc` 的配置。

默认值：不设置

命令行参数：-r, --npm-registry

### releaseDir

字符串(string), 以本地磁盘作为 Forge 发行版下载镜像。比较少用，部分需要在局域网部署和使用 Forge CLI 的可能会用到，具体用法参考[这里](../../11-forge-cli-in-production/deploy-in-intranet)

默认值：不设置

## 例子

``` yml
# ~/.forgerc.yml

allowMultiChain: true
autoUpgrade: true
configPath: /tmp/test/forge_release.toml
defaults: false,
mirror: http://arcblock.oss-cn-beijing.aliyuncs.com
moderatorSecretKey: BbGCbsZRQuk4bJbtK4-1ZqJc41YDQvIXZC2BDpC4pGdZS2ai83D8N-QM9p9_FBzsmMZD2o4HzmE6gLo6Lxqf2Q,
npmRegistry: https://registry.npm.taobao.org
```
