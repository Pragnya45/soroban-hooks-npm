const baseUrl = "https://api.sorobanhooks.xyz/v1/api";

const urlConfig = {
    // Asset Alerts
    createAssetAlert: () => `${baseUrl}/get_native_token_price`,
    getAllAssetAlerts: () => `${baseUrl}/get_native_token_price`,
    getAssetAlertById: (id) => `${baseUrl}/get_native_token_price/${id}`,
    updateAssetAlert: (id) => `${baseUrl}/get_native_token_price/${id}`,
    deleteAssetAlert: (id) => `${baseUrl}/get_native_token_price/${id}`,

    // --- Wallet Transaction Watchers  ---
    createWalletTransactionWatcher: () => `${baseUrl}/get_wallet_transactions`,
    getAllWalletTransactionWatchers: () => `${baseUrl}/get_wallet_transactions`,
    getWalletTransactionWatcherById: (id) => `${baseUrl}/get_wallet_transactions/${id}`,
    updateWalletTransactionWatcher: (id) => `${baseUrl}/get_wallet_transactions/${id}`,
    deleteWalletTransactionWatcher: (id) => `${baseUrl}/get_wallet_transactions/${id}`,

    // ✅ Contract Transaction Watchers
    createContractTransactionWatcher: () => `${baseUrl}/get_contract_transaction`,
    getAllContractTransactionWatchers: () => `${baseUrl}/get_contract_transaction`,
    getContractTransactionWatcherById: (id) => `${baseUrl}/get_contract_transaction/${id}`,
    updateContractTransactionWatcher: (id) => `${baseUrl}/get_contract_transaction/${id}`,
    deleteContractTransactionWatcher: (id) => `${baseUrl}/get_contract_transaction/${id}`,

    // ✅ Wallet Balance Watchers
    createWalletBalanceWatcher: () => `${baseUrl}/get_wallet_balance`,
    getAllWalletBalanceWatchers: () => `${baseUrl}/get_wallet_balance`,
    getWalletBalanceWatcherById: (id) => `${baseUrl}/get_wallet_balance/${id}`,
    updateWalletBalanceWatcher: (id) => `${baseUrl}/get_wallet_balance/${id}`,
    deleteWalletBalanceWatcher: (id) => `${baseUrl}/get_wallet_balance/${id}`,

    // ✅ New: Asset Price History
    assetPriceHistory: `${baseUrl}/assets/price-history`,

    //fetch contract transactions
    contractTransactions: `${baseUrl}/contract/transactions`,

    contractStorage: `${baseUrl}/contract/storage`,
};

export default urlConfig;
