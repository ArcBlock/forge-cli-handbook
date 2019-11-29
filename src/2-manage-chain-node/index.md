---
title: Understanding nodes and chains
description: ""
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

As we continue to understand the chain node operation and maintenance functions of the Forge CLI, it is necessary to clarify**chain**with**node**These two concepts.

## The difference between chains and nodes

From a financial perspective, most public companies in operation**chain**Are public ledgers that make up these chains**node**Is the bookkeeper responsible for maintaining the ledger.

From a technical perspective,**chain**Essentially a P2P network system,**node**As members of this network, nodes usually do not trust each other. Nodes need to run the same blockchain software (such as Forge).

## Links between chains and nodes

**chain**All in**node**Both keep a copy of the state of the chain at a point in time, that is, all the data of the public ledger. The time point mentioned here rather than the latest state is due to the non-real-time nature of data synchronization between different nodes. Chain nodes started with Forge all need to use the same version of Forge, because different versions of Forge may process different transactions.

![](./images/network.png)
