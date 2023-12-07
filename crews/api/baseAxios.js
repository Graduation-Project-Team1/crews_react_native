import axios from "axios";

export const baseAxios = axios.create({
  baseURL: 'http://18.181.69.27:8080',
})