
import SorobanHooksInit from "./src/index.js";

const API_KEY = "qomjjag2a9gq95uhlnzhl";
const hooks = new SorobanHooksInit(API_KEY);


//Asset Test

async function runTests() {
    try {
        console.log("===== AssetAlerts Testing Started =====");

        //✅ 1. Create Asset Alert
        const createRes = await hooks.AssetAlerts.create({
            webhook_url: "https://fairly-prepared-toucan.ngrok-free.app/api/webhook",
            assetAddress: "AAED",
            notificationInterval: "5m",
            chainType: "testnet",
        });
        console.log("Create Response:", createRes);

        const alertId = "68b2a4321a48f176d2a104fc";
        //createRes?.response?.result?.integration;
        if (!alertId) {
            console.log("❌ Alert creation failed. Skipping further tests.");
            return;
        }

        // ✅ 2. Get All Asset Alerts
        const allRes = await hooks.AssetAlerts.getAll({ page: 1, limit: 5 });
        console.log("All Alerts:", allRes);

        // ✅ 3. Get Specific Alert by ID
        const singleRes = await hooks.AssetAlerts.getById(alertId);
        console.log("Get By ID Response:", singleRes);

        // ✅ 4. Update Alert
        const updateRes = await hooks.AssetAlerts.update({
            id: "68b2a3bf1a48f176d2a10398",
            webhook_url: "https://fairly-prepared-toucan.ngrok-free.app/api/webhook",
            assetAddress: "XLM",
            notificationInterval: "1m",
            chainType: "testnet",
            status: "active", // activate alert
        });
        console.log("Update Response:", updateRes);

        // ✅ 5. Delete Alert
        const deleteRes = await hooks.AssetAlerts.delete("68b2a3bf1a48f176d2a10398");
        console.log("Delete Response:", deleteRes);

        console.log("===== AssetAlerts Testing Completed =====");
    } catch (err) {
        console.error("❌ Test Error:", err.message);
    }
}

runTests();

//Wallet Transaction Alert Test

// (async () => {
//     try {
//         // 1. Create wallet transaction watcher
//         const created = await WalletTransactionAlert?.createWalletTransactionWatcher({
//             apiKey: API_KEY,
//             webhook_url: "https://fairly-prepared-toucan.ngrok-free.app/api/webhook",
//             chainType: "testnet",
//             walletAddress: "GCEOE4LRSMVFVSZQYAR567PWQSX5J7R4ON2POEDE7VLAU4TAAVA54CBP", // replace with real wallet
//         });
//         console.log("✅ Created Wallet Watcher:", created);

//         const watcherId = created?.result?.integration;
//         if (!watcherId) throw new Error("Watcher creation failed, ID not returned");

//         // 2. Get all watchers
//         const all = await WalletTransactionAlert?.getAllWalletTransactionWatchers({
//             apiKey: API_KEY,
//             page: 1,
//             limit: 5,
//         });
//         console.log("✅ All Wallet Watchers:", all);

//         // 3. Get specific watcher
//         const single = await WalletTransactionAlert?.getWalletTransactionWatcher({
//             apiKey: API_KEY,
//             id: watcherId
//         });
//         console.log("✅ Specific Wallet Watcher:", single);

//         // 4. Update watcher
//         const updated = await WalletTransactionAlert?.updateWalletTransactionWatcher({
//             apiKey: API_KEY,
//             id: watcherId,
//             webhook_url: "https://fairly-prepared-toucan.ngrok-free.app/api/webhook", // updated webhook
//             chainType: "testnet", // keep chainType consistent if required
//             walletAddress: "GCEOE4LRSMVFVSZQYAR567PWQSX5J7R4ON2POEDE7VLAU4TAAVA54CBP", // keep same wallet
//             status: "active",
//         });
//         console.log("✅ Updated Wallet Watcher:", updated);

//         // 5. Delete watcher
//         const deleted = await WalletTransactionAlert?.deleteWalletTransactionWatcher({
//             apiKey: API_KEY,
//             id: watcherId
//         });
//         console.log("✅ Deleted Wallet Watcher:", deleted);

//     } catch (error) {
//         console.error("❌ Test failed:", error.message);
//     }
// })();


//contract watcher test

// (async () => {
//     try {
//         // 1. Create contract transaction watcher
//         const created = await ContractWatchers.createContractTransactionWatcher({
//             apiKey: API_KEY,
//             webhook_url: "https://fairly-prepared-toucan.ngrok-free.app/api/webhook",
//             chainType: "testnet",
//             contractAddress: "CAIHSSMGHWWLIPTWDCJDRRKVYZI3VYL772NW7UV7EJQJHVBRTRT6DVLC",
//             enableTransactionHistory: true,
//             enableStorage: true,
//         });
//         console.log("✅ Created Contract Watcher:", created);

//         const watcherId = created?.result?.integration;
//         if (!watcherId) throw new Error("Watcher creation failed, ID not returned");

//         // 2. Get all watchers
//         const all = await ContractWatchers.getAllContractTransactionWatchers({
//             apiKey: API_KEY,
//             page: 1,
//             limit: 5,
//         });
//         console.log("✅ All Contract Watchers:", all);

