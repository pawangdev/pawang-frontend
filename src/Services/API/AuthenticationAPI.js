import axios from "axios";

const registerUser = async (payload) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_URL_API}/users/register`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

const loginUser = async (payload) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_URL_API}/users/login`, payload)
        return res;
    } catch (error) {
        return error.response;
    }
}

export { registerUser, loginUser }