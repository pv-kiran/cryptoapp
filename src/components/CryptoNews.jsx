import { useEffect } from "react";
import { newsInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";

function CryptoNews() {
  const fetchNews = async () => {
    try {
      const { data } = await newsInstance.get(API_ENDPOINTS.FETCH_CRYPTO_NEWS);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return <div>CryptoNews</div>;
}

export default CryptoNews;
