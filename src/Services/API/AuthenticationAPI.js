import axios from "../../Config/AxiosConfig";

export const registerUser = async (payload) => {
    try {
        const res = await axios.post(`/auth/register`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

export const loginUser = async (payload) => {
    try {
        const res = await axios.post(`/auth/login`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

export const profileUser = async () => {
    try {
        const res = await axios.get('/auth/profile')
        return res.data.data;
    } catch (error) {
        return error.response;
    }
}

export const updateProfileUser = async (payload) => {
    try {
        const res = await axios.post(`/auth/change-profile`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

export const updatePassword = async (payload) => {
    try {
        const res = await axios.post(`/auth/change-password`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}