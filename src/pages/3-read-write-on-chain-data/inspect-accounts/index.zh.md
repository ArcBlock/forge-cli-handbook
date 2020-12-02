---
title: 查询账户
description: ""
keywords: 'forge, forge-cli'
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

使用 `forge account <address>` 就能查看账户 DID（如果你还不知道 DID 是什么，请[猛击这里](../../5-manipulate-wallets-accounts/)） 为 `address` 的账户在链上的状态，包括账户的创建时间、更新时间、拥有的 Token 数量、Asset 列表等，执行 `forge account z1T2S3qaVpBvzfSLJ7nTz8jniEAKQUUH9a6` 结果如下：

```yaml
Account Type:
role: ROLE_ACCOUNT
pk:   ED25519
hash: SHA3

──────────────
Account State:
balance:      24 TOKEN
nonce:        4
numTxs:       3
address:      z1T2S3qaVpBvzfSLJ7nTz8jniEAKQUUH9a6
pk:           2CYVsP1zR//6R9JUCVsERQM1t7IcA8JJn3K+/C7tIrs=
moniker:      user_alice
context:
  genesisTx:       2E2E21125FBB72A6D7ABE90705E66E6804BD48C378F94F22EEBF570EDDB78F4D
  renaissanceTx:   58ED9360B6A1ABA18733056DD353E0F91EEF31293E8B2D01C2D5723777CB2DDA
  genesisTime:     2019-11-01T06:35:30.482Z
  renaissanceTime: 2019-11-01T06:35:35.552Z
issuer:
gasBalance:   0
migratedTo:
  (empty array)
migratedFrom:
  (empty array)
numAssets:    0
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
```
