# Read Chain Data

Reading data from Vellum follows standard Ethereum JSON-RPC patterns. This page covers common read tasks with code examples.

## Latest block number

ethers.js:

```ts
const provider = new ethers.JsonRpcProvider(process.env.VELLUM_RPC_URL);
const head = await provider.getBlockNumber();
console.log(head);
```

viem:

```ts
const head = await publicClient.getBlockNumber();
console.log(head);
```

## Block details

```ts
const block = await provider.getBlock(head);
console.log(block);
```

## Address balance

```ts
const balance = await provider.getBalance("0xYOUR_ADDRESS");
console.log(ethers.formatEther(balance));
```

## Transaction by hash

```ts
const tx = await provider.getTransaction("0xTX_HASH");
console.log(tx);
```

## Transaction receipt

```ts
const receipt = await provider.getTransactionReceipt("0xTX_HASH");
console.log(receipt);
```

## Contract reads

```ts
const abi = ["function totalSupply() view returns (uint256)"];
const contract = new ethers.Contract("0xTOKEN", abi, provider);
const total = await contract.totalSupply();
console.log(total.toString());
```

## Logs and events

ethers.js historical query:

```ts
const filter = {
  address: "0xCONTRACT",
  fromBlock: 0,
  toBlock: "latest"
};
const logs = await provider.getLogs(filter);
```

viem historical query:

```ts
const logs = await publicClient.getLogs({
  address: "0xCONTRACT",
  fromBlock: 0n,
  toBlock: "latest"
});
```

For real-time subscription, use the WebSocket endpoint when published.

## Multicall and batching

For applications that read many addresses or contract states at once, consider:

- Using a multicall contract to combine reads into a single RPC call.
- Batching JSON-RPC calls where the client supports it.
- Caching results that change rarely.

## Pagination for large queries

`eth_getLogs` queries can be expensive. Use:

- Narrow address and topic filters.
- Bounded block ranges.
- Pagination across block ranges.

## Indexers

For UI surfaces or analytics, an indexer is usually a better fit than direct RPC. The block explorer indexes Vellum data and is reachable via its API. See [Block Explorer](../network/block-explorer.md).

## Related pages

- [Interact with RPC](interact-with-rpc.md)
- [Use ethers.js](use-ethers.md)
- [Use viem](use-viem.md)
- [Run Indexing Services](../operators/run-indexing-services.md)
