import axios from "axios";
import store from "./store";

const base_url = import.meta.env.VITE_API_BASE_URL;

const axiosClient = axios.create({
    baseURL: `${base_url}/api`,
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`;
    return config;
});

export default axiosClient;
