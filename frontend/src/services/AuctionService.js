import axios from "axios"
import { BACKEND_URL } from "../config";

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
});

const auctionService = {
    createAuction: (data) => axiosInstance.post("create-auction-car-images", data),
    getAuctionById: (id) => axiosInstance.get("auction/"+id),
    getAuctionsEndingSoon :() => axiosInstance.get("auctions"),
    getAuctionsByUserId :(userId) => axiosInstance.get("auctions/user/"+userId),
}

export default auctionService;
