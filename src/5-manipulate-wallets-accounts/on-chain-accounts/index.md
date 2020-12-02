---
title: Create and use account
description: >-
  To initiate a transaction, you must first register for an account. Is it
  particularly similar to traditional applications?
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

### create Account

`forge account:create` The remote wallet or hosted wallet is created through the gRPC interface provided by forge. The wallet information is stored on the disk of the node that processes this gRPC request. Of course, it is encrypted and stored. You need to set it when you create a remote wallet The password is used to encrypt the public and private key information of the wallet. After generating the public and private key of the wallet, the gRPC interface will automatically go to the chain to help this account as Declare. After the creation, you can directly use this account to send transactions. It should be noted that the remote wallet mentioned here is actually not remote in the strict sense. The wallet files are stored on the disks of the nodes and will not be synchronized between multiple nodes.
