# Send Transactions

Transactions on Vellum use ETH for gas.

## Before sending

- Confirm chain ID.
- Confirm account has ETH on Vellum.
- Estimate gas.
- Set a reasonable timeout.
- Store transaction hash.
- Wait for receipt.

## ethers.js send

```ts
const tx = await wallet.sendTransaction({
  to: recipient,
  value: ethers.parseEther("0.001")
});

const receipt = await tx.wait();
console.log(receipt?.hash);
```

## viem send

```ts
const hash = await walletClient.sendTransaction({
  to: recipient,
  value: parseEther("0.001")
});
```

{% hint style="info" %}
Do not retry a signed transaction by signing a new one unless you understand nonce handling.
{% endhint %}

## Related pages

- [Use ethers.js](use-ethers.md)
- [Use viem](use-viem.md)
- [Gas and Fees](gas-and-fees.md)
