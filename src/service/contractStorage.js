import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

class ContractStorage {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async fetch(address, page = 1, limit = 20) {
        if (!address) {
            throw new Error("Contract address is required");
        }

        try {
            const response = await axios.get(urlConfig.contractStorage, {
                headers: { "x-api-key": this.apiKey },
                params: { address, page, limit },
            });

            return response.data;
        } catch (error) {
            console.error("Error fetching contract storage:", error.response?.data || error.message);
            throw new Error(error?.response?.data?.message || error.message);
        }
    }
}

export default ContractStorage;
