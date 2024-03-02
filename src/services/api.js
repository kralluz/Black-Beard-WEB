import axios from "axios";

const api = axios.create({
    baseURL: "https://connect-hub-back-end.onrender.com", // url para ambiente em produção
    //baseURL: "https://localhost:3000", // url para ambiente em desenvolvimento
    timeout: 80000,
});

api.interceptors.request.use(
    (config) => {
        const token =
            typeof window !== "undefined"
                ? localStorage.getItem("@CONNECT_HUB_TOKEN")
                : null;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;