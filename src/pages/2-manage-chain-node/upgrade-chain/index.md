---
title: Soft upgrade of the chain
description: How to upgrade Forge's version with reset chain data
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

Forge is a native support for on-chain upgrades, that is, the Forge running on the chain node is updated from a lower version to a higher version without clearing the data of the chain. Next, we will discuss the specific operation steps.

Before introducing the upgrade steps, it is necessary to emphasize the differences of the down-chain upgrade in different contexts:

- In the development environment, we can reset, upgrade, start and stop the chain without worry, because you will not affect other people or users.
- In the production environment, because the entire blockchain is a distributed network, the upgrade action needs to be determined by the chain operator, and the result of the upgrade needs to be synchronized between all nodes in the entire chain

This article discusses the former case, that is, the specific approach in the development environment, of course, the production environment can also refer to.

## Forge Latest Version

When you read this, the latest version of Forge that has been released is: ![](https://img.shields.io/badge/dynamic/json.svg?color=red&label=forge-release&query=%24.latest&url=http%3A%2F%2Freleases.arcblock.io%2Fforge%2Flatest.json)

The prerequisite for upgrading is that there is a newer version than the version we are currently using.

## Upgrade rules

1.  Upgrades cannot be made across major versions
2.  Upgrade cannot cross Minor version
3.  Must be sent between iterations `upgrade node transaction(node upgrade)` To upgrade
4.  You can directly upgrade or even downgrade between the minor version and its patch version

For example:

If the version of the current chain is 1.0.1, then:

**Upgrade between patch versions**

- 1.0.1-> 1.0.1-p2: free upgrade
- 1.0.1-p2-> 1.0.1-p3: free upgrade
- 1.0.1-p2-> 1.0.3: must pass `node upgrade` To upgrade
- 1.0.1-p2-> 1.0.100: must pass `node upgrade` To upgrade

**Upgrade between major / minor versions**

- 1.0.1-p1-> 1.1.0: must pass `node upgrade` To upgrade
- 1.0.1-p1-> 1.1.1: You cannot upgrade directly. You can only upgrade to 1.1.0 first, and then upgrade to 1.1.1.
- 1.0.1-p1-> 2.0.0: You cannot upgrade directly. You can only upgrade to it first. You can only upgrade in the following order: 1.0.1-p1-> 1.1.0-> 1.2.0-> ... -> 1.x.0 (the last 1.x feature update version)-> 2.0.0

## Upgrade steps

### Download new version of Forge

If you want to remove the local Forge chain from `v0.38.4` upgrade to `v0.38.7`Need to download Forge first `v0.38.7` For all components, execute the following command:

```shell
forge download v0.38.7

# or
forge download v0.38.7 --mirror https://releases.arcblockio.cn
```

::: warning
Note that you need to use `forge download` Instead of `forge install`See the difference between the two [Here](../../4-manage-forge-release/download-install-release)。
:::

### Perform the upgrade operation

Everything is ready, let's run again: `forge upgrade`As shown in the figure below, several upgrade configurations need to be made:

- To upgrade to, select `v0.38.7`
- At which block height to upgrade, you can add appropriate increments based on the current block height, such as the current block height `3`We are `23` The block is higher than the upgrade. If the block time is configured for 3 seconds, it means that the upgrade will occur after 1 minute.
- Confirm the upgrade operation, because this operation is irreversible, if you regret it here, enter `N` Or `Ctrl + C` Cancel

After confirming the carriage return, Forge CLI will send 1 to the chain as an administrator. `UpgradeNode` After the transaction is successfully packaged, the Forge chain will stop at a preset height, and then the Forge CLI will start the chain again after detecting that the Forge chain is completely stopped, thus completing the entire upgrade process.

### Verify upgrade results

How do I verify that the upgrade was successful? Execute again `forge status`, Check the version number in the current chain status, it has become the upgraded version.

### Video tutorial

!TerminalPlayer[](./images/upgrade-network.yml)

## Upgrade FAQ?

### Exited because there is no new version

`Abort because no available newer version to upgrade` Indicates that no newer version can be upgraded and needs to be used first `forge download` go download.

### Exited because there is no administrator private key

Forge requires that high-privilege operations such as upgrades must be signed by the administrator's private key. If not, you need to configure them according to these two documents:

- [Initial configuration](../../1-introduction/initial-setup)
- [Global configuration](../../9-customization/global-config)

### Exited because the administrator address does not match

If the DID derived from the administrator's private key that the Forge CLI can read does not match the administrator's DID on the chain, then there is a high probability that the read administrator's private key is wrong, because Forge is verifying high-privilege operations The public key and address derived from the private key need to be used for verification during the transaction. If it is not correct, the transaction will definitely fail and the upgrade will not be possible.

## If you encounter other problems?

At this point, the preparation, upgrade, and verification of the Forge Chain soft upgrade are complete. Have you successfully upgraded? If you encounter problems, welcome to [Forge CLI](https://github.com/ArcBlock/forge-cli) The official warehouse mentions Issue.
