---
title: Understanding the production environment
description: Production Environment? Development environment?
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - deployment
  - production
---

Students who have developed enterprise applications know**Environmental isolation**The importance of**Development environment**Data can be deleted and rebuilt at any time, but**Online environment**(Or the production environment here), any data should be treated as an asset, especially on the blockchain, because the data on the chain not only belongs to the node operator, but also to the user.

::: error
In the traditional application operation and maintenance, sensitive information such as user names and passwords of online databases needs to be properly stored. In the blockchain world, because each chain node will have its own private key, and it will be signed when the block is issued, so each node needs Keep your private key properly. Losing the private key is equivalent to losing control of the node, and it has the same consequences as a database intrusion in traditional data.
:::

::: error
A forge powered chain must have a at least 3 nodes setup in production environments.
:::

The goal of Forge CLI is to run through the entire process of building, developing, deploying, operating and maintaining the blockchain application environment. The basic introduction to the previous is the functions of the development and testing links. Here we will introduce the use of Forge CLI in the production environment.

This section will cover these scenarios, and more will be added in the future:

- I have my own machine, [How to use Forge CLI to join a running chain to synchronize data](./join-existing-network)？
- I developed a blockchain application, [How to deploy a private chain for this application using the Forge CLI](./deploy-multi-node-network)？
- I have multiple business partners, [How to use Forge CLI to start a multi-party shared alliance chain](./deploy-multi-party-network)？
- Our business needs to be deployed in the local area network, [How to use Forge CLI to deploy in LAN](./deploy-in-intranet)？
