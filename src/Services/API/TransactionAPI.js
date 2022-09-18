import axios from "axios";
import { config } from "./config";

const getAllTransactions = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_URL_API}/transactions`, config)
        return res.data.data;
    } catch (error) {
        return error.response;
    }
}

export { getAllTransactions }