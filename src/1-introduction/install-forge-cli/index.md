---
title: How do I install the Forge CLI?
description: Different postures of different users using Forge CLI
keywords: "forge, forge-cli"
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

> Starting from this section, all commands need to be executed in the terminal program. If you want to learn the basic usage of the terminal, please move on [Here](https://sspai.com/post/45534)。

Because different readers use different operating systems and users who log in to the operating system, the installation preparation and installation steps may be slightly different. Here are two options based on whether the user (that is, you) logged in to the system is an administrator (root). The installation steps are roughly the same:

- Install Node.js: get `node` with `npm` These two executable programs
- Install Forge CLI: Get `forge` This executable
- Check if the installation was successful

The way to determine your identity on a Linux system is to execute: `whoami`If the result is not `root`It means you are not `root` Account.

## What if I am root?

For users using the Forge CLI on a cloud host. Because `root` User-installed tools can usually be shared by other users in the system, so the above steps can be used `root` Identity goes to completion.

### Install Node.js

Because Forge CLI is developed using Node.js, you need to ensure that you have a Node.js runtime environment on your computer before installation. The easiest way to check if a Node.js runtime environment exists is:

```bash
node --version
npm --version
```

If both commands have normal output (no `command not found` And other words and the output is not empty), it means that your computer already has the Node.js runtime environment.

::: warning
Because some dependent libraries require no less than Node.js version `v10.x`, So it is also required when installing Forge CLI `v10.x` Node.js and above, if `node --version` The output is lower than `v10.x`, You need to reinstall or update to the new version.
:::

#### Install Node.js under CentOS

```shell
curl -sL https://rpm.nodesource.com/setup_10.x | bash -
yum install -y nodejs
```

#### Install Node.js on Ubuntu

```shell
curl -sL https://deb.nodesource.com/setup_11.x | bash -
apt-get install -y nodejs
```

### Install Forge CLI

After installing the Node.js environment, you can directly execute the following command to install, pay attention to the**--unsafe-perm** It's required.

```shell
npm install -g @arcblock/forge-cli --unsafe-perm
```

### Check if the installation was successful

carried out `forge --version`If the version number of Forge CLI is output, the installation is successful.

### Prepare a non-root account

Although you can install Forge CLI as root, you cannot execute any Forge CLI subcommands as root, and you cannot use root to create and start chain nodes. This is a security limitation of Forge. So in order to perform subsequent operations, we need to prepare a non-root identity:

Suppose the system account we want to use to execute the Forge CLI is named `arcblock`Can be divided into two steps:

- Create user: execute `adduser arcblock` To add users
- Switch user: execute `su arcblock` To switch to that user

Next, you can follow the tutorial [Coin Issue](../getting-started)。

### Video tutorial

The process of installing ForgeCLI under CentOS is as follows:

!TerminalPlayer[](./images/install-root.yml)

## What if I'm not root?

For Mac systems or Linux systems with a graphical interface, the logged-in user is usually not root, and both Node.js and Forge CLI can be installed in the user's own directory.

### Install Node.js

It is recommended that such users directly use NVM to install Node.js. NVM can automatically help you choose the version corresponding to your system. Here are the basic steps to install NVM first, and then install Node.js v10.16.3 using NVM and Taobao sources:

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

# 加载 nvm 命令，如果你使用的是 zsh，应该使用 `source ~/.zshrc`
source ~/.bashrc

# 设置 nvm 镜像
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node/

# 安装 Node.js LTS 最新版
nvm install v10.16.3
```

### Install Forge CLI

After the Node.js environment is installed, you can directly install the Forge CLI with the following command:

```bash
npm install -g @arcblock/forge-cli
```

::: success
If you are a Chinese user, installing the Forge CLI using Taobao's npm image may be faster. `npm install -g @arcblock/forge-cli --registry https://registry.npm.taobao.org` Just fine.
:::

::: success
If you prefer to use yarn for installation, you can run `yarn global add @arcblock/forge-cli` To complete the installation.
:::

::: warning
Node.js and Forge CLI installed using NVM belong to the current user only, and cannot be accessed by other users of the system.
:::

### Check if the installation was successful

After the installation is complete, there will be one more in your system. `forge` Command line tool (**The command generated after the Forge CLI installation is called `forge` Instead of `forge-cli`**), Execute directly `forge`, No error is reported and you get the following output, indicating that you have successfully installed:

```bash

██████╗ ██╗   ██╗     █████╗ ██████╗  ██████╗██████╗ ██╗      ██████╗  ██████╗██╗  ██╗
██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝
██████╔╝ ╚████╔╝     ███████║██████╔╝██║     ██████╔╝██║     ██║   ██║██║     █████╔╝
██╔══██╗  ╚██╔╝      ██╔══██║██╔══██╗██║     ██╔══██╗██║     ██║   ██║██║     ██╔═██╗
██████╔╝   ██║       ██║  ██║██║  ██║╚██████╗██████╔╝███████╗╚██████╔╝╚██████╗██║  ██╗
╚═════╝    ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝

Usage: forge [options] [command]

Options:
  -V, --version                          output the version number
  -v, --verbose                          Output runtime info when execute subcommand, useful for debug
  -c, --chain-name <chainName>           Execute command use specific chain
  -i, --config-path <path>               Forge config used when starting forge node and initializing gRPC clients
  -r, --npm-registry <registry>          Specify a custom npm registry
  -y, --yes                              Assume that the answer to any confirmation question is yes
  -d, --defaults                         Run command using default values for all questions
  -m, --mirror <url>                     Mirror host used to download forge release
  -g, --socket-grpc <endpoint>           Socket gRPC endpoint to connect, with this you can use forge-cli with a remote node
  -h, --help                             output usage information

Commands:
  account <address>                      Get an account info by address
  account:create                         Interactively create an account, guarded by a passphrase
  account:delete <address>               Delete an account by address
  account:list [role]                    List all accounts stored in this node
  asset <address>                        Get asset info by address
  block [options] [height]               Get the block info from the running node
  blocklet:init                          Init a blocklet project
  blocklet:use|project:create [options]  Download and install a blocklet
  chain:config [options] [action]        Read/write chain/node config
  chain:create|create-chain [chainName]  Create a new chain instance
  chain:ls|chains                        List all chains
  chain:remove <chainName>               Remove chain state and config
  chain:reset <chainName>                Reset chain state, but keeps the config
  checkin                                Send a poke tx to the network to get tokens for test
  config [options] [key] [value]         Config forge cli configs
  declare:node                           Declare the current node to be a validator candidate
  download [options] [version]           Download a forge release without activate it
  help [subcommand]                      Show help of a sub command
  install|init [options] [version]       Download and setup forge release on this machine
  join <endpoint>                        Join a network by providing a valid forge web graphql endpoint
  logs [type]                            Show logs for various forge components
  ls                                     List forge releases installed locally
  ls:remote                              List remote forge releases available for install
  prepare [options]                      Prepare node for deploying a multi-node chain
  protocol:activate [name|address]       Activate a transaction protocol by name or address
  protocol:compile [sourceDir]           Compile a forge transaction protocol
  protocol:deactivate [name|adderss]     Deactivate a transaction protocol
  protocol:deploy [itxPath]              Deploy a compiled transaction protocol to ABT Node
  protocol:ls                            List transaction protocols
  ps                                     List running forge component processes
  remote [shellName]                     Connects to the running system via a remote shell
  simulator [action]                     Start/stop simulator and generate random traffic
  start [options] [<chainName>]          Start a chain daemon, if does not specify a chain name, it will start a default chain
  status [type]                          List info of the running chain/node
  stop [options] [<chainName>]           Stop the forge daemon and all forge components, if does not specify a chain name, it will start a default chain
  tx [hash]                              Get a tx detail and display
  tx:list                                List latest transactions
  upgrade [<chainName>]                  Upgrade chain node to new version without reset
  use [version]                          Activate an already downloaded forge release
  version [<chainName>]                  Output version for all forge components
  wallet:create                          Create a local wallet and dump its public/private key
  web [options] [action]                 Start/stop the web interface of running forge chain/node
  workshop [action]                      Start/stop the dApps workshop

Examples:

  Please install a forge-release before running any other commands
  > forge install latest
  > forge install --mirror https://releases.arcblockio.cn

  Curious about how to use a subcommand?
  > forge help install
```

::: success
carried out `forge help` You can also get the output as above.
:::

### Video tutorial

The entire process of installing Node.js and Forge CLI as a non-root account is as follows:

!TerminalPlayer[](./images/install-non-root.yml)

## How do I upgrade the Forge CLI?

The Forge CLI enables the automatic check for updates by default. When there is a new version, you will be prompted to update. If you do not pass [Global configuration](../../9-customization/global-config)Turn off automatic check for updates and follow the prompts. If you need to update manually, you can override the update by executing the exact same command as installing.

- If you are using `root` For account installation, switch to `root` Identity and then execute: `npm install -g @arcblock/forge-cli --unsafe-perm`
- If you are not using `root` For account installation, execute directly under the corresponding account: `npm install -g @arcblock/forge-cli` Just

## Common errors during installation

### Installation failed with yarn?

If you use `yarn` After installation, execute `forge` The error is reported. The high probability is because `grpc` Library is not compiled successfully locally, at this time please try to use `npm` Go to install.

> TODO: Need to update here

---

Can't wait to use the Forge CLI to send chains and coins? Continue to look down.
