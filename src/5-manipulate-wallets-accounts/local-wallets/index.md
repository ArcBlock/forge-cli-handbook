---
title: Generate and view wallets
description: "The key to wallet security is the private key, how to save it is important"
keywords: "accounts, wallets"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## Randomly generated wallet

`forge wallet:create` It is used to create a random wallet. The SDK directly generates a private key randomly through mathematical methods, and then calculates the public key through cryptography to form a public and private key pair. `ROLE_TYPE`、 `KEY_TYPE`、 `HASH_TYPE` To calculate the DID, the entire process does not involve the Forge chain nodes. The public and private key pairs created in this way are more suitable for use in code.

The basic process of creating a wallet is demonstrated as follows:

!TerminalPlayer[](./images/create-wallet.yml)

The following parameters need to be selected for the entire creation process:

- Please select a role type: `ROLE_ACCOUNT`Is to select the type of this account
- Please select a key pair algorithm: `ED25519`, Select the public and private key generation algorithm for the account
- Please select a hash algorithm: `SHA3`, Choose the algorithm to hash the data
- Please select public/secret key encoding format: `BASE16, BASE58, BASE64, BASE64_URL`, Select the encoding of the public and private key pair output

::: warning
If you want to know `ROLE_TYPE`、 `KEY_TYPE`、 `HASH_TYPE` Which values can be taken separately, refer to [DID implementation of JS SDK](https://github.com/ArcBlock/forge-js/blob/master/forge/mcrypto/lib/index.js#L91)。
:::

::: warning
If you want to use the default value to create the wallet, you can execute `forge wallet:create --defaults` Or `forge wallet:create -d`。
:::

## View wallet information

> TODO: Need to implement wallet: inspect command, support address, private key, public key
