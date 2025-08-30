import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

class WalletBalanceAlert {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async create({ webhook_url, walletAddress, chainType, additionalData = "" }) {
        try {
            const res = await axios({
                url: urlConfig.createWalletBalanceWatcher(),
                method: "post",
                headers: { "x-api-key": this.apiKey, "content-type": "application/json" },
                data: { webhook_url, walletAddress, chainType, additionalData },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }

    async getAll({ page = 1, limit = 10 }) {
        try {
            const res = await axios({
                url: urlConfig.getAllWalletBalanceWatchers(),
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
                url: urlConfig.getWalletBalanceWatcherById(id),
                method: "get",
                headers: { "x-api-key": this.apiKey },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }

    async update({ id, webhook_url, walletAddress, chainType, additionalData = "", status }) {
        try {
            const data = { webhook_url, walletAddress, chainType, additionalData };
            if (status !== undefined) data.status = status;

            const res = await axios({
                url: urlConfig.updateWalletBalanceWatcher(id),
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
                url: urlConfig.deleteWalletBalanceWatcher(id),
                method: "delete",
                headers: { "x-api-key": this.apiKey },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }
}

export default WalletBalanceAlert;
