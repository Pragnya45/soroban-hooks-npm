import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

class ContractTransactions {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async fetch(address, { page = 1, limit = 10 } = {}) {
        if (!address) {
            throw new Error("Contract address is required");
        }

        try {
            const response = await axios.get(urlConfig.contractTransactions, {
                headers: { "x-api-key": this.apiKey },
                params: { address, page, limit },
            });

            return response.data;
        } catch (error) {
            console.error(
                "Error fetching contract transactions:",
                error.response?.data || error.message
            );
            throw new Error(error?.response?.data?.message || error.message);
        }
    }

}

export default ContractTransactions;
