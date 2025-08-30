import AssetAlerts from "./service/assetAlerts.js";
import WalletTransactionAlert from "./service/walletTransactionAlert.js";
import ContractWatchers from "./service/contractWatchers.js";
import WalletBalanceAlert from "./service/walletBalanceAlert.js";
import AssetsPriceHistory from "./service/assetsPriceHistory.js";
import ContractTransactions from "./service/contractTransactions.js";
import ContractStorage from "./service/contractStorage.js";

class SorobanHooksInit {
    constructor(apiKey = null) {
        if (!apiKey) {
            throw new Error("API key is required");
        }
        this.apiKey = apiKey;

        // instantiate each module with apiKey
        this.AssetAlerts = new AssetAlerts(apiKey);
        this.WalletTransactionAlert = new WalletTransactionAlert(apiKey);
        this.ContractWatchers = new ContractWatchers(apiKey);
        this.WalletBalanceAlert = new WalletBalanceAlert(apiKey);
        this.AssetsPriceHistory = new AssetsPriceHistory(apiKey);
        this.ContractTransactions = new ContractTransactions(apiKey);
        this.ContractStorage = new ContractStorage(apiKey);
    }
}

export default SorobanHooksInit;

