---
title: Get Forge Release
description: ""
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

## use `forge install` Install Forge

In [One-click chain and coin issuance](../../1-introduction/getting-started) We already know how to get the release version of Forge, that is, use `forge install latest` To install the latest version, of course if you know exactly which version you want to install, for example `v0.37.7`Can be executed `forge install v0.37.7`For detailed usage of installing Forge distribution, see the following demo:

!TerminalPlayer[](./images/1-forge-install.yml)

Attentive students may notice that two installations were performed in the demo, and the command for the second installation was: `forge install v0.37.7 --force`,one of them `--force` The parameter is a forced re-download, because by default Forge CLI supports continuing to download an incomplete and incomplete version.

## use `forge download` Download Forge

Follow `forge install` Similar one `forge download` Command, the functions of the two are almost the same, the difference is that `forge install` After the download is complete, the Forge version currently used by the current Forge CLI will be switched to the version just downloaded, and `forge download` Without this step, this is because Forge CLI supports the creation of multiple chains by default, and supports different chains using different versions of Forge. Forge CLI needs to know which version the user wants to use when creating a new chain.

**download**with**installation**The difference is like the difference between downloading and installing when you want to install a software in your computer.

In some cases we just need**download**A version of Forge release, like we are doing [On-chain upgrade](../../2-manage-chain-node/upgrade-chain)You need to download the version you want to upgrade to locally first.
