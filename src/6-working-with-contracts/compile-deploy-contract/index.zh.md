---
title: 编译并部署合约
description: '如何把已经写好的合约部署到 Forge 链节点上面？'
keywords: 'forge, forge-cli'
author: wangshijun
category: handbook
layout: documentation
tags:
  - forge
---

## 获取示例合约

我们准备了一个非常简单的合约，里面只包含两个文件：`config.yaml` 和 `protocol.proto`

### `config.yaml`

定义合约的名称，版本号，以及合约所依赖的几个文件，这里我们只有 1 个数据结构定义的文件。

```yaml
---
name: create_product
version: 1
namespace: CoreTx
description: Create product that can be sold within the vending machine
type_urls:
  fg:t:create_product: ForgeAbi.CreateProductTx
  fg:x:product: ForgeAbi.Product
proto: protocol.proto
```

### `protocol.proto`

定义合约里面会使用到的数据结构，和新的交易类型。

```protobuf
syntax = "proto3";
package forge_abi;

message CreateProductTx {
  Product product = 1;
}

message Product {
  string name = 1;
  string brand = 2;
}
```

上面的代码已经放到了 GitHub 上面，获取方式比较简单：

```shell
git clone https://github.com/wangshijun/forge-product-factory-contract.git
cd forge-product-factory-contract
```

## 准备编译环境

> TODO: 这里应该需要额外安装几个工具

## 编译合约文件

接下来直接执行 `forge contract:compile ./protocol`，得到如下输出：

```shell
❯ forge contract:compile protocol
ℹ Contract meta: {"name":"create_product","version":1}

ℹ Generating elixir language support:
✔ Latest forge compiler version: v0.18.2
✔ forge-compiler info fetch success
ℹ Start download https://releases.arcblock.io/forge-compiler/0.18.2/forge-compiler
ℹ Downloading forge-compiler |████████████████████████████████████████ 100% || 2.84/2.84 MB
✔ Elixir itx generated: .compiled/create_product/elixir/create_product/create_product.itx.json

ℹ Generating JavaScript language support:
✔ Protobuf js generated: .compiled/create_product/javascript/protocol_pb.js
✔ JSON spec generated: .compiled/create_product/javascript/protocol_spec.json
✔ type_urls json generated: .compiled/create_product/javascript/protocol_url.json
✔ JavaScript entry file generated: .compiled/create_product/javascript/index.js
```

::: warning
如果是第一次执行 `forge contract:compile`，Forge CLI 会自动去下载合约编译工具 `forge-compiler`。
:::

当前的 `contract:compile` 能产生能够给 `Forge Elixir SDK` 和 `Forge JS SDK` 使用的文件，也产生了可以直接用于部署到链节点的结果文件。

## 部署合约

如果要部署合约直接执行：`forge protocol:deploy .compiled/create_product/elixir/create_product/create_product.itx.json`，结果如下：

```shell
❯ forge contract:deploy .compiled/create_product/elixir/create_product/create_product.itx.json
ℹ Working on app-chain chain
ℹ Connect to grpc endpoint: tcp://127.0.0.1:28210
✔ Moderator checked success
ℹ Deploy contract to tcp://127.0.0.1:28210
Contract detail:
{ address: 'z2E3q3PUNCzMNvKi1RuT7KHJ7VnUGZMhjPQwF',
  name: 'create_product',
  version: 1,
  namespace: 'CoreTx',
  description: 'Create product that can be sold within the vending machine',
  typeUrlsList:
   [ { url: 'fg:t:create_product',
       module: 'ForgeAbi.CreateProductTx' },
     { url: 'fg:x:product', module: 'ForgeAbi.Product' } ],
  proto:
   'syntax = "proto3";\npackage forge_abi;\n\nmessage CreateProductTx {\n  Product product = 1;\n}\n\nmessage Product {\n  string name = 1;\n  string brand = 2;\n}\n',
  pipeline: '',
  sourcesList: [],
  codeList:
   [ { checksum: [Uint8Array], binary: [Uint8Array] },
     { checksum: [Uint8Array], binary: [Uint8Array] } ],
  tagsList: [],
  data: undefined }
✔ Contract deploy success
ℹ Inspect tx with forge tx 6800DF1ED99D3A5B9F41C2F54A2644CC4F34A42DAF57B8889E6418553A9EF6F1
```

