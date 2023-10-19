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
    request.headers[
      "X-RapidAPI-Key"
    ] = `14b276b135msh0515a60d3d224e8p16c478jsnadaf53717d99`;
    request.headers["X-RapidAPI-Host"] = `coinranking1.p.rapidapi.com`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { cryptoInstance, newsInstance };
