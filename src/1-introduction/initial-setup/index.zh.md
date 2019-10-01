---
title: 'Forge CLI 初始配置'
description: '为了后面更能更愉快的玩耍，你需要调教调教 Forge CLI'
keywords: 'forge, forge-cli'
author: 'wangshijun'
category: 'book'
layout: 'documentation'
tags:
  - 'forge'
---

## 全局配置项

细心的你可能会纳闷：安装 Forge CLI 时指定的淘宝 npm 镜像，还有安装 Forge Release 时指定的阿里云镜像难道每次都需要手动指定？有没有办法配置一次，后面每次都用？

答案是肯定的，和广泛使用的命令行工具类似，Forge CLI 也支持几个全局的配置项。

全局配置项的存储位置在 `~/.forgerc.yml`，你需要先创建该文件：

```bash
touch ~/.forgerc.yml
```

然后在其中输出如下内容：

```yaml
registry: https://registry.npm.taobao.org
mirror: http://arcblockcn.oss-cn-beijing.aliyuncs.com
```

这样，后续执行 Forge CLI 命令都会读取和使用这些配置，比如当你再次去安装某个版本的 Forge Release 时，如下图的黄色标识就表示使用了自定义的配置：

![Custom Mirror](./images/custom-mirror.png)

除了 `registry` 和 `mirror` 两个配置项之外，Forge CLI 还支持更多其他的配置项，可参考[这里](../../9-customization)。

## 链管理员私钥

TODO
