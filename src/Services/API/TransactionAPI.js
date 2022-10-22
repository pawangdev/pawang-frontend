import axios from "../../Config/AxiosConfig";


export const getAllTransactions = async () => {
    try {
        const res = await axios.get(`/transactions`)
        return res.data.data;
    } catch (error) {
        return error.response;
    }
}

export const getTransactionById = async (id) => {
    try {
        const res = await axios.get(`/transactions/${id}`)
        return res.data.data;
    } catch (error) {
        return error.response;
    }
}

export const addTransaction = async (payload) => {
    try {
        const res = await axios.post(`/transactions/create`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

export const updateTransaction = async (id, payload) => {
    try {
        const res = await axios.put(`/transactions/update/${id}`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

export const deleteTransaction = async (id) => {
    try {
        const res = await axios.delete(`/transactions/delete/${id}`)
        return res;
    } catch (error) {
        return error.response;
    }
}