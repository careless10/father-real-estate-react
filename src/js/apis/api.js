import axios from "axios";

const instance = axios.create({
    baseURL: "/api",
    timeout: 3000,
    headers: {}
});

export default instance;
