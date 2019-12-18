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

::: error
基于 Forge 启动的链目前都是 POS 的链，这样的话并不是所有的节点都有资格出块，如果使用 `forge join` 把自己本地节点加入到现有的链，本地节点只同步数据，不参与出块，所以叫做观察者节点。
:::

## FAQ

### 加入之后链节点无法启动，所有服务均启动失败

::: error
你应该遇到了不应该使用 `forge join` 的情形：如果目标链存续的时间比较长，并且存续期间做过多次 `forge upgrade`，那么使用最新版的 Forge 去创建新节点，然后 join，肯定会失败，遇到这种情形，请直接使用[快照恢复的方式](../backup-and-recover)来启动新节点，简单、高效。
:::

### 启动链时 `Forge Web` 启动失败，但是用 `forge ps` 命令能看到所有相关的进程

可能是因为配置文件中 `tendermint.persistent_peers` 中部分节点的 IP 和端口不可访问造成的，可能的原因有 IP 是内网或 IP 在公网但不可访问，或者端口号被防火墙屏蔽了（在云主机上这种情形比较常见），遇到这种情况把 IP 和端口号修改为公开可访问的大概率能解决问题。

`persistent_peers` 例子: `30be24a8e4916ee3aab2ee22fb6c191efe057efe@122.27.114.130:37001`，如果包含多个 persistent_peers，中间是用逗号分隔的。

### 已有链远程返回的验证人节点数组不对？

在 Forge 的配置文件验证人节点数组那段有一段特别的开始和结束标志：

```toml
### begin validators
[[tendermint.genesis.validators]]
### end validators
```

其中的 `### begin validators` 和 `### end validators` 是 Forge 在生成给其他节点加入时使用的配置时插入验证人节点数组的起始标记，需要加这两个标记才能保证生成的结果无误。