//         // 3. Get specific watcher
//         const single = await ContractWatchers.getContractTransactionWatcher({
//             apiKey: API_KEY,
//             id: watcherId
//         });
//         console.log("✅ Specific Contract Watcher:", single);

//         // 4. Update watcher
//         const updated = await ContractWatchers.updateContractTransactionWatcher({
//             apiKey: API_KEY,
//             id: watcherId,
//             webhook_url: "https://fairly-prepared-toucan.ngrok-free.app/api/webhook",
//             chainType: "testnet",
//             contractAddress: "CAIHSSMGHWWLIPTWDCJDRRKVYZI3VYL772NW7UV7EJQJHVBRTRT6DVLC",
//             enableTransactionHistory: true,
//             enableStorage: true,
//             status: "active",
//         });
//         console.log("✅ Updated Contract Watcher:", updated);

//         // 5. Delete watcher
//         // const deleted = await ContractWatchers.deleteContractTransactionWatcher({
//         //     apiKey: API_KEY,
//         //     id: watcherId
//         // });
//         console.log("✅ Deleted Contract Watcher:", deleted);

//     } catch (error) {
//         console.error("❌ Test failed:", error.message);
//     }
// })();

//wallet balance alert test

// (async () => {
//     try {
//         // 1. Create wallet balance watcher
//         const created = await WalletBalanceAlert.createWalletBalanceWatcher({
//             apiKey: API_KEY,
//             webhook_url: "https://fairly-prepared-toucan.ngrok-free.app/api/webhook",
//             walletAddress: "GCEOE4LRSMVFVSZQYAR567PWQSX5J7R4ON2POEDE7VLAU4TAAVA54CBP",
//             chainType: "testnet",
//             additionalData: "custom-meta",
//         });
//         console.log("✅ Created Wallet Balance Watcher:", created);

//         const watcherId = created?.result?.integration;
//         if (!watcherId) throw new Error("Watcher creation failed, ID not returned");

//         // 2. Get all watchers
//         const all = await WalletBalanceAlert.getAllWalletBalanceWatchers({
//             apiKey: API_KEY,
//             page: 1,
//             limit: 5,
//         });
//         console.log("✅ All Wallet Balance Watchers:", all);

//         // 3. Get specific watcher
//         const single = await WalletBalanceAlert.getWalletBalanceWatcher({
//             apiKey: API_KEY,
//             id: watcherId
//         });
//         console.log("✅ Specific Wallet Balance Watcher:", single);

//         // 4. Update watcher
//         const updated = await WalletBalanceAlert.updateWalletBalanceWatcher({
//             apiKey: API_KEY,
//             id: watcherId,
//             webhook_url: "https://fairly-prepared-toucan.ngrok-free.app/api/webhook",
//             walletAddress: "GCEOE4LRSMVFVSZQYAR567PWQSX5J7R4ON2POEDE7VLAU4TAAVA54CBP",
//             chainType: "testnet",
//             additionalData: "updated-meta",
//             status: "active",
//         });
//         console.log("✅ Updated Wallet Balance Watcher:", updated);

//         // 5. Delete watcher
//         const deleted = await WalletBalanceAlert.deleteWalletBalanceWatcher({
//             apiKey: API_KEY,
//             id: watcherId
//         });
//         console.log("✅ Deleted Wallet Balance Watcher:", deleted);

//     } catch (error) {
//         console.error("❌ Test failed:", error.message);
//     }
// })();

//Asset Price History Test
// (async () => {
//     try {

//         // Generate timestamps (7 days ago to now)
//         const endTimestamp = Date.now();
//         const startTimestamp = endTimestamp - 7 * 24 * 60 * 60 * 1000; // 7 days back

//         const history = await hooks.AssetsPriceHistory?.getHistory({
//             code: "USDC", // Example: XLM doesn’t need issuer
//             issuer: "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5", // Needed if code !== "XLM"
//             startTimestamp,
//             endTimestamp,
//         });

//         console.log("✅ Asset Price History:", JSON.stringify(history, null, 2));
//     } catch (error) {
//         console.error("❌ Test failed:", error.message);
//     }
// })();


//Contract Transactions Test

// (async () => {
//     try {
//         const contractAddress = "CAIHSSMGHWWLIPTWDCJDRRKVYZI3VYL772NW7UV7EJQJHVBRTRT6DVLC"; // replace with actual Soroban contract

//         const data = await ContractTransactions?.fetchContractTransactions(API_KEY, contractAddress, 1, 5);

//         console.log("✅ Contract Transactions:", JSON.stringify(data, null, 2));
//     } catch (error) {
//         console.error("❌ Test failed:", error.message);
//     }
// })();

//Contract Storage Test

// (async () => {
//     try {
//         const contractAddress = "CAIHSSMGHWWLIPTWDCJDRRKVYZI3VYL772NW7UV7EJQJHVBRTRT6DVLC"; // replace with valid contract

//         // 🔹 Test Storage
//         const storageData = await ContractStorage?.fetchContractStorage(API_KEY, contractAddress, 1, 5);
//         console.log("✅ Contract Storage:", JSON.stringify(storageData, null, 2));
//     } catch (error) {
//         console.error("❌ Test failed:", error.message);
//     }
// })();