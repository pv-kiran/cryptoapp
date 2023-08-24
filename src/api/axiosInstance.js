import axios from "axios";
import { API_CRYPTO_BASE_URL, API_NEWS_BASE_URL } from "../constants/endpoints";
const cryptoInstance = axios.create({
  baseURL: API_CRYPTO_BASE_URL,
});

const newsInstance = axios.create({
  baseURL: API_NEWS_BASE_URL,
});

export { cryptoInstance, newsInstance };
