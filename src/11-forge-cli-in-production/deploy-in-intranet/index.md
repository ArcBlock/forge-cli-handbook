---
title: Local area network deployment method
description: >-
  How to install and deploy the Forge chain in an environment with restricted
  access to the Internet
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
  - deploy
---

This tutorial is suitable for users who need to install the Forge CLI and start the Forge chain in an environment with restricted access to the Internet. Restricted access to the external network means that the machine on which the Forge chain is installed and running can only access the local area network. Under normal circumstances, to start the Forge chain, you need to install the Forge CLI first, and then use it to install Forge. Both steps require access to the external network.

How to install and deploy Forge chain in LAN? The following is the basic approach to get two links.

## Install Forge CLI on LAN?

[Forge CLI](https://www.npmjs.com/package/@arcblock/forge-cli) All versions of are released on npm official [package registry](https://registry.npmjs.org) On the Internet, most companies with LANs will mirror this registry for themselves. For example, the image of Taobao is `https://registry.npm.taobao.org`。

To install the Forge CLI in a local area network, you must first ask your network administrator to set up an available npm registry image and set the synchronization frequency of the image appropriately. Use this when installing Forge CLI: `npm install -g @arcblock/forge-cli --registry https://registry.domain.com`。

How to make the Forge CLI permanent with custom `npm registry` Configuration item? Forge CLI supports global configuration after 0.37.10 `npmRegistry` Options.

The location of the global configuration file is generally at: `~/.forgerc.yml`, You can enter the following:

```yaml
autoUpgrade: false
npmRegistry: http://registry.npm.taobao.org/
```

Here we disable the automatic update check to increase the speed of each command execution, and `npmRegistry` Configuration items are custom `npm registry` address.

::: success
If the user is `.npmrc` Set custom `registry` Option, then it will also be read and respected, but `~/.forgerc.yml` Configured priority ratio `~/.npmrc` The configuration has a higher priority.
:::

## Download and install Forge on a LAN?

Forge CLI and Forge and various Forge components are released separately. After installing Forge CLI, you need to execute `forge install` To install various components of Forge, under normal circumstances Forge Install also needs to download resources from the network. Fortunately, the Forge CLI supports loading Forge Release compressed packages that have been downloaded in advance from the local disk.

The specific approach is as follows:

### Prepare Forge Release resources

`https://releases.arcblockio.cn/forge_release.zip` It packs all components of Forge v0.37.2, download it to local first, and then `scp` Commands like this are transmitted to the server, and decompressed to a specific directory on the server, such as `/home/work/`And get the following directory structure:

```shell
❯ tree -L 2 /home/work/forge_release
/home/work/forge_release
└── 0.37.2
    ├── forge_centos_amd64.tgz
    ├── forge_darwin_amd64.tgz
    ├── forge_starter_centos_amd64.tgz
    ├── forge_starter_darwin_amd64.tgz
    ├── forge_swap_centos_amd64.tgz
    ├── forge_swap_darwin_amd64.tgz
    ├── forge_web_centos_amd64.tgz
    ├── forge_web_darwin_amd64.tgz
    ├── forge_workshop_centos_amd64.tgz
    ├── forge_workshop_darwin_amd64.tgz
    ├── simulator_centos_amd64.tgz
    └── simulator_darwin_amd64.tgz
```

### Configure Forge CLI

Modify `~/.forgerc.yml`Add the following line:

```yaml
autoUpgrade: false
npmRegistry: http://registry.npm.taobao.org/
releaseDir: /home/work/forge_release
```

Note the new `releaseDir` Need to point to the directory you unzipped to.

### Install and start Forge

The preparations are all done here, then execute `forge install`：

```shell
ℹ Detected platform is: darwin
ℹ Using local releaseDir: /home/work/forge_release
ℹ Latest forge release version: v0.37.2

██████╗ ██╗   ██╗     █████╗ ██████╗  ██████╗██████╗ ██╗      ██████╗  ██████╗██╗  ██╗
██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝
██████╔╝ ╚████╔╝     ███████║██████╔╝██║     ██████╔╝██║     ██║   ██║██║     █████╔╝
██╔══██╗  ╚██╔╝      ██╔══██║██╔══██╗██║     ██╔══██╗██║     ██║   ██║██║     ██╔═██╗
██████╔╝   ██║       ██║  ██║██║  ██║╚██████╗██████╔╝███████╗╚██████╔╝╚██████╗██║  ██╗
╚═════╝    ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝

✔ Release asset find /home/work/forge_release/0.35.0/forge_darwin_amd64.tgz
✔ Copied release asset /home/work/forge_release/0.35.0/forge_darwin_amd64.tgz
✔ Expand release asset /home/work/.forge_cli/tmp/forge_darwin_amd64.tgz to /home/work/.forge_cli/release/forge/0.35.0
✔ Extract forge config from /home/work/.forge_cli/release/forge/0.35.0/lib/forge-0.35.0/priv/forge_release.toml
✔ Forge config written to /home/work/.forge_chains/forge_default/forge_release.toml
✔ Release asset find /home/work/forge_release/0.35.0/simulator_darwin_amd64.tgz
✔ Copied release asset /home/work/forge_release/0.35.0/simulator_darwin_amd64.tgz
✔ Expand release asset /home/work/.forge_cli/tmp/simulator_darwin_amd64.tgz to /home/work/.forge_cli/release/simulator/0.35.0
✔ Release asset find /home/work/forge_release/0.35.0/forge_web_darwin_amd64.tgz
✔ Copied release asset /home/work/forge_release/0.35.0/forge_web_darwin_amd64.tgz
✔ Expand release asset /home/work/.forge_cli/tmp/forge_web_darwin_amd64.tgz to /home/work/.forge_cli/release/forge_web/0.35.0
✔ Release asset find /home/work/forge_release/0.35.0/forge_workshop_darwin_amd64.tgz
✔ Copied release asset /home/work/forge_release/0.35.0/forge_workshop_darwin_amd64.tgz
✔ Expand release asset /home/work/.forge_cli/tmp/forge_workshop_darwin_amd64.tgz to /home/work/.forge_cli/release/forge_workshop/0.35.0
✔ Congratulations! forge v0.37.2 installed successfully!

ℹ If you want to custom the config, run: forge config set
```

If you want to start the Forge chain now, you can directly `forge start`, Executed after startup is complete `forge web open`To open the control panel and block browser of the Forge chain node.

## Update of software version?

How to update after installation and configuration? For Forge CLI, you need the npm registry image to be able to synchronize the version of the official image, and the Forge version needs to be manually downloaded and then uploaded to the machine on the local area network.
