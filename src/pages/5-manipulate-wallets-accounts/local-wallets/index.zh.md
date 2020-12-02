---
title: 生成和查看钱包
description: 钱包安全的关键在私钥，怎么保存它很重要
keywords: 'accounts, wallets'
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## 随机生成钱包

`forge wallet:create` 用来创建随机钱包，是 SDK 通过数学的方式直接随机产生私钥，然后通过密码学计算公钥，组成公私钥对，再根据用户选择的 `ROLE_TYPE`、`KEY_TYPE`、`HASH_TYPE` 来计算 DID，整个过程没有 Forge 链节点的参与，这种方式创建出来的公私钥对比较适合用在代码中。

创建钱包的基本过程演示如下：

!TerminalPlayer[](./images/create-wallet.yml)

整个创建过程需要选择的几个参数如下：

- Please select a role type: `ROLE_ACCOUNT`，是选择这个账户的类型
- Please select a key pair algorithm: `ED25519`，选择账户的公私钥生成算法
- Please select a hash algorithm: `SHA3`，选择对数据做哈希的算法
- Please select public/secret key encoding format: `BASE16, BASE58, BASE64, BASE64_URL`，选择公私钥对输出时的编码

::: warning
如果想了解 `ROLE_TYPE`、`KEY_TYPE`、`HASH_TYPE` 分别可以取哪些值，可以参考 [JS SDK 的 DID 实现](https://github.com/ArcBlock/forge-js/blob/master/forge/mcrypto/lib/index.js#L91)。
:::

::: warning
如果想全部使用默认值来创建钱包，可以执行 `forge wallet:create --defaults` 或 `forge wallet:create -d`。
:::

## 查看钱包信息

> TODO: 需要实现 wallet:inspect 命令，支持地址、私钥、公钥
