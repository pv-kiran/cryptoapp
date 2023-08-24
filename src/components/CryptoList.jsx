import { useEffect } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";

function CryptoList() {
  const fetchTopTen = async () => {
    try {
      const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_TOP_10);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTopTen();
  }, []);
  return <div>CryptoList</div>;
}

export default CryptoList;
