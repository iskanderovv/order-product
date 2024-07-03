import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE || "https://dummyjson.com";

const axiosBase = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export default axiosBase;
