---
title: Join an existing chain
description: >-
  The characteristics of a distributed public ledger allow everyone to become a
  chain supervisor
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - production
  - deployment
---

Blockchain is often simply described by technical people as: distributed, open, and tamper-proof ledger, then if you use a more interesting blockchain application, and the data of this application is stored on its own chain, except In addition to viewing the data on their own chain nodes, you can also use the Forge CLI to join that chain to synchronize the data and become an observer node.

## `forge join <endpoint>`

Forge CLI `join` The function allows users' opinions to become observer nodes of a specified chain. To become an observer of a chain, you need to find the API Endpoint of a node of this chain. Take the Bromine test chain started by ArcBlock as an example, and start the node WEB The address is: <https://bromine.abtnetwork.io>, Then the corresponding API address is: <https://bromine.abtnetwork.io/api>, Accessing this API address directly with a browser will get the following output:

```json
{
  "errors": [
    {
      "message": "No query document supplied"
    }
  ]
}
```

It should be noted that joining the existing chain will clear the data of your local current node. The specific operation is as follows:

!TerminalPlayer[](./images/join-network.yml)

A few notes about the above demonstration:

- carried out `forge chain:create shadow -d`Create a new chain node with the default configuration and name it shadow
- carried out `forge join http://127.0.0.1:8210/api -c shadow`Let the shadow nodes join the local `test-chain`
- carried out `forge start shadow`To start the shadow node

::: error
Forge-based chains are currently POS chains, so not all nodes are eligible to produce blocks. If you use `forge join` Add your own local node to the existing chain. The local node only synchronizes data and does not participate in block generation, so it is called an observer node.
:::

## FAQ

### When starting the chain `Forge Web` Startup failed, but with `forge ps` Command can see all related processes

May be because in the configuration file `tendermint.persistent_peers` The IP and port are not accessible. Possible reasons are that the IP in the internal network is inaccessible on the public network, or the port number is blocked by the firewall (this situation is more common on cloud hosts). Modifying the port number and port number to a publicly accessible high probability can solve the problem.

`persistent_peers` Example: `30be24a8e4916ee3aab2ee22fb6c191efe057efe@122.27.114.130:37001`

### Is the validator node array returned by an existing chain remote?

There is a special start and end mark in the Forge configuration file validator node array:

```toml
### begin validators
[[tendermint.genesis.validators]]
### end validators
```

one of them `### begin validators` with `### end validators` It is Forge that inserts the start tag of the validator node array when generating the configuration used by other nodes to join. You need to add these two tags to ensure that the generated results are correct.
