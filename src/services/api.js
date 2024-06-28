import axios from "axios";

export const instance = axios.create({
  baseURL: "https://admin-dashboard-backend-rosy.vercel.app/api",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};
