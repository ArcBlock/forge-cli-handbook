---
title: Forge CLI 的设计理念
description: 上帝说区块链行业缺少应用开发的瑞士军刀？所以我们就做了这个
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

Forge CLI 本着下面几个原则去设计和开发：

- **重复的事情自动化**：作为 Forge 框架的首批用户，ArcBlock 的工程师在用它开发区块链应用的过程中自然会发现很多重复性的工作，这些重复性的工作标准化之后自然就变成 Forge CLI 的子模块
- **不重新发明轮子**：因为 Node.js 社区中可复用的模块众多，用它来构建我们的 Forge CLI 会事半功倍，比如方便我们组织多个自命令的 commander.js、方便构建交互式命令行的 inquirer.js 等
