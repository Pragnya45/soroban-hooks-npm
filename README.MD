# soroban-sdk

A lightweight JavaScript/TypeScript SDK for interacting with Soroban-based services.  
This package provides helper classes to easily manage **asset alerts, wallet transactions, contract watchers, balance alerts, asset price history, contract transactions, and contract storage**.

---

## 📦 Installation

```bash
# Using npm
npm install soroban-hooks

# Using yarn
yarn add soroban-hooks

```

🚀 Quick Start

import SorobanHooksInit from "soroban-hooks";

const sdk = new SorobanHooksInit("YOUR_API_KEY");

// Example: Create an Asset Alert
(async () => {
try {
const result = await sdk.AssetAlerts.create({
webhook_url: "https://your-webhook.site",
assetAddress: "ASSET_CONTRACT_ADDRESS",
notificationInterval: "5m",
chainType: "soroban"
});

    console.log("✅ Asset Alert Created:", result);

} catch (err) {
console.error("❌ Error:", err.message);
}
})();

📚 Features & API Reference

1. 🔔 Asset Alerts (sdk.AssetAlerts)

Manage alerts for asset price changes.

// Create
await sdk.AssetAlerts.create({ webhook_url, assetAddress, notificationInterval, chainType });

// Get All
await sdk.AssetAlerts.getAll({ page: 1, limit: 10 });

// Get By ID
await sdk.AssetAlerts.getById("alertId");

// Update
await sdk.AssetAlerts.update({ id: "alertId", webhook_url, assetAddress, notificationInterval, chainType, status });

// Delete
await sdk.AssetAlerts.delete("alertId");

2. 💸 Wallet Transaction Alerts (sdk.WalletTransactionAlert)

Track wallet transactions in real time.

// Create
await sdk.WalletTransactionAlert.create({ webhook_url, chainType, walletAddress });

// Get All
await sdk.WalletTransactionAlert.getAll({ page: 1, limit: 10 });

// Get By ID
await sdk.WalletTransactionAlert.getById("watcherId");

// Update
await sdk.WalletTransactionAlert.update({ id: "watcherId", webhook_url, chainType, walletAddress, status });

// Delete
await sdk.WalletTransactionAlert.delete("watcherId");

3. 👛 Wallet Balance Alerts (sdk.WalletBalanceAlert)

Monitor wallet balances with webhooks.

// Create
await sdk.WalletBalanceAlert.create({ webhook_url, walletAddress, chainType, additionalData });

// Get All
await sdk.WalletBalanceAlert.getAll({ page: 1, limit: 10 });

// Get By ID
await sdk.WalletBalanceAlert.getById("balanceId");

// Update
await sdk.WalletBalanceAlert.update({ id: "balanceId", webhook_url, walletAddress, chainType, additionalData, status });

// Delete
await sdk.WalletBalanceAlert.delete("balanceId");

4. 📊 Asset Price History (sdk.AssetsPriceHistory)

Fetch historical asset price data.

await sdk.AssetsPriceHistory.get({
code: "USDC",
issuer: "ASSET_ISSUER_ADDRESS",
startTimestamp: 1725100000,
endTimestamp: 1725200000
});

5. 📜 Contract Transactions (sdk.ContractTransactions)

Retrieve smart contract transaction history.

await sdk.ContractTransactions.get({ address: "CONTRACT_ADDRESS", page: 1, limit: 20 });

6. 📂 Contract Storage (sdk.ContractStorage)

Access smart contract storage variables.

await sdk.ContractStorage.get({ address: "CONTRACT_ADDRESS", page: 1, limit: 20 });

7. 🛠 Contract Watchers (sdk.ContractWatchers)

Monitor contract activity and storage updates.

// Create
await sdk.ContractWatchers.create({ webhook_url, chainType, contractAddress, enableTransactionHistory: true, enableStorage: true });

// Get All
await sdk.ContractWatchers.getAll({ page: 1, limit: 10 });

// Get By ID
await sdk.ContractWatchers.getById("watcherId");

// Update
await sdk.ContractWatchers.update({ id: "watcherId", webhook_url, chainType, contractAddress, enableTransactionHistory, enableStorage, status });

// Delete
await sdk.ContractWatchers.delete("watcherId");
