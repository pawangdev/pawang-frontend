import axios from "../../Config/AxiosConfig";

export const getAllWallets = async () => {
    try {
        const res = await axios.get(`/wallets`)
        return res.data.data;
    } catch (error) {
        return error.response;
    }
}

export const getWalletById = async (id) => {
    try {
        const res = await axios.get(`/wallets/${id}`)
        return res.data.data;
    } catch (error) {
        return error.response;
    }
}

export const addWallet = async (payload) => {
    try {
        const res = await axios.post(`/wallets/create`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

export const updateWallet = async (id, payload) => {
    try {
        const res = await axios.put(`/wallets/update/${id}`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}
export const deleteWallet = async (id) => {
    try {
        const res = await axios.delete(`/wallets/delete/${id}`)
        return res;
    } catch (error) {
        return error.response;
    }
}

