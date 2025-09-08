import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

class AssetsPriceHistory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getPriceHistory({ code, issuer, startTimestamp, endTimestamp, offset = "1m" }) {
        try {
            if (!code) throw new Error("Asset code is required");
            if (!startTimestamp) throw new Error("startTimestamp is required");
            if (!endTimestamp) throw new Error("endTimestamp is required");

            const res = await axios({
                url: urlConfig.assetPriceHistory,
                method: "get",
                headers: {
                    "x-api-key": this.apiKey,
                },
                params: {
                    code,
                    issuer,
                    startTimestamp,
                    endTimestamp,
                    offset,
                },
            });

            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }
}

export default AssetsPriceHistory;
