import axios from "axios";

export const BASE_URL = 'https://run.mocky.io';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json"
    }
  });