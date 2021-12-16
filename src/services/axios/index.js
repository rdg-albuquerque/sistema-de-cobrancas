import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://desafio-m05-6codam.herokuapp.com/",
  timeout: 1000,
});

export default instanceAxios;
