import axios from "./api";

export function tryLogin(email, password) {
  return axios.post("/login", { email, password });
}
