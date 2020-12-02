---
title: Chain node WEB interface
description: >-
  The chain node WEB interface provides a visual way to view the status of the
  chain, such as an overview? Block Browser? Query builder? Contract browser?
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

Forge has a built-in web application for visualizing the status of the chain nodes. The application contains multiple functional modules. The opening method is `forge web open`。

::: warning
If you create multiple chains, the launch method of the WEB interface of a chain is `forge web open -c chainName`, By default, the Forge CLI application is actually launched when the chain node is started. If you are using the Forge CLI in a windowless operating system, `forge web open` Is not working.
:::

## Chain node dashboard

The node dashboard briefly shows the basic information of the chain, nodes, and several key indicators of the chain. This includes:

- The name of the chain, the name of the coin, the name of the node
- Number of accounts on the chain, number of blocks, number of transactions, number of assets, etc.

In addition, the dashboard also supports real-time update mode. Click the gray bar of "Live Updates" to automatically refresh the key indicators of the chain.

![](./images/dashboard.png)

## Block Browser

The block browser supports users to conveniently browse the data on the chain, which is divided into two categories: list pages and detail pages:

### List

- Transaction list in reverse chronological order
- Block list, arranged in reverse chronological order, automatically filtering out empty blocks

### Details page

- Transaction details page, you can see the details of the transaction, as well as the original data
- Block details page, you can see all transactions in the block
- Account details page, you can see account balance, assets owned, and transactions that have occurred
- Asset details page, see asset owners, creators, historical transactions that have occurred
- Cross-chain details page, you can see the detailed information of SwapState, such as who and who exchanged, what was exchanged, whether it is currently replaced by
- Authorization details page, you can see detailed information of DelegationState, such as who is authorized to, what can be done, what are the rules

![](./images/txs.png)

### Filter function

The transaction list page supports filtering by transaction type, as shown on the right side of the figure below.

![](./images/filter.png)

### Search function

The most powerful search box in the block browser supports searching by the following keywords:

- Hash of transactions
- Block height
- DID of the account
- DID of the asset
- Swap 的 DID
- Delegation 的 DID

![](./images/search.png)

## Contract Browser

Scalable contracts are a very important part of Forge's design. It is also necessary to list all the contracts installed on the chain nodes, as follows:

![](./images/protocols.png)

### Contract details

Click the box of each contract to open the contract details page, you can see the historical version of the contract, the source code of the contract, and a simple diagram of the contract.

![](./images/protocol.png)

## List of linked nodes

How to check which nodes have completed P2P link with?

![](./images/peers.png)

## Query builder

This is a very powerful query construction tool. It is constructed on the GraphQL query interface provided by Forge. With a simple mouse click on the left side of the interface, complex data query statements can be constructed, and the results can be obtained by executing the query.

![](./images/query.png)

## Traffic simulator

The traffic simulator can be started or stopped in the WEB interface, or it can be started or stopped through the Forge CLI. For details, see [Here](../simulator)。

![](./images/simulator.png)
