import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

class ContractWatchers {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    // Create
    async create({ webhook_url, chainType, contractAddress, enableTransactionHistory = true, enableStorage = true }) {
        try {
            const res = await axios({
                url: urlConfig.createContractTransactionWatcher(),
                method: "post",
                headers: { "x-api-key": this.apiKey, "content-type": "application/json" },
                data: { webhook_url, chainType, contractAddress, enableTransactionHistory, enableStorage },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }

    // Get All
    async getAll({ page = 1, limit = 10 } = {}) {
        try {
            const res = await axios({
                url: urlConfig.getAllContractTransactionWatchers(),
                method: "get",
                headers: { "x-api-key": this.apiKey },
                params: { page, limit },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }


    // Get By ID
    async getById(id) {
        try {
            const res = await axios({
                url: urlConfig.getContractTransactionWatcherById(id),
                method: "get",
                headers: { "x-api-key": this.apiKey },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }

    // Update
    async update({ id, webhook_url, chainType, contractAddress, enableTransactionHistory, enableStorage, status }) {
        try {
            const data = { webhook_url, chainType, contractAddress, enableTransactionHistory, enableStorage };
            if (status !== undefined) data.status = status;

            const res = await axios({
                url: urlConfig.updateContractTransactionWatcher(id),
                method: "put",
                headers: { "x-api-key": this.apiKey, "content-type": "application/json" },
                data,
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }

    // Delete
    async delete(id) {
        try {
            const res = await axios({
                url: urlConfig.deleteContractTransactionWatcher(id),
                method: "delete",
                headers: { "x-api-key": this.apiKey },
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }
}

export default ContractWatchers;
