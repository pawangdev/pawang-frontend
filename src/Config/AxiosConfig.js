import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    timeout: 5000,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('_token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, (error) => Promise.reject(error));

export default instance;