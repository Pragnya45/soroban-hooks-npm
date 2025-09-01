import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

class WalletTransactionAlert {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async create({ webhook_url, chainType, walletAddress }) {
        try {
            const res = await axios({
                url: urlConfig.createWalletTransactionWatcher(),
                method: "post",
                headers: { "x-api-key": this.apiKey, "content-type": "application/json" },
                data: { webhook_url, chainType, walletAddress },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }

    async getAll({ page = 1, limit = 10 } = {}) {
        try {
            const res = await axios({
                url: urlConfig.getAllWalletTransactionWatchers(),
                method: "get",
                headers: { "x-api-key": this.apiKey },
                params: { page, limit },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }


    async getById(id) {
        try {
            const res = await axios({
                url: urlConfig.getWalletTransactionWatcherById(id),
                method: "get",
                headers: { "x-api-key": this.apiKey },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }

    async update({ id, webhook_url, chainType, walletAddress, status }) {
        try {
            const data = { webhook_url, chainType, walletAddress };
            if (status !== undefined) data.status = status;

            const res = await axios({
                url: urlConfig.updateWalletTransactionWatcher(id),
                method: "put",
                headers: { "x-api-key": this.apiKey, "content-type": "application/json" },
                data,
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }

    async delete(id) {
        try {
            const res = await axios({
                url: urlConfig.deleteWalletTransactionWatcher(id),
                method: "delete",
                headers: { "x-api-key": this.apiKey },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }
}

export default WalletTransactionAlert;
