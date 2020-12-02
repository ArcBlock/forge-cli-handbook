---
title: 创建自己的合约
description: '如何根据业务需要编写自定义的合约？'
keywords: 'forge, forge-cli'
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## 创建脚手架

使用 `forge contract:create` 可以快速的创建合约的脚手架文件，基本过程如下：

### 创建目录

```shell
mkdir demo-contract
cd demo-contract
```

### 初始化合约

```shell
❯ forge contract:create
? Please input contract name: demo_contract
? Please input contract description: Demo contract
✔ File contract.proto created...
✔ File contract.yml created...
✔ File config.yml created...

✔ Contract directory structure is created successfully!
```

### 查看合约文件

```shell
❯ tree ../
.
├── config.yml
├── contract.proto
└── contract.yml

0 directories, 3 files
```

## 编写合约代码

> TODO: 如何更新状态，如何定义 Pipeline

## 合约的调试

合约编写之后自然需要部署到链节点上去进行调试，编译和部署方法参见[这里](../compile-deploy-contract/index.md)。
