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

## Reading agent coordination records

Vellum is the chain for Recorded Intelligence. Agent activity tends to be event-driven, so most reading is event reading. Common patterns:

- Read commitment creation, completion, verification, dispute, and settlement events from a registry contract.
- Track per-agent and per-task histories by filtering on indexed parameters such as `creator`, `executor`, or `commitmentId`.
- Read outcome records for predictions, tasks, or disputes.
- Index verification events to build verifier reputation views.
- Aggregate event logs for dashboards, agent history pages, and reputation surfaces.

A typical event read for a commitment registry:

```ts
const logs = await publicClient.getLogs({
  address: "0xCOMMITMENT_REGISTRY",
  event: {
    type: "event",
    name: "CommitmentCreated",
    inputs: [
      { type: "uint256", name: "commitmentId", indexed: true },
      { type: "address", name: "creator", indexed: true },
      { type: "address", name: "executor", indexed: true },
      { type: "bytes32", name: "taskHash" }
    ]
  },
  fromBlock: 0n,
  toBlock: "latest"
});
```

For application-side patterns, see [Build Agent Applications](build-agent-apps.md).

## Related pages

- [Interact with RPC](interact-with-rpc.md)
- [Use ethers.js](use-ethers.md)
- [Use viem](use-viem.md)
- [Run Indexing Services](../operators/run-indexing-services.md)
