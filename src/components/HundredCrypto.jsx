/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { API_ENDPOINTS } from "../constants/endpoints";

import { Typography } from "@mui/material";
import DataTable from "./shared/DataTable";
import CryptoPagination from "./CryptoPagination";
import Error from "./shared/Error";
import useFetch from "../hooks/useFetch";

function HundredCrypto() {
  // pagination
  const [page, setPage] = useState(1);
  // pagination
  const handleChange = (event, value) => {
    setPage(value);
  };

  const { data, error } = useFetch(API_ENDPOINTS.FETCH_ALL(page));

  return (
    <section style={{ marginTop: "1rem", paddingBottom: "1rem" }}>
      {error ? (
        <Error></Error>
      ) : (
        data?.coins?.length > 0 && (
          <>
            <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
              Top 100 Coins
            </Typography>
            <DataTable topTen={data?.coins}></DataTable>

            <CryptoPagination
              page={page}
              handleChange={handleChange}></CryptoPagination>
          </>
        )
      )}
    </section>
  );
}

export default HundredCrypto;
