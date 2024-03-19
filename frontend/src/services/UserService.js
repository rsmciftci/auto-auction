import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:1323/",
});

const userService = {
    saveUser: (data) => axiosInstance.post("user", data),
    login: (data) => axiosInstance.post("login", data)
}

export default userService;
