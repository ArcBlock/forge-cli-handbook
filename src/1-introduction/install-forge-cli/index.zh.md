---
title: '如何安装 Forge CLI？'
description: '不同用户使用 Forge CLI 的不同姿势'
keywords: 'forge, forge-cli'
author: 'wangshijun'
category: 'book'
layout: 'documentation'
tags:
  - 'forge'
---

> 从本小节开始，所有的命令都需要在终端程序里面执行，如果你想学习下终端的基本用法，请移步[这里](https://sspai.com/post/45534)。

因为不同读者使用的操作系统、登录操作系统的用户身份不同，安装的准备工作及安装步骤可能略有不同，下面根据登录系统的用户（也就是你）是否为管理员（root）给出两种安装步骤，大致的步骤基本相同：

- 安装 Node.js：得到 `node` 和 `npm` 这两个可执行程序
- 安装 Forge CLI：得到 `forge` 这个可执行程序
- 检查安装是否成功

在 Linux 系统中判断你的身份的方法是执行：`whoami`，如果得到的结果不是 `root`，就表示你不是 `root` 账户。

## 如果我是 root 用户？

适用于在云主机上使用 Forge CLI 的用户。因为 `root` 用户安装的工具通常可以被系统中的其他用户共享，所以上述几个步骤都可以用 `root` 身份去完成。

### 安装 Node.js

因为 Forge CLI 使用 Node.js 开发，所以安装前需要确保你的电脑上有 Node.js 运行环境，检查是否存在 Node.js 运行环境的最简单办法是：

```bash
node --version
npm --version
```

如果两条命令都有正常的输出（没有 `command not found` 之类字眼且输出不为空），说明你的电脑中已经有了 Node.js 的运行环境。

::: error
因为部分依赖库要求 Node.js 版本不低于 `v10.x`，所以安装 Forge CLI 时也需要 `v10.x` 及以上的 Node.js 版本，如果 `node --version` 输出的结果低于 `v10.x`，则需要重新安装或者更新到新版。
:::

### 安装 Forge CLI

安装好 Node.js 环境之后，可以直接执行 `npm install -g @arcblock/forge-cli --unsafe-perm` 来安装，这里的 **--unsafe-perm** 是必须的。

### 检查安装是否成功

执行 `forge --version`，如果输出了 Forge CLI 的版本号说明安装成功了。

### 准备非 root 账户

虽然可以使用 root 身份安装 Forge CLI，但是不能用 root 身份去执行任何 Forge CLI 的子命令，更不能用 root 身份去创建、启动链节点，这是 Forge 的一个安全限制。所以为了执行后续操作，我们需要准备1个非 root 身份：

假设我们要用来执行 Forge CLI 的系统账户名为 `arcblock`，可以分两步：

- 创建用户：执行 `adduser arcblock` 即可添加用户
- 切换用户：执行 `su arcblock` 即可切换到该用户

接下来，就可以按后续教程[发链发币](../getting-started)。

整个安装过程如下所示：

!TerminalPlayer[](./images/install-centos.yml)

## 如果我不是 root 用户？

## 安装前的准备工作

### 安装或升级 Node.js 的两种方法

- 如果你非开发者：建议直接到 [这里](https://nodejs.org/en/download/) 下载 Node.js 的 LTS 版本 `v10.x`，然后双击下载的可执行文件，完成安装即可
- 如果你是开发者：建议使用 [NVM](https://github.com/creationix/nvm) 来安装 Node.js，可以方便的安装多个版本，中国的开发者可以通过设置 `export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node/` 来加速安装

下面是先安装 NVM，然后使用 NVM 和淘宝的源来安装 Node.js v10.16.3 的基本步骤：

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

# 加载 nvm 命令，如果你使用的是 zsh，应该使用 `source ~/.zshrc`
source ~/.bashrc

# 设置 nvm 镜像
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node/

# 安装 Node.js LTS 最新版
nvm install v10.16.1
```

## 安装 Forge CLI

Node.js 环境安装好之后，可以直接用如下命令安装 Forge CLI：

```bash
npm install -g @arcblock/forge-cli
```

如果你更喜欢使用 yarn 来安装，则可以执行 `yarn global add @arcblock/forge-cli` 来完成安装。

安装完成之后，你的系统里面就多出来一个叫 `forge` 的命令行工具（**Forge CLI 安装完产生的命令叫做 `forge` 而不是 `forge-cli`**），直接执行 `forge`，没有报错且得到如下输出，说明你已经安装成功：

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
  -r, --npmRegistry <registry>           Specify a custom npm registry
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
  blocklet:use|project:create [options]  Download and install a blocklet
  chain:create|create-chain [chainName]  Create a new chain instance
  chain:ls|chains                        List all chains
  chain:remove|reset [<chainName>]       Remove chains
  checkin                                Send a poke tx to the network to get tokens for test
  config [options] [action]              Read/write chain/node config
  declare:node                           Declare the current node to be a validator candidate
  download [options] [version]           Download a forge release without activate it
  help <subcommand>                      Show help of a sub command
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
  > forge install --mirror http://arcblock.oss-cn-beijing.aliyuncs.com

  Curious about how to use a subcommand?
  > forge help install
```

::: success
执行 `forge help` 也能得到如上输出，这个输出中列出了 Forge CLI 支持的所有子命令。
:::

::: success
如果是中国大陆用户，使用淘宝的 npm 镜像来安装 Forge CLI 可能会更快，使用 `npm install -g @arcblock/forge-cli --npm-registry https://registry.npm.taobao.org` 即可。
:::

## 安装过程常见报错解决办法

### 使用 root 账户安装？

通常情况下，我们不建议使用 root 账户安装 Forge CLI，但是如果你一定要使用 root 账户来安装，需要执行这条命令：`npm install -g @arcblock/forge-cli --unsafe-perm`，否则会因为权限问题导致安装失败。

虽然可以使用 root 身份安装 Forge CLI，但是不能用 root 身份去执行任何 Forge CLI 的子命令，更不能用 root 身份去创建、启动链节点，这是 Forge 的一个安全限制。这是 Linux 用户通常会遇到的一个问题。如何用非 root 身份来使用 Forge CLI 详见下面的说明。

#### 如何以非 root 身份执行 Forge CLI？

假设我们要用来执行 Forge CLI 的系统账户名为 `arcblock`，可以分两步：

- 创建用户：执行 `adduser arcblock` 即可添加用户
- 切换用户：执行 `su arcblock` 即可切换到该用户

然后就可以按照上面的命令执行后续操作。

### 使用 yarn 安装失败？

如果你使用 `yarn` 安装之后，执行 `forge` 报错了，大概率是因为 `grpc` 的库没有本地编译，这时候请尝试用 `npm` 去安装。

----

已经迫不及待要用 Forge CLI 来发链和发币了？继续往下看。
