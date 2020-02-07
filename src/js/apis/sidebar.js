import axios from "./api";

export function getAllTypes() {
    return axios.get("/types");
}
