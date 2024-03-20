import axios from "axios"
import { BACKEND_URL } from "../config";

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
});

const userService = {
    saveUser: (data) => axiosInstance.post("user", data),
    login: (loginData) => axiosInstance.post("login",loginData)
}

export default userService;
