---
title: Use contract blocklet
description: What is usually in a contract blocklet? how to use?
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

The smart contract in Forge is a mechanism for user-defined transaction processing layer logic. Forge CLI provides multiple [Subcommands for managing smart contracts on the chain](../../6-working-with-contracts)If a developer develops his own smart contract and wants to share it with others, he can publish it as a smart contract blocklet.

The main contents of the smart contract blocklet include:

- The source code of the contract itself
- Example of contract call

We we just published a very simple [Smart contract](https://github.com/wangshijun/forge-product-factory-contract)。

Specific use method:

```shell
cd /tmp
forge blocklet:use contract-product-factory
```

Wait for the Forge CLI to install the contract code, then:

```shell
❯ tree ./protocol
./protocol
├── config.yml
└── protocol.proto

0 directories, 2 files
```

After that `forge contract:compile`And then `forge contract:deploy`, And then you can use this contract in the code. For an example code using this contract, see [Forge JavaScript SDK](https://github.com/ArcBlock/forge-js/blob/master/examples/contract/asset_factory.js)。