::: warning
相同名称、相同版本的合约是不允许重复部署的，所以，如果合约代码有改动，需要递增版本号，重新编译，然后再部署。
:::

### 验证部署结果

执行 `forge contract:ls | grep create_product`，如果能看到结果，说明部署正常。

```shell
❯ forge contract:ls | grep create_product
│ create_product          │ z2E3q3PUNCzMNvKi1RuT7KHJ7VnUGZMhjPQwF  │ running       │ v1       │
```

## 使用编译后的代码

在 [wangshijun/forge-product-factory-contract](https://github.com/wangshijun/forge-product-factory-contract) 有如何在 Forge JS SDK 中使用编译后代码的例子：

```javascript
/* eslint-disable no-console */
require('./.compiled/create_product/javascript/index');

const moment = require('moment');
const GraphqlClient = require('@arcblock/graphql-client');
const { toAssetAddress } = require('@arcblock/did-util');
const { fromTokenToUnit } = require('@arcblock/forge-util');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const merchant = fromRandom();
    const customer = fromRandom();
    console.log({ merchant: merchant.toJSON(), customer: customer.toJSON() });

    // 1. declare merchant
    let res = await client.sendDeclareTx({
      tx: { itx: { moniker: 'merchant' } },
      wallet: merchant,
    });
    console.log('merchant declare tx', res);
    console.log('merchant view link', `${endpoint}/node/explorer/accounts/${merchant.toAddress()}`);

    // 2. create vendor machine
    const machine = {
      moniker: `Vending_Machine_${merchant.toAddress()}`,
      readonly: false, // if we want to update the machine, we should set this to false
      transferrable: false,
      data: {
        type: 'AssetFactory',
        value: {
          description: 'Unlimited Vending Machine',
          limit: 99999,
          price: {
            value: Buffer.from(fromTokenToUnit(1).toBuffer()),
          },
          template: JSON.stringify({ name: '{{name}}', brand: '{{brand}}' }),
          allowedSpecArgs: ['name', 'brand'],
          assetName: 'Product',
          attributes: {
            transferrable: false,
          },
        },
      },
    };
    const assetAddress = toAssetAddress(machine);
    machine.address = assetAddress;
    res = await client.sendCreateAssetTx({ tx: { itx: machine }, wallet: merchant });
    console.log('factory template', machine.data.value.template);
    console.log('view machine state', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('create machine tx', `${endpoint}/node/explorer/txs/${res}`);

    // wait for machine state consolidates
    await sleep(3000);

    // 3. read machine
    const { state } = await client.getAssetState({ address: assetAddress });
    console.log('machine state', state);

    // 4. declare customer
    res = await client.declare({ moniker: 'customer', wallet: customer });
    console.log('customer declare tx', res);
    console.log('customer view link', `${endpoint}/node/explorer/accounts/${customer.toAddress()}`);

    // 5. get some money
    res = await client.checkin({ wallet: customer });
    console.log('poke tx', res);
    console.log('poke link', `${endpoint}/node/explorer/txs/${res}`);
    await sleep(3000);

    // 6. create product and its address
    const product = {
      ttl: 0,
      readonly: true,
      transferrable: false,
      parent: machine.address,
      data: {
        type: 'Product',
        value: { name: 'Coca', brand: 'Pepsi' },
      },
    };
    const goodAddress = toAssetAddress(product);
    console.log('product value', product.data.value);

    // 7. acquire asset
    res = await client.sendAcquireAssetTx({
      tx: {
        itx: {
          to: machine.address,
          specs: [
            {
              address: goodAddress,
              data: JSON.stringify(product.data.value),
            },
          ],
        },
      },
      wallet: customer,
    });
    console.log('product spec', {
      address: goodAddress,
      data: JSON.stringify(product.data.value),
    });
    console.log('product address', goodAddress);
    console.log('acquire tx', res);
    console.log('acquire link', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
```
