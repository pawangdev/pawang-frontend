import axios from "../../Config/AxiosConfig";

export const getAllCategories = async (type = "") => {
    try {
        const res = await axios.get(`/categories?type=${type}`)
        return res.data.data;
    } catch (error) {
        return error.response;
    }
}

export const getCategoryById = async (id) => {
    try {
        const res = await axios.get(`/categories/${id}`)
        return res.data.data;
    } catch (error) {
        return error.response;
    }
}

export const addSubCategory = async (id, payload) => {
    try {
        const res = await axios.post(`/categories/create/${id}`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

export const updateSubCategory = async (id, payload) => {
    try {
        const res = await axios.put(`/categories/update/${id}`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

export const deleteSubCategory = async (id) => {
    try {
        const res = await axios.delete(`/categories/delete/${id}`)
        return res;
    } catch (error) {
        return error.response;
    }
}