---
title: 查询交易
description:
keywords: 'forge, forge-cli'
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## 什么是交易？

不同于比特币或者以太坊中的 Transaction 只能处理转账，Forge 中 Transaction 的数据结构设计的非常巧妙。包含外部 Transaction 标准字段和可扩展的内部 Itx 域，为什么要设计成这样？

Transaction 的标准字段就如同写信时信封上需要填写的内容，比如收件人、收件地址、邮编等等，而 Itx 域是信封里面的内容。Forge 原生支持超过 20 种 Transaction，这些 Transaction 的主体结构是完全相同的：

```protobuf
message Transaction {
  string from = 1;                    # 这个tx是谁发的，即钱包地址
  uint64 nonce = 2;                   # nonce 用来防止重敌攻击，每次需要递增发送
  string chain_id = 3;                # tx发送至的链的id
  bytes pk = 4;                       # 发tx的钱包的公钥
  bytes signature = 13;               # 发tx的钱包的签名
  repeated multisig signatures = 14;  # 多方签名
  google.protobuf.Any itx = 15;       # inner transaction ，这个tx具体是干啥的
}
```

这 20 多种 Itx 的结构则存在很大的差异，比如我们要去链上注册账户需要发送的内容如下：

```protobuf
message DeclareTx {
  string moniker;                     # 账户昵称
}
```

::: warning
关于 Forge 内置的 Transaction 可以参考 [Forge 文档](/docs/reference/txs)。
:::

## 查看单笔交易？

执行 `forge tx <hash>`，可以查看某笔链上交易（Transaction）的详情，比如发送者是谁，交易内容是什么，如下图：

```yaml
from:       z1T2S3qaVpBvzfSLJ7nTz8jniEAKQUUH9a6
nonce:      1572590138519
chainId:    app-chain
pk:         gW67ahtqJowGZjpYGsO+uPZsUaHYyC2k/v+ZSPbjF1E=
gas:        0
delegator:  z1Wmv5ST8xn4mCJT31KTSgrNoCVz7hUtYGp
signature:  dIYmCuBkbXa4Dk2y+iAsag3PIhmid9PJD8Npi7AGjGzopHhgd+U7CogVlrglotInon+IrZeE9l+krIzE79UXBg==
signatures:
  (empty array)
itx:
  type:  TransferTx
  value:
    to:     z1j8b8qftTT2u4e3H8dJNomjxPNAmwoqFKv
    value:  1000000000000000000
    assets:
      (empty array)
    data:
      type:  json
      value: empty
```

## 查看多笔交易？

执行 `forge tx:ls` 能按照发生的时间倒序列出最新的 10 条 Transaction。
