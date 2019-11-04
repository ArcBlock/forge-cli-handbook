---
title: 查询区块
description: ""
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

区块里面通常包含任意笔交易，区块本身可以用区块高度来标识，Forge CLI 提供了多种语法来查询区块信息，可以用 `forge help block` 来列出这些语法：

```shell
❯ forge help block
Usage: block [options] [height]

Get the block info from the running node

Options:
  -d, --show-txs  Show transaction details
  -f, --stream    Streaming new blocks on the chain
  -h, --help      output usage information

Examples:
  - forge block                display latest block, txs not printed
  - forge block -f             Streaming for new blocks generated
  - forge block --show-txs     display latest block, txs printed
  - forge block 123            display block at height 123
  - forge block last           display latest block
  - forge block first          display first block
  - forge block 123,456        display 2 blocks
  - forge block 1...4          display block from height 1,2,3,4
```

## 查询特定块高的区块

`forge block 12` 就可以查询块高为 12 的区块信息，得到如下结果：

```yaml
height:           12
numTxs:           0
time:             2019-10-30T02:42:58.078Z
appHash:          b465db4961387129cd6b2bc9c12bf253594c4ffddd0026f961ba38502b09fdff
totalTxs:         0
invalidTxs:
  (empty array)
txsHashes:
  (empty array)
invalidTxsHashes:
  (empty array)
dataHash:
evidenceHash:
lastResultsHash:
version:
lastBlockId:
  partsHeader:
    total: 1
```

不难看出块高为 12 的区块中不包含任何 Transaction。

## 查询特定块高的详情

`forge block 12 --show-txs` 就可以查询块高为 12 的区块信息，并且把 Transaction 信息打出来。

## 查询某几个区块

`forge block 1...4`，查询块高从 1 到 4 的所有区块。

## 实时查询新出的快

`forge block -f` 用来查询实时出的快。
