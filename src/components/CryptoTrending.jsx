import { useEffect } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";

function CryptoTrending() {
  // const [trending, setTrending] = useState([]);
  const fetchTrending = async () => {
    try {
      const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_TRENDING);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  return <div>CryptoTrending</div>;
}

export default CryptoTrending;
