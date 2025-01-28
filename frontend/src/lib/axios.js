import axios from "axios"

export const axiosInstance = axios.create({
  baseURL:"https://chatty-chat-application-1.onrender.com/api",
  // baseURL: import.meta.env.MODE  === "development" ? "http://localhost:5001/api" : "/api",
  withCredentials: true,
});