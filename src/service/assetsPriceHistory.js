import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

/**
 * @typedef {Object} AssetPriceHistoryParams
 * @property {string} code - Asset code (e.g., XLM)
 * @property {string} [issuer] - Issuer address (required for non-XLM assets, forbidden for XLM)
 * @property {number} startTimestamp - Start timestamp in ms
 * @property {number} endTimestamp - End timestamp in ms
 * @property {string} [offset] - Resolution (default "1m")
 */

class AssetsPriceHistory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * Get asset price history.
     * @param {AssetPriceHistoryParams} params
     * @returns {Promise<any>}
     */
    async getPriceHistory({
        code,
        issuer,
        startTimestamp,
        endTimestamp,
        offset = "1m",
    }) {
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
