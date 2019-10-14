---
title: 创建和使用账户
description: 要发起交易，必须先注册账户，是不是和传统应用特别像？
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

### 创建账户

`forge account:create` 用来创建远程钱包，或者受托管的钱包，是通过 forge 提供的 gRPC 接口创建，钱包信息存储在处理这个 gRPC 请求的节点的磁盘上，当然是加密存储的，而创建远程钱包时需要设定的密码就是用来加密钱包的公私钥信息的，gRPC 接口在生成钱包公私钥的之后会自动去链上帮这个账户做 Declare，创建完成之后，可以直接用这个账户去发送交易了。需要注意的是，这里说的远程钱包其实不是严格意义上的远程，钱包文件都存在节点的磁盘上，并且不会在多个节点间同步。
