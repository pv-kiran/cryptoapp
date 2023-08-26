import { createContext, useEffect, useState } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";
export const PaginationContext = createContext();

import { Typography } from "@mui/material";
import DataTable from "./shared/DataTable";
import CryptoPagination from "./CryptoPagination";
import Error from "./shared/Error";

function HundredCrypto() {
  const [topTen, setTopTen] = useState([]);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const fetchTopTen = async () => {
    try {
      const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_ALL(page));
      setTopTen(data);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  useEffect(() => {
    fetchTopTen(page);
  }, [page]);
  return (
    <section style={{ marginTop: "1rem", paddingBottom: "1rem" }}>
      {error ? (
        <Error></Error>
      ) : (
        topTen.length > 0 && (
          <>
            <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
              Top 100 Coins on the market
            </Typography>
            <DataTable topTen={topTen}></DataTable>
            <PaginationContext.Provider value={{ page, handleChange }}>
              <CryptoPagination></CryptoPagination>
            </PaginationContext.Provider>
          </>
        )
      )}
    </section>
  );
}

export default HundredCrypto;
