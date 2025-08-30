import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

class AssetAlerts {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    // ✅ Create Asset Price Alert
    async create({ webhook_url, assetAddress, notificationInterval, chainType }) {
        try {
            const res = await axios({
                url: urlConfig.createAssetAlert(),
                method: "post",
                headers: { "x-api-key": this.apiKey },
                data: { webhook_url, assetAddress, notificationInterval, chainType },
            });

            return { error: false, response: res.data, message: "success" };
        } catch (error) {
            return {
                error: true,
                response: null,
                message: error?.response?.data?.message || error.message,
            };
        }
    }

    // ✅ Get All Asset Price Alerts
    async getAll({ page = 1, limit = 10 }) {
        const res = await axios({
            url: urlConfig.getAllAssetAlerts(),
            method: "get",
            headers: { "x-api-key": this.apiKey },
            params: { page, limit },
        });
        return res.data;
    }

    // ✅ Get Specific Asset Price Alert
    async getById(id) {
        const res = await axios({
            url: urlConfig.getAssetAlertById(id),
            method: "get",
            headers: { "x-api-key": this.apiKey },
        });
        return res.data;
    }

    // ✅ Update Asset Price Alert
    async update({ id, webhook_url, assetAddress, notificationInterval, chainType, status }) {
        const data = { webhook_url, assetAddress, notificationInterval, chainType };
        if (status !== undefined) data.status = status;

        const res = await axios({
            url: urlConfig.updateAssetAlert(id),
            method: "put",
            headers: {
                "x-api-key": this.apiKey,
                "content-type": "application/json",
            },
            data,
        });
        console.log(res.data);
        return res.data;
    }

    // ✅ Delete Asset Price Alert
    async delete(id) {
        const res = await axios({
            url: urlConfig.deleteAssetAlert(id),
            method: "delete",
            headers: { "x-api-key": this.apiKey },
        });
        return res.data;
    }
}

export default AssetAlerts;
