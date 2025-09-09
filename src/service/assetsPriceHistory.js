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

            // issuer validation
            if (code !== "XLM" && !issuer) {
                throw new Error("Issuer is required for non-native assets");
            }
            if (code === "XLM" && issuer) {
                throw new Error("Issuer must not be provided for native asset XLM");
            }

            // build params dynamically
            const params = {
                code,
                startTimestamp,
                endTimestamp,
                offset,
            };
            if (issuer) params.issuer = issuer;

            const res = await axios({
                url: urlConfig.assetPriceHistory,
                method: "get",
                headers: {
                    "x-api-key": this.apiKey,
                },
                params,
            });

            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || error.message);
        }
    }
}

export default AssetsPriceHistory;
