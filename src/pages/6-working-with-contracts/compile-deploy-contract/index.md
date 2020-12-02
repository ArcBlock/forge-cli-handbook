---
title: Compile and deploy the contract
description: How to deploy the written contract to the Forge chain node?
keywords: "forge, forge-cli"
author: wangshijun
category: ''
layout: documentation
tags:
  - forge
---

## Get example contract

We have prepared a very simple contract that contains only two files: `config.yaml` with `protocol.proto`

### `config.yaml`

Define the contract name, version number, and several files that the contract depends on. Here we have only one data structure definition file.

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

Define the data structures and new transaction types that will be used in the contract.

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

The above code has been placed on GitHub, and the acquisition method is relatively simple:

```shell
git clone https://github.com/wangshijun/forge-product-factory-contract.git
cd forge-product-factory-contract
```

## Prepare the compilation environment

> TODO: There should be a few additional tools installed here

## Compile contract file

Then execute directly `forge contract:compile ./protocol`And get the following output:

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
If this is the first time `forge contract:compile`, Forge CLI will automatically download the contract compilation tool `forge-compiler`。
:::

current `contract:compile` Can produce can give `Forge Elixir SDK` with `Forge JS SDK` The files used also produce result files that can be used directly for deployment to chain nodes.

## Deployment contract

If you want to execute the contract directly: `forge protocol:deploy .compiled/create_product/elixir/create_product/create_product.itx.json`And the result is as follows:

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
Contracts with the same name and the same version are not allowed to be deployed repeatedly, so if the contract code changes, you need to increment the version number, recompile, and then deploy.
:::

### Verify deployment results

carried out `forge contract:ls | grep create_product`If you can see the results, the deployment is normal.

```shell
❯ forge contract:ls | grep create_product
│ create_product          │ z2E3q3PUNCzMNvKi1RuT7KHJ7VnUGZMhjPQwF  │ running       │ v1       │
```

## Use compiled code

In [wangshijun/forge-product-factory-contract](https://github.com/wangshijun/forge-product-factory-contract) Examples of how to use compiled code in the Forge JS SDK:

```javascript
/* eslint-disable no-console */
require("./.compiled/create_product/javascript/index");

const moment = require("moment");
const GraphqlClient = require("@arcblock/graphql-client");
const { toAssetAddress } = require("@arcblock/did-util");
const { fromTokenToUnit } = require("@arcblock/forge-util");
const { fromRandom, WalletType } = require("@arcblock/forge-wallet");

const endpoint = process.env.FORGE_API_HOST || "http://127.0.0.1:8210"; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const merchant = fromRandom();
    const customer = fromRandom();
    console.log({ merchant: merchant.toJSON(), customer: customer.toJSON() });

    // 1. declare merchant
    let res = await client.sendDeclareTx({
      tx: { itx: { moniker: "merchant" } },
      wallet: merchant
    });
    console.log("merchant declare tx", res);
    console.log(
      "merchant view link",
      `${endpoint}/node/explorer/accounts/${merchant.toAddress()}`
    );

    // 2. create vendor machine
    const machine = {
      moniker: `Vending_Machine_${merchant.toAddress()}`,
      readonly: false, // if we want to update the machine, we should set this to false
      transferrable: false,
      data: {
        type: "AssetFactory",
        value: {
          description: "Unlimited Vending Machine",
          limit: 99999,
          price: {
            value: Buffer.from(fromTokenToUnit(1).toBuffer())
          },
          template: JSON.stringify({ name: "{{name}}", brand: "{{brand}}" }),
          allowedSpecArgs: ["name", "brand"],
          assetName: "Product",
          attributes: {
            transferrable: false
          }
        }
      }
    };
    const assetAddress = toAssetAddress(machine);
    machine.address = assetAddress;
    res = await client.sendCreateAssetTx({
      tx: { itx: machine },
      wallet: merchant
    });
    console.log("factory template", machine.data.value.template);
    console.log(
      "view machine state",
      `${endpoint}/node/explorer/assets/${assetAddress}`
    );
    console.log("create machine tx", `${endpoint}/node/explorer/txs/${res}`);

    // wait for machine state consolidates
    await sleep(3000);

    // 3. read machine
    const { state } = await client.getAssetState({ address: assetAddress });
    console.log("machine state", state);

    // 4. declare customer
    res = await client.declare({ moniker: "customer", wallet: customer });
    console.log("customer declare tx", res);
    console.log(
      "customer view link",
      `${endpoint}/node/explorer/accounts/${customer.toAddress()}`
    );

    // 5. get some money
    res = await client.checkin({ wallet: customer });
    console.log("poke tx", res);
    console.log("poke link", `${endpoint}/node/explorer/txs/${res}`);
    await sleep(3000);

    // 6. create product and its address
    const product = {
      ttl: 0,
      readonly: true,
      transferrable: false,
      parent: machine.address,
      data: {
        type: "Product",
        value: { name: "Coca", brand: "Pepsi" }
      }
    };
    const goodAddress = toAssetAddress(product);
    console.log("product value", product.data.value);

    // 7. acquire asset
    res = await client.sendAcquireAssetTx({
      tx: {
        itx: {
          to: machine.address,
          specs: [
            {
              address: goodAddress,
              data: JSON.stringify(product.data.value)
            }
          ]
        }
      },
      wallet: customer
    });
    console.log("product spec", {
      address: goodAddress,
      data: JSON.stringify(product.data.value)
    });
    console.log("product address", goodAddress);
    console.log("acquire tx", res);
    console.log("acquire link", `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
```
