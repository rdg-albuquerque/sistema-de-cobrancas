import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://desafio-final-cubos.herokuapp.com/",
  timeout: 1000,
});

export default instanceAxios;
