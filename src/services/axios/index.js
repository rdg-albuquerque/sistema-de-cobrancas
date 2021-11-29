import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000,
});

export default instanceAxios;
