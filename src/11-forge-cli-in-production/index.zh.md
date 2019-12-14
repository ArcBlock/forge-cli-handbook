---
title: 理解生产环境
description: 生产环境？开发环境？
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - deployment
  - production
---

开发过企业级应用的同学都知道**环境隔离**的重要性，在**开发环境**数据随时可以删掉重新构建，但是**线上环境**（或者这里说的生产环境），任何数据都应该当做资产来对待，在区块链上更是如此，因为链上的数据不仅仅属于节点运营方，还属于用户。

::: error
传统应用运维中线上数据库的用户名和密码等敏感信息需要妥善保存，在区块链的世界里面，因为每个链节点都会有自己的私钥，出块的时候做签名，所以每个节点需要妥善保管好自己的私钥，丢失私钥就相当于丢失节点的控制权，和传统数据里面的数据库被入侵后果相同。
:::

Forge CLI 的目标是在贯穿区块链应用环境搭建、开发、部署、运维整个过程，前面基本介绍的是开发、测试环节的功能，这里我们会介绍 Forge CLI 在生产环境的用法。

本小节会覆盖这几个场景，未来还会添加更多：

- 我有自己的机器，[如何用 Forge CLI 加入运行中的链去同步数据](./join-existing-network)？
- 我开发了区块链应用，[如何用 Forge CLI 为这个应用部署的私链](./deploy-multi-node-network)？
- 我有多个业务合作方，[如何用 Forge CLI 启动多方共建共享的联盟链](./deploy-multi-party-network)？
- 我需要在局域网部署，[如何用 Forge CLI 在局域网里面部署](./deploy-in-intranet)？
- 随着业务和社区发展，[如何用 Forge CLI 更新验证人节点](./add-remove-validator)？
- 作为链的运维，[如何做链节点的备份和恢复](./backup-and-recover)、[如何使用 Forge 守护进程](./use-forge-starter)
