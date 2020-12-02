---
title: Understanding contracts in Forge
description: What is a contract? How is it different from other platforms?
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

The contract in Forge is a code collection that defines the chain state change process in a certain business scenario.It mainly includes:

- Transaction processing flow
- Transaction validation logic
- Logic of chain status update after transaction execution
- Data structure used by the fair

After the chain is started, you can pass `http://localhost:8210/node/contracts` View all the contracts installed on the chain, for example, the following is the details page of the transfer contract:

![](./images/transfer.png)

It's not hard to see a few key messages about the contract here:

- The status of the contract, whether it is active or disabled
- The address of the contract, just like the account, the contract also has its own DID
- The source code of the contract, the content of the following tabs
