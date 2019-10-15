---
title: 创建和发布 Blocklet
description: 怎么创建一个 Blocklet 项目，然后发布到线上？
keywords: 'forge, forge-cli'
author: polunzh
category: handbook
layout: documentation
tags:
  - forge
  - blocklet
---

## 创建

使用 `forge blocklet:init` 命令可以初始化一个 Blocklet 项目。在初始化的过程中，有几个变量需要设置一下:

``` shell
$ forge blocklet:init
This utility will walk you through create such files and folders(if not exists):
- blocklet.json
- blocklet.md
- package.json
- screenshots/
- <templates folder>/(upon your input)

It only covers common items, if you want to check all items, please visit:
https://github.com/ArcBlock/blocklets#keyinfo-blockletjson

Press ^C to quit.
? blocklet name: blocklet-demo
? Please write concise description: This is a blocklet demo
? What's group of the blocklet? starter
? Choose a color for your blocklet: primary
? Blocklet templates folder name: templates
```

- name: Blocklet 名字
- description: Blocklet 描述
- group: Blocklet 的分类，当前可选的有 `dApp | starter | contract`
- color: 选择 Blocklet 的颜色主题，当前可选的有 `primary | secondary | error`
- templates: 指定模板代码目录，如果有多个，使用逗号(`,`)分割

::: warning
这里询问的只是部分常用的设置项，更详细的设置项可以看[这里](https://github.com/ArcBlock/blocklets#keyinfo-blockletjson)。
:::

命令顺利执行完后会生成如下几个文件和目录：

``` shell
├── blocklet.json
├── blocklet.md
├── package.json
├── screenshots/
└── templates/
```

### 在 blocklet.json 中设置执行脚本

`blocklet.json` 例子:

``` shell
{
  "name": "blocklet-demo",
  "group": "dApp",
  "color": "primary",
  "templates": "templates",
  "description": "",
  "keywords": [],
  "install-scripts": {
    "install-dependencies": "echo 'no dependencies scripts'"
  },
  "hooks": {
    "pre-copy": "echo 'no configure hooks'",
    "configure": "echo 'no configure hooks'",
    "post-copy": "echo 'no post-copy hooks'",
    "on-complete": "echo 'no on-complete hooks'"
  }
}
```

在使用 `CLI` 基于 Blocklet 生成项目时，`CLI` 会通过 Blocklet 中设置的 `install-scripts` 和 `hooks` 脚本来初始化一些配置。

#### 设置 install-scripts

::: warning
install-scripts 脚本中脚本的执行是按照定义的顺序执行的
:::

这个节点的脚本的执行时机是`复制`模板代码前，同时先于 `hooks`执行；所以，**如果 Blocklet 自身有需要安装的依赖，可以放在这里。**

#### 设置 hooks

hooks 中当前支持下面四个阶段

1. pre-copy
2. post-copy
3. configure
4. on-complete

##### pre-copy

该阶段是在`复制模板代码前`执行的，所以如果想在复制代码前做一些准备工作，可以通过在这里定义脚本实现。

##### post-copy

该阶段是在`复制模板代码后`执行的，所以如果想在复制代码后做一些事情，比如，安装依赖、初始化 git 仓库等。

##### configure

该阶段是基于 Blocklet 来创建一个项目的关键阶段，建议将项目需要的配置项脚本放在这个阶段执行。
比如，对于一个 dAPP 来说，需要一条可用的链，还可能需要数据库的支持，那么可以将链和数据库的设置放在这个阶段。

##### on-complete

这是最后一个阶段，完成前面的步骤后，顺利的话现在就可以启动项目了，所以可以把启动这个项目的命令放到这里，比如：

``` shell
Run script to start:
0. cd blocklet-demo
1. make run-server
2. yarn start
```

这样，开发者可以很方便的启动这个项目。

## 测试

可以使用 `CLI` 中的 `forge blocklet:use --local-blocklet <blocklet directory>` 指令来测试本地的 Blocklet 项目：

``` shell
$ forge blocklet:use --local-blocklet /Users/zhenqiang/workcode/forge-python-starter
✔ Fetching blocklets information...
yarn install v1.17.3
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.24s.
? Running chain node graphql endpoint: (http://localhost:8210/api)
...
```

通过 `--local-blocklet` 参数来指定本地 Blocklet 项目，从而测试刚刚创建的项目。

## 发布
