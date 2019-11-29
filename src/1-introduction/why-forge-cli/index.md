---
title: Forge CLI Design Concept
description: >-
  God said the blockchain industry lacks a Swiss Army Knife for application
  development? So we did this
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

The original intention of the Forge CLI is to solve our own needs, because ArcBlock engineers will have to repeat the work when developing blockchain applications using the Forge framework. Forge CLI is designed and developed according to the following principles:

- **Automation of duplicated things**: As the first users of the Forge framework, ArcBlock's engineers are using it to solve repetitive tasks in the blockchain application delivery process
- **Eat your own dog food**: All self-commands are used by us when developing blockchain applications. In the process of developing the Forge CLI, we will use Forge, [Forge SDK](https://www.npmjs.com/package/@arcblock/forge-sdk)To do a thorough test of your product
- **Do not reinvent the wheel**: Because there are so many reusable modules in the Node.js community, using it to build our Forge CLI will do more with less. For example, it is convenient for us to organize multiple self-command [commander.js](https://www.npmjs.com/package/commander)Easy to build interactive command line [inquirer.js](https://www.npmjs.com/package/inquirer) Wait
