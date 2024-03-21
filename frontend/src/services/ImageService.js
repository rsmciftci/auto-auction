import axios from "axios"
import { BACKEND_URL } from "../config";

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
});

const imageService = {
    uploadImages: (data) => axiosInstance.post("upload", data, {
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    }),
}

export default imageService;
