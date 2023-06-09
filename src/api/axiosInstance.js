import axios from "axios";
const baseUrl = "https://twitter-api-2023.onrender.com";
const axiosInstance = axios.create({ baseURL: baseUrl });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);
export default axiosInstance;
