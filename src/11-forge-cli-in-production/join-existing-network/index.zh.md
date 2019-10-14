---
title: 加入现有的链
description: 分布式公开账本的特性让人人都可以成为链的监督员
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - production
  - deployment
---

区块链常被技术人简单描述为：分布式的、公开的、不可篡改的账本，那么如果你使用了一个比较有趣的区块链应用，而这个应用的数据存储在自己的链上，除了自己去他们的链节点上查看数据之外，你还可以使用 Forge CLI 加入到那条链上去同步数据，成为观察者节点。

## `forge join <endpoint>`

Forge CLI 提供的 `join` 功能能让用户意见成为指定链的观察者节点，要想成为某条链的观察者，需要先找到这条链的一个节点的 API Endpoint，以 ArcBlock 启动的 Bromine 测试链为例，起链节点 WEB 地址为：[https://bromine.abtnetwork.io](https://bromine.abtnetwork.io)，那么对应的 API 地址就是：[https://bromine.abtnetwork.io/api](https://bromine.abtnetwork.io/api)，直接用浏览器访问这个 API 地址会得到如下的输出：

```json
{
  "errors": [
    {
      "message": "No query document supplied"
    }
  ]
}
```

需要注意的是，加入已有的链会把你本地当前节点的数据清空，具体操作如下：

!TerminalPlayer[](./images/join-network.yml)

关于上面演示的几点说明：

- 执行 `forge chain:create shadow -d`，用默认配置创建新的链节点，命名为 shadow
- 执行 `forge join http://127.0.0.1:8210/api -c shadow`，让 shadow 的节点加入本地的 `test-chain`
- 执行 `forge start shadow`，启动 shadow 节点

> TODO: 演示的时候用远程的节点

::: error
基于 Forge 启动的链目前都是 POS 的链，这样的话并不是所有的节点都有资格出块，如果使用 `forge join` 把自己本地节点加入到现有的链，本地节点只同步数据，不参与出块，所以叫做观察者节点。
:::
