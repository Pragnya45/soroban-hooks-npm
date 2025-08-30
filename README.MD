```markdown
![Logo](https://app.nexaflow.xyz/logo.png)

# soroban-hooks

A lightweight JavaScript/TypeScript SDK for interacting with Soroban-based services.  
This SDK provides helpers to easily manage asset alerts, wallet transactions, contract watchers, balance alerts, asset price history, contract transactions, and contract storage.

---

## Installation
```

npm install soroban-hooks

```

or using yarn

```

yarn add soroban-hooks

```

---

## Initiation

```

import SorobanHooksInit from "soroban-hooks";

const API_KEY = "YOUR_API_KEY";

const sdk = new SorobanHooksInit(API_KEY);

```

---

## Usage

---

### Asset Alerts

```

// Create an Asset Alert
const createdAlert = await sdk.AssetAlerts.create({
webhook_url: "https://your-webhook.site",
assetAddress: "ASSET_CONTRACT_ADDRESS",
notificationInterval: "5m",
chainType: "soroban"
});
console.log(createdAlert);

// Get All Alerts
const allAlerts = await sdk.AssetAlerts.getAll({ page: 1, limit: 10 });
console.log(allAlerts);

// Get by ID
const singleAlert = await sdk.AssetAlerts.getById("alertId");
console.log(singleAlert);

// Update Alert
const updatedAlert = await sdk.AssetAlerts.update({
id: "alertId",
webhook_url: "https://your-webhook.site",
assetAddress: "ASSET_CONTRACT_ADDRESS",
notificationInterval: "10m",
chainType: "soroban",
status: "active"
});
console.log(updatedAlert);

// Delete Alert
const deletedAlert = await sdk.AssetAlerts.delete("alertId");
console.log(deletedAlert);

```

---

### Wallet Transaction Alerts

```

// Create Wallet Transaction Alert
const createdWatcher = await sdk.WalletTransactionAlert.create({
webhook_url: "https://your-webhook.site",
chainType: "soroban",
walletAddress: "WALLET_ADDRESS"
});
console.log(createdWatcher);

// Get All Wallet Watchers
const allWatchers = await sdk.WalletTransactionAlert.getAll({ page: 1, limit: 10 });
console.log(allWatchers);

// Get Wallet Watcher by ID
const singleWatcher = await sdk.WalletTransactionAlert.getById("watcherId");
console.log(singleWatcher);

// Update Wallet Watcher
const updatedWatcher = await sdk.WalletTransactionAlert.update({
id: "watcherId",
webhook_url: "https://your-webhook.site",
chainType: "soroban",
walletAddress: "WALLET_ADDRESS",
status: "active"
});
console.log(updatedWatcher);

// Delete Wallet Watcher
const deletedWatcher = await sdk.WalletTransactionAlert.delete("watcherId");
console.log(deletedWatcher);

```

---

### Wallet Balance Alerts

```

// Create Wallet Balance Alert
const createdBalanceWatcher = await sdk.WalletBalanceAlert.create({
webhook_url: "https://your-webhook.site",
walletAddress: "WALLET_ADDRESS",
chainType: "soroban",
additionalData: "some-meta"
});
console.log(createdBalanceWatcher);

// Get All Wallet Balance Alerts
const allBalanceAlerts = await sdk.WalletBalanceAlert.getAll({ page: 1, limit: 10 });
console.log(allBalanceAlerts);

// Get Wallet Balance Alert by ID
const singleBalanceAlert = await sdk.WalletBalanceAlert.getById("balanceId");
console.log(singleBalanceAlert);

// Update Wallet Balance Alert
const updatedBalanceAlert = await sdk.WalletBalanceAlert.update({
id: "balanceId",
webhook_url: "https://your-webhook.site",
walletAddress: "WALLET_ADDRESS",
chainType: "soroban",
additionalData: "updated-meta",
status: "active"
});
console.log(updatedBalanceAlert);

// Delete Wallet Balance Alert
const deletedBalanceAlert = await sdk.WalletBalanceAlert.delete("balanceId");
console.log(deletedBalanceAlert);

```

---

### Asset Price History

```

const history = await sdk.AssetsPriceHistory.getPriceHistory({
code: "USDC",
issuer: "ASSET_ISSUER_ADDRESS",
startTimestamp: 1725100000,
endTimestamp: 1725200000
});
console.log(history);

```

---

### Contract Transactions

```

const transactions = await sdk.ContractTransactions.fetch({
address: "CONTRACT_ADDRESS",
page: 1,
limit: 20
});
console.log(transactions);

```

---

### Contract Storage

```

const storage = await sdk.ContractStorage.fetch({
address: "CONTRACT_ADDRESS",
page: 1,
limit: 20
});
console.log(storage);

```

---

### Contract Watchers

```

// Create Contract Watcher
const createdContractWatcher = await sdk.ContractWatchers.create({
webhook_url: "https://your-webhook.site",
chainType: "soroban",
contractAddress: "CONTRACT_ADDRESS",
enableTransactionHistory: true,
enableStorage: true,
});
console.log(createdContractWatcher);

// Get All Contract Watchers
const allContractWatchers = await sdk.ContractWatchers.getAll({ page: 1, limit: 10 });
console.log(allContractWatchers);

// Get Contract Watcher by ID
const singleContractWatcher = await sdk.ContractWatchers.getById("watcherId");
console.log(singleContractWatcher);

// Update Contract Watcher
const updatedContractWatcher = await sdk.ContractWatchers.update({
id: "watcherId",
webhook_url: "https://your-webhook.site",
chainType: "soroban",
contractAddress: "CONTRACT_ADDRESS",
enableTransactionHistory: true,
enableStorage: true,
status: "active",
});
console.log(updatedContractWatcher);

// Delete Contract Watcher
const deletedContractWatcher = await sdk.ContractWatchers.delete("watcherId");
console.log(deletedContractWatcher);

```

---

## Additional Notes

- All SDK functions return Promises and must be awaited.
- Replace placeholders like `YOUR_API_KEY`, `ASSET_CONTRACT_ADDRESS`, `WALLET_ADDRESS`, and `CONTRACT_ADDRESS` with actual values.
- Supported `chainType` values include `"soroban"`, `"mainnet"`, and `"testnet"`.
- `notificationInterval` supports strings like `"1m"`, `"5m"`, etc.

---

## Documentation & Support

For more detailed documentation, visit the [official soroban-hooks documentation](https://github.com/Pragnya45/soroban-hooks-npm) (replace with real URL).

---



```
