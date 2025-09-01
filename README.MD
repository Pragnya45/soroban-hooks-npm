# soroban-hooks

A lightweight JavaScript/TypeScript SDK for interacting with Soroban-based services.  
This SDK helps you easily manage asset alerts, wallet transactions, contract watchers, balance alerts, asset price history, contract transactions, and contract storage.

---

## Features

- [Asset Alerts](#asset-alerts)
- [Wallet Transaction Alerts](#wallet-transaction-alerts)
- [Wallet Balance Alerts](#wallet-balance-alerts)
- [Asset Price History](#asset-price-history)
- [Contract Transactions](#contract-transactions)
- [Contract Storage](#contract-storage)
- [Contract Watchers](#contract-watchers)

## Installation

```
npm install soroban-hooks
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

<div id="asset-alerts"></div>

#### Asset Alerts

```javascript
// Create an Asset Alert
const createdAlert = await sdk.AssetAlerts.create({
  webhook_url: "https://your-webhook.site",
  assetAddress: "ASSET_CONTRACT_ADDRESS",
  notificationInterval: "5m",
  chainType: "soroban",
});
console.log(createdAlert);
```

```javascript
// Get All Asset Alerts

// Without params (uses defaults: page = 1, limit = 10)
const allAlerts = await sdk.AssetAlerts.getAll();
console.log(allAlerts);

// With custom pagination
const allAlerts = await sdk.AssetAlerts.getAll({ page: 2, limit: 25 });
console.log(allAlerts);
```

```javascript
// Get Asset Alert by ID
const singleAlert = await sdk.AssetAlerts.getById("alertId");
console.log(singleAlert);
```

```javascript
// Update Asset Alert
const updatedAlert = await sdk.AssetAlerts.update({
  id: "alertId",
  webhook_url: "https://your-webhook.site",
  assetAddress: "ASSET_CONTRACT_ADDRESS",
  notificationInterval: "10m",
  chainType: "soroban",
  status: "active",
});
console.log(updatedAlert);
```

```javascript
// Delete Asset Alert
const deletedAlert = await sdk.AssetAlerts.delete("alertId");
console.log(deletedAlert);
```

---

#### Wallet Transaction Alerts

<div id="wallet-transaction-alerts"></div>

```javascript
// Create Wallet Transaction Alert
const createdWatcher = await sdk.WalletTransactionAlert.create({
  webhook_url: "https://your-webhook.site",
  chainType: "soroban",
  walletAddress: "WALLET_ADDRESS",
});
console.log(createdWatcher);
```

```javascript
// Get All Wallet Transaction Alerts

// Without pagination params (defaults: page = 1, limit = 10)
const allWatchers = await sdk.WalletTransactionAlert.getAll();
console.log(allWatchers);

// With custom pagination
const allWatchers = await sdk.WalletTransactionAlert.getAll({
  page: 2,
  limit: 25,
});
console.log(allWatchers);
```

```javascript
// Get Wallet Transaction Alert by ID
const singleWatcher = await sdk.WalletTransactionAlert.getById("watcherId");
console.log(singleWatcher);
```

```javascript
// Update Wallet Transaction Alert
const updatedWatcher = await sdk.WalletTransactionAlert.update({
  id: "watcherId",
  webhook_url: "https://your-webhook.site",
  chainType: "soroban",
  walletAddress: "WALLET_ADDRESS",
  status: "active",
});
console.log(updatedWatcher);

// Delete Wallet Transaction Alert
const deletedWatcher = await sdk.WalletTransactionAlert.delete("watcherId");
console.log(deletedWatcher);
```

---

#### Wallet Balance

<div id="wallet-balance-alerts"></div>

```javascript
// Create Wallet Balance Alert
const createdBalanceWatcher = await sdk.WalletBalanceAlert.create({
  webhook_url: "https://your-webhook.site",
  walletAddress: "WALLET_ADDRESS",
  chainType: "soroban",
  additionalData: "some-meta",
});
console.log(createdBalanceWatcher);

// Get All Wallet Balance Alerts

// Without pagination params (defaults: page = 1, limit = 10)
const allBalanceAlerts = await sdk.WalletBalanceAlert.getAll();
console.log(allBalanceAlerts);

// With custom pagination
const allBalanceAlerts = await sdk.WalletBalanceAlert.getAll({
  page: 2,
  limit: 25,
});
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
  status: "active",
});
console.log(updatedBalanceAlert);

// Delete Wallet Balance Alert
const deletedBalanceAlert = await sdk.WalletBalanceAlert.delete("balanceId");
console.log(deletedBalanceAlert);
```

---

#### Asset Price History

<div id="asset-price-history"></div>

```javascript
const history = await sdk.AssetsPriceHistory.getPriceHistory({
  code: "USDC",
  issuer: "ASSET_ISSUER_ADDRESS",
  startTimestamp: 1725100000,
  endTimestamp: 1725200000,
});
console.log(history);
```

---

#### Contract Transactions

<div id="contract-transactions"></div>

```javascript
// Without pagination params (defaults: page = 1, limit = 10)
const transactions = await sdk.ContractTransactions.fetch("CONTRACT_ADDRESS");
console.log(transactions);

// With custom pagination
const transactions = await sdk.ContractTransactions.fetch("CONTRACT_ADDRESS", {
  page: 2,
  limit: 50,
});
console.log(transactions);
```

---

#### Contract Storage

<div id="contract-storage"></div>

```javascript
// Without pagination params (defaults: page = 1, limit = 10)
const storage = await sdk.ContractStorage.fetch("CONTRACT_ADDRESS");
console.log(storage);

// With custom pagination
const storage = await sdk.ContractStorage.fetch("CONTRACT_ADDRESS", {
  page: 2,
  limit: 50,
});
console.log(storage);
```

---

#### Contract Watchers

<div id="contract-watchers"></div>

```javascript
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

// Without pagination params (defaults: page = 1, limit = 10)
const allContractWatchers = await sdk.ContractWatchers.getAll();
console.log(allContractWatchers);

// With custom pagination
const allContractWatchers = await sdk.ContractWatchers.getAll({
  page: 2,
  limit: 25,
});
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

- All SDK methods are asynchronous and return Promises.
- Replace placeholders like `YOUR_API_KEY`, `ASSET_CONTRACT_ADDRESS`, `WALLET_ADDRESS`, and `CONTRACT_ADDRESS` with real values before use.
- Supported values for `chainType` include `"soroban"`, `"mainnet"`, and `"testnet"`.
- For `notificationInterval`, use strings like `"1m"`, `"5m"`, etc.

---

## Acknowledgements

Thanks to the contributors and maintainers of underlying libraries like Axios and the Soroban ecosystem.

---
