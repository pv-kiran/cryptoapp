import axios from "axios";
import { API_CRYPTO_BASE_URL, API_NEWS_BASE_URL } from "../constants/endpoints";
const cryptoInstance = axios.create({
  baseURL: API_CRYPTO_BASE_URL,
});

const newsInstance = axios.create({
  baseURL: API_NEWS_BASE_URL,
});

cryptoInstance.interceptors.request.use(
  (request) => {
    request.headers["X-RapidAPI-Key"] = import.meta.env.VITE_REACT_API_KEY;
    request.headers["X-RapidAPI-Host"] = `coinranking1.p.rapidapi.com`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { cryptoInstance, newsInstance };
