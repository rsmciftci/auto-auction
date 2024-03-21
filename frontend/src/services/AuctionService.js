import axios from "axios"
import { BACKEND_URL } from "../config";

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
});

const auctionService = {
    createAuction: (data) => axiosInstance.post("create-auction-car-images", data),
}

export default auctionService;
