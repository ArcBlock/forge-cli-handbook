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

Forge CLI 的产生初衷是为了解决我们自己的需求，因为 ArcBlock 的工程师在使用 Forge 框架开发区块链应用时会有这样那样的重复工作。Forge CLI 的设计和开发遵循下面几个原则：

- **重复的事情自动化**：作为 Forge 框架的首批用户，ArcBlock 的工程师在用它来解决区块链应用交付过程中的重复性工作
- **吃自己的狗粮**：所有的自命令都是我们自己在开发区块链应用时会用到的，在开发 Forge CLI 的过程中我们会使用 Forge、[Forge SDK](https://www.npmjs.com/package/@arcblock/forge-sdk)，对自己的产品做充分的测试
- **不重新发明轮子**：因为 Node.js 社区中可复用的模块众多，用它来构建我们的 Forge CLI 会事半功倍，比如方便我们组织多个自命令的 [commander.js](https://www.npmjs.com/package/commander)、方便构建交互式命令行的 [inquirer.js](https://www.npmjs.com/package/inquirer) 等
