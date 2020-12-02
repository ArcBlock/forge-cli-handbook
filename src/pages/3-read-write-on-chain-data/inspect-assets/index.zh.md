---
title: 查询资产
description: "资产是什么？资产和账户有什么关系？"
keywords: 'forge, forge-cli'
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## 何为资产？

区块链上可以存储的价值除了通证之外，还可以是大量的非通证类资产，比如一篇文章、一张图片、一张地图或是一个证书。资产可以由某个用户创建，或者应用程序来创建，一旦创建后，可以用来进行交易、使用等行为。具体是做什么取决于应用程序。

Forge 中的非通证类资产叫做 `asset`，关于资产的更多介绍详见[这里](/docs/intro/concepts/assets)。

## 查看资产？

Forge 链上的资产也有自己的 DID，而资产状态里面保存了资产的所有者、创建时间、修改时间、资产所包含的信息等内容。Forge CLI 支持根据资产的 DID 去查看资产状态：

`forge asset zjdeSHvn5GJ1LgmwFxV6j4EQYjoxCos2eNPf`，得到如下结果：

```yaml
address:       zjdeSHvn5GJ1LgmwFxV6j4EQYjoxCos2eNPf
owner:         z1ebSE3JjCJgqrrzSWzUhCFWFNb5hqNv8Sj
moniker:       asset
readonly:      false
transferrable: true
ttl:           0
issuer:        z1QzSGHkSGsSJSZd2mBZvkKEqWjVU4vNwme
parent:
stake:
  totalStakes:          0
  totalUnstakes:        0
  totalReceivedStakes:  0
  recentStakes:
    items:
      (empty array)
    typeUrl:  fg:x:address
    maxItems: 128
    circular: true
    fifo:     false
  recentReceivedStakes:
    items:
      (empty array)
    typeUrl:  fg:x:address
    maxItems: 128
    circular: true
    fifo:     false
context:
  genesisTx:       C9F822F1A29D0F996EEFA81CFB60273E8A4B5677876B9D20FAEC2D0528D23576
  renaissanceTx:   67040ED84E312C8A7A6739FE7DB774CCE911595C83746A323E0CFB0015746A0E
  genesisTime:     2019-10-31T05:25:55.331Z
  renaissanceTime: 2019-10-31T05:26:00.397Z
data:
  type:  json
  value:
    key: value2
```
