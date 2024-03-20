import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:1323/",
});

const userService = {
    saveUser: (data) => axiosInstance.post("user", data),
    login: (loginData) => axiosInstance.post("login",loginData)
}

export default userService;
