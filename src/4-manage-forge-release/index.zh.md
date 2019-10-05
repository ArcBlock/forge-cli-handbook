---
title: 'Forge 发行版本是啥'
description: 'Forge 发行版本是什么？包括什么？'
keywords: 'forge, forge-cli'
author: 'wangshijun'
category: 'book'
layout: 'documentation'
tags:
  - 'forge'
---

Forge CLI 只是让开发者获取和使用 Forge 工具箱的桥梁，Forge 发行版就是包含了大部分工具组件的发布版本，会存储在 https://release.arcblock.io 上供开发者下载使用。

Forge 发行版本从开始的只包含 Forge 内核，到现在包含如下组件：

- Forge 内核: 交易处理引擎、和共识引擎、数据存储层的交互，每周会有大小版本发布
- 核心智能合约: Forge 内置的交易合约，能够帮助开发者解决 99% 的账户、交易、跨链、链上治理等业务逻辑，随着 Forge 同步发版
- Forge Desktop：桌面版链节点，随着 Forge 同步发版
- Forge Web: Forge 链节点的 Web 管理界面和区块浏览器，使用方法参考[这里](../8-explorer-other-tooling/forge-web)，随着 Forge 内核同步发版
- Forge SDK: 各种语言的 SDK，目前支持的语言包括 Elixir、Javascript、Java、Python、Rust，除 Elixir 与 Forge 同步发版之外，其他语言的 SDK 采用的是跟随发版
- Forge Simulator：流量模拟器，使用方法参考[这里](../8-explorer-other-tooling/simulator)
- dApp Workshop：dApp 原型工坊，跟随 Forge 法本
- Forge Patron：集成测试工具，目前尚未公开发布
- Forge Deploy：生产环境大规模部署的工具，目前只支持 AWS，尚未公开发布
- Forge Compiler：智能合约编译工具，跟随 Forge 发版，在 Forge CLI 里面可用
