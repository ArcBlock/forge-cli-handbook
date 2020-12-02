---
title: 查询合约
description: ""
keywords: 'forge, forge-cli'
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## 什么是合约？

Forge 中的合约指定义了某种 Transaction 的数据结构和处理流程，并且被编译部署到链上可供调用的代码集合，Forge 链内置了超过 20 种合约。

## 如何查看合约？

执行 `forge contract:ls` 可以列出来所有安装的合约的名称、地址、状态、版本等，如下：

```shell
❯ forge contract:ls
ℹ Working on app-chain chain
ℹ Connect to grpc endpoint: tcp://127.0.0.1:28210
┌─────────────────────────┬────────────────────────────────────────┬───────────────┬──────────┐
│ Name                    │ Address                                │ Status        │ Version  │
├─────────────────────────┼────────────────────────────────────────┼───────────────┼──────────┤
│ account_migrate         │ z2E3wc5M69FNz4eN3L8KGcKbTUeESMeiTDK8C  │ running       │ v3       │
│ acquire_asset           │ z2E3tU36rsGMbB1Sr2TRWE4WgX8qneMJmG9qX  │ running       │ v6       │
│ activate_protocol       │ z2E49KHCGDgvKteUbBAHB1bgGmLiYZ7hxPVFH  │ running       │ v1       │
│ approve_withdraw        │ z2E3orGQKBJrFdkxWvTf8K8Z6mAxG1tYRaKUA  │ running       │ v2       │
│ consume_asset           │ z2E3pddZJHqtK9hymvjgSgsgLXvD6f3tSWKK9  │ running       │ v3       │
│ core                    │ z2E3zcZAgBLch7fB4P9mmx7Lw9kH3QQ1RKhh3  │ running       │ v5       │
│ create_asset            │ z2E42KP93Lr896XpAkFjLv3BZW6pCbWWdoyRd  │ running       │ v6       │
│ deactivate_protocol     │ z2E46E1jKAvQLC4qABJpfGNHAtrHbotDhQ44z  │ running       │ v1       │
│ declare                 │ z2E3sqY2RFh9CLGx134g1qVn7DcaVc5jeqMj3  │ running       │ v3       │
│ delegate                │ z2E4AQyu8pUTmRSL7UNCnjZTs7sAvsxacZLYZ  │ running       │ v1       │
│ deploy_protocol         │ z2E3uHN9MGG2chi4ML8pGjomSys2q31Hmzn8H  │ running       │ v3       │
│ deposit_token           │ z2E4ATLe6TeDUk422iRRaRauYjtLmVbSLzh9N  │ running       │ v5       │
│ exchange                │ z2E3rfQZpG5eQPg9dz863g9pNdxrVi7wN7D1B  │ running       │ v4       │
│ poke                    │ z2E3pS5UkHQxTeYt5NeqXcs6tngnVfoDFGTLQ  │ running       │ v6       │
│ retrieve_swap           │ z2E3xUwLP5xzHCgS6x4JF9WanK1MxpsFojots  │ running       │ v1       │
│ revoke_delegate         │ z2E3xAfZggwhcuCaVcAA96rtoKzXsQpw2PsWk  │ running       │ v1       │
│ revoke_swap             │ z2E42wimeTd5vF88mUrAoEsCsoMGRWFEAzBAL  │ running       │ v1       │
│ revoke_withdraw         │ z2E482FTjgLRWYzqvpZuCC1etYfggPUj9C1nK  │ running       │ v3       │
│ setup_swap              │ z2E3qAdkcMAMQdgN7K67GCrAVC8e4ANccsyz8  │ running       │ v1       │
│ transfer                │ z2E437q48tJcTQ8n7NxXDdEWt5odcjjCePSBh  │ running       │ v3       │
│ update_asset            │ z2E49VutnZhgyWupoLjDvobk3FpKiNmUKq6gf  │ running       │ v3       │
│ upgrade_node            │ z2E3ngrkaxJtLr48gDeVt3wEE3SybXAUXmqTK  │ running       │ v4       │
│ withdraw_token          │ z2E3rdKU7wvnpoQ1grVidqt5FBem6LCAKq9ix  │ running       │ v3       │
└─────────────────────────┴────────────────────────────────────────┴───────────────┴──────────┘
```
