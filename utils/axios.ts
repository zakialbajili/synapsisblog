import axios from "axios";

const API_URL = "https://gorest.co.in/public/v2";
const API_TOKEN = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`; // Ganti dengan token dari GoRest

const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: API_TOKEN,
        "Content-Type": "application/json",
    },
});

export default api;
