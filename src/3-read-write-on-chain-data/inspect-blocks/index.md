---
title: Query block
description: ""
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

A block usually contains any transaction. The block itself can be identified by the block height. Forge CLI provides multiple syntaxes to query the block information. `forge help block` To list these syntaxes:

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

## Query a specific block height block

`forge block 12` You can query the block information with a block height of 12 and get the following results:

```yaml
height: 12
numTxs: 0
time: 2019-10-30T02:42:58.078Z
appHash: b465db4961387129cd6b2bc9c12bf253594c4ffddd0026f961ba38502b09fdff
totalTxs: 0
invalidTxs: (empty array)
txsHashes: (empty array)
invalidTxsHashes: (empty array)
dataHash:
evidenceHash:
lastResultsHash:
version:
lastBlockId:
  partsHeader:
    total: 1
```

It is not difficult to see that the block with a block height of 12 does not contain any transactions.

## Query details of a specific block height

`forge block 12 --show-txs` You can query the block information with a block height of 12 and type out the transaction information.

## Querying certain blocks

`forge block 1...4`, Query all blocks with a block height from 1 to 4.

## Real-time query new

`forge block -f` Used to query the speed of real-time output.
