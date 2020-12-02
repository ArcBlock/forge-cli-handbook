---
title: Query transaction
description: null
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## What is a transaction?

Unlike Transaction in Bitcoin or Ethereum, which can only handle transfers, the data structure of Transaction in Forge is very cleverly designed. Contains external Transaction standard fields and extensible internal Itx fields. Why is it designed like this?

The standard fields of Transaction are like the contents that need to be filled in the envelope when writing a letter, such as the recipient, recipient address, zip code, etc., and the Itx field is the contents of the envelope. Forge natively supports more than 20 types of transactions.The main structure of these transactions is exactly the same:

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

The structure of these more than 20 types of Itx is very different.For example, what we need to send to register an account on the chain is as follows:

```protobuf
message DeclareTx {
  string moniker;                     # 账户昵称
}
```

::: warning
You can refer to Forge's built-in Transaction [Forge documentation](/docs/reference/txs)。
:::

## View a single transaction?

carried out `forge tx <hash>`You can view the details of a transaction on a chain, such as who the sender is and what the transaction content is, as shown below:

```yaml
from: z1T2S3qaVpBvzfSLJ7nTz8jniEAKQUUH9a6
nonce: 1572590138519
chainId: app-chain
pk: gW67ahtqJowGZjpYGsO+uPZsUaHYyC2k/v+ZSPbjF1E=
gas: 0
delegator: z1Wmv5ST8xn4mCJT31KTSgrNoCVz7hUtYGp
signature: dIYmCuBkbXa4Dk2y+iAsag3PIhmid9PJD8Npi7AGjGzopHhgd+U7CogVlrglotInon+IrZeE9l+krIzE79UXBg==
signatures: (empty array)
itx:
  type: TransferTx
  value:
    to: z1j8b8qftTT2u4e3H8dJNomjxPNAmwoqFKv
    value: 1000000000000000000
    assets: (empty array)
    data:
      type: json
      value: empty
```

## View multiple transactions?

carried out `forge tx:ls` The latest 10 transactions can be listed in reverse order according to the time of occurrence.
