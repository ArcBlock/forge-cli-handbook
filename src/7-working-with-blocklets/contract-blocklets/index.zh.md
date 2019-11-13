---
title: 使用合约 Blocklet
description: 合约类 Blocklet 里面通常有什么？怎么用？
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

Forge 中的智能合约是用户自定义交易处理层逻辑的机制，Forge CLI 里面提供了多个[管理链上智能合约的子命令](../../6-working-with-contracts)，如果开发者开发了自己的智能合约并且希望分享出去给其他人用，可以将其发布为智能合约类的 Blocklet。

智能合约类 Blocklet 内含的主要内容包括：

- 合约本身的源代码
- 合约调用的例子

我们我们只发布了一个非常简单的 [智能合约](https://github.com/wangshijun/forge-product-factory-contract)。

具体使用方法：

```shell
cd /tmp
forge blocklet:use contract-product-factory
```

等待 Forge CLI 把合约代码安装完，然后：

```shell
❯ tree ./protocol
./protocol
├── config.yml
└── protocol.proto

0 directories, 2 files
```

之后就可以 `forge contract:compile`，然后 `forge contract:deploy`，然后就可以在代码里面使用这个合约了，使用这个合约的例子代码参见 [Forge JavaScript SDK](https://github.com/ArcBlock/forge-js/blob/master/examples/contract/asset_factory.js)。
