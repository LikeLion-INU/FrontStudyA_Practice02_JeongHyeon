import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const raw = localStorage.getItem("auth-storage");
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      const token = parsed.state.accessToken;
      config.headers.Authorization = `Bearer ${token}`;
    }
    catch (error) {
      console.log("파싱 오류");
    }
  }
  return config;
});

export default axiosInstance;