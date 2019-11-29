---
title: Query assets
description: What are assets? What is the relationship between assets and accounts?
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

## What is an asset?

In addition to tokens, the value that can be stored on the blockchain can also be a large number of non-token assets, such as an article, a picture, a map, or a certificate. Assets can be created by a user or an application. Once created, they can be used for transactions, usage, and other behaviors. What you do depends on the application.

The non-token asset in Forge is called `asset`For more information about assets, see [Here](/docs/intro/concepts/assets)。

## View assets?

Assets on the Forge chain also have their own DID, and the asset status holds the asset owner, creation time, modification time, and information contained in the asset. Forge CLI supports viewing asset status based on the DID of the asset:

`forge asset zjdeSHvn5GJ1LgmwFxV6j4EQYjoxCos2eNPf`And get the following results:

```yaml
address: zjdeSHvn5GJ1LgmwFxV6j4EQYjoxCos2eNPf
owner: z1ebSE3JjCJgqrrzSWzUhCFWFNb5hqNv8Sj
moniker: asset
readonly: false
transferrable: true
ttl: 0
issuer: z1QzSGHkSGsSJSZd2mBZvkKEqWjVU4vNwme
parent:
stake:
  totalStakes: 0
  totalUnstakes: 0
  totalReceivedStakes: 0
  recentStakes:
    items: (empty array)
    typeUrl: fg:x:address
    maxItems: 128
    circular: true
    fifo: false
  recentReceivedStakes:
    items: (empty array)
    typeUrl: fg:x:address
    maxItems: 128
    circular: true
    fifo: false
context:
  genesisTx: C9F822F1A29D0F996EEFA81CFB60273E8A4B5677876B9D20FAEC2D0528D23576
  renaissanceTx: 67040ED84E312C8A7A6739FE7DB774CCE911595C83746A323E0CFB0015746A0E
  genesisTime: 2019-10-31T05:25:55.331Z
  renaissanceTime: 2019-10-31T05:26:00.397Z
data:
  type: json
  value:
    key: value2
```
