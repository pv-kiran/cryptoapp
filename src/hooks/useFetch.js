import { useEffect, useState } from "react";
import { cryptoInstance } from "../api/axiosInstance";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const { data } = await cryptoInstance.get(url);
      setData(data?.data);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
