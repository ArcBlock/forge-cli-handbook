---
title: Create your own contract
description: How to write custom contracts based on business needs?
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

## Create scaffolding

To use `forge contract:create` You can quickly create a scaffolding file for a contract. The basic process is as follows:

### Create a directory

```shell
mkdir demo-contract
cd demo-contract
```

### Initialize the contract

```shell
❯ forge contract:create
? Please input contract name: demo_contract
? Please input contract description: Demo contract
✔ File contract.proto created...
✔ File contract.yml created...
✔ File config.yml created...

✔ Contract directory structure is created successfully!
```

### View contract documents

```shell
❯ tree ../
.
├── config.yml
├── contract.proto
└── contract.yml

0 directories, 3 files
```

## Writing contract code

> TODO: How to update status, how to define Pipeline

## Commissioning of the contract

After the contract is written, it naturally needs to be deployed to the chain node for debugging. For compilation and deployment methods, see [Here](../compile-deploy-contract/index.md)。
