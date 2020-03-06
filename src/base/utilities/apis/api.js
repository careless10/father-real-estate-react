import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 3000,
  headers: {}
});

instance.interceptors.response.use(function(response) {
  return response.data;
});

export default instance;
