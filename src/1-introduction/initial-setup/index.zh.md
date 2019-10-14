---
title: Forge CLI 初始配置
description: 为了后面更能更愉快的玩耍，你需要调教调教 Forge CLI
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

## 全局配置项

细心的你可能会纳闷：安装 Forge CLI 时指定的淘宝 npm 镜像，还有安装 Forge 时指定的阿里云镜像难道每次都需要手动指定？有没有办法配置一次，后面每次都用？

答案是肯定的，和广泛使用的命令行工具类似，Forge CLI 也支持几个全局的配置项。

全局配置项的存储位置在 `~/.forgerc.yml`，你需要先创建该文件：

```bash
touch ~/.forgerc.yml
```

然后在其中输出如下内容：

```yaml
npmRegistry: https://registry.npm.taobao.org
mirror: https://releases.arcblockio.cn
```

这样，后续执行 Forge CLI 命令都会读取和使用这些配置，比如当你再次去安装某个版本的 Forge 时，如下图的黄色标识就表示使用了自定义的配置：

![Custom Mirror](./images/custom-mirror.png)

除了 `npmRegistry` 和 `mirror` 两个配置项之外，Forge CLI 还支持更多其他的配置项，可参考[这里](../../9-customization/global-config)。

## 配置链管理员

对于区块链来说，所使用软件的版本其实相当于安装在电脑硬件上的操作系统，我们都知道：如果要升级操作系统的版本，或者执行比较危险的操作比如安装任意来源的可执行程序，我们要输入管理员密码才能完成。对于区块链来说，哪些操作是受限的操作呢？

- 把链所使用的 Forge 版本升级到新的版本
- 在链上部署新的智能合约
- 禁用链上已有的智能合约
- 启用被禁用的智能合约

> 关于链的升级详见[这里](../../2-manage-chain-node/upgrade-chain)；关于智能合约是什么以及基本用法，后面会有[专门的章节](../../6-working-with-contracts)介绍。

由于区块链公开账本的本质，任何对链的变更都需要达成共识，即通过发送交易的方式来完成，从安全的角度这些受限操作不能由任意账户账户发出，而是应该由链的管理员（本质上是公私钥对）来完成，链的管理员又应该在链创建的时候在配置文件中指定，并写到链的初始状态中。

如同创建 Git 分支一样简单，用 Forge CLI 去创建链也是成本极低的，在开发环境使我们可以随时把已经创建的链删掉，然后创建任意多条不同的链，如果我们要在链上做升级或者合约相关的操作，则需要在创建链的时候就配置好管理员。Forge 里面的管理员叫做 Moderator，本意是协调员。

为了免去每次创建链的时候手动配置管理员的繁琐，Forge CLI 在创建链的时候会依次检查全局配置文件里面是否存在 `moderatorSecretKey`、环境变量 `FORGE_MODERATOR_SK` 是否存在，如果存在就会自动从这个私钥派生链管理员的公钥和地址，并将其包含在新创建的链配置中。

这样，我们只需要确保配置或者环境变量中有管理员私钥即可，具体步骤：

- 用 `forge wallet:create --defaults` 来生成一个随机的管理员钱包，拿到钱包的私钥
- 在 `~/.forgerc.yaml` 中配置 `moderatorSecretKey`
- 创建新链，查看管理员配置是否符合预期

整个过程如下：

!TerminalPlayer[](./images/3-config-moderator.yml)

最后那行 `forge chain:create hello -d | grep z1c2CbKL9vFebhRUVoBPhNHtmX8wnY3t4Gk` 是为了检查 Forge CLI 是否自动包含了刚生成的管理员信息，因为 Forge CLI 在创建新链的时候会把链的配置打印出来，可以看到配置中包含了我们新配置的管理员。
