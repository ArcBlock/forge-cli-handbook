---
title: Enable or disable contracts
description: ""
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

The contract installed on the Forge chain node allows developers to temporarily disable or enable it if necessary, such as disabling it immediately after discovering contract vulnerabilities, which can reduce losses.

## View contract list

carried out `forge contract:ls` You can view a list of all installed contracts.

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
│ create_product          │ z2E3q3PUNCzMNvKi1RuT7KHJ7VnUGZMhjPQwF  │ running       │ v1       │
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

## Disable a contract

You can enable the contract according to the contract's name or DID. If the contract is in the disabled state, the disable operation cannot be performed. The disabled contract will receive the corresponding transaction when it is sent through the SDK. `unsupported_tx` mistake.

carried out `forge contract:deactivate transfer`：

```shell
ℹ Working on app-chain chain
ℹ Connect to grpc endpoint: tcp://127.0.0.1:28210
✔ Moderator checked success
✔ Contract z2E437q48tJcTQ8n7NxXDdEWt5odcjjCePSBh successfully deactivated
ℹ Run forge tx 59D4B33D8F9ACAED0954AE5C90A15FA2170377AF4B6F41867193F1B2DCC3FA80 -c app-chain to inspect the transaction
```

Then look at the Transaction sent:

```shell
forge tx 59D4B33D8F9ACAED0954AE5C90A15FA2170377AF4B6F41867193F1B2DCC3FA80
```

Get the following results:

```yaml
from: z1VFy8hB9ndynkWAAH9P1a2L5WaU7AvtKGy
nonce: 1572865894524
chainId: app-chain
pk: WUtmovNw/DfkDPaffxQc7JjGQ9qOB85hOoC6Oi8an9k=
gas: 0
delegator:
signature: 7paARuvN4e8P39nE8HZbCj8+sijAkDCLLZ2wM9MZJTGTtjc3NnP5xQTHwNhJYgZ5lxCGhxucVT086s4ArdTFBg==
signatures: (empty array)
itx:
  type: DeactivateProtocolTx
  value:
    address: z2E437q48tJcTQ8n7NxXDdEWt5odcjjCePSBh
```

Verify the contract status again, `forge contract:ls | grep transfer`In `paused` status:

```shell
│ transfer                │ z2E437q48tJcTQ8n7NxXDdEWt5odcjjCePSBh  │ paused        │ v3       │
```

## Activate a contract

You can enable the contract based on the name or DID of the contract. If the contract is in the running state, the enabling operation cannot be performed. Only the running contract can send the corresponding transaction through the SDK.

carried out `forge contract:activate transfer` You can reactivate the transfer contract you just disabled:

```shell
❯ forge contract:activate transfer
ℹ Working on app-chain chain
ℹ Connect to grpc endpoint: tcp://127.0.0.1:28210
✔ Moderator checked success
✔ Contract z2E437q48tJcTQ8n7NxXDdEWt5odcjjCePSBh successfully activated
ℹ Run forge tx 404E5F3B21A035742603E39816463A0923526C1555B92CBC1786DAACF4CE3475 -c app-chain to inspect the transaction
```

Verify contract status again `forge contract:ls | grep transfer`In `running` status:

```shell
│ transfer                │ z2E437q48tJcTQ8n7NxXDdEWt5odcjjCePSBh  │ running       │ v3       │
```
