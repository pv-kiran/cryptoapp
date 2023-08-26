import { useEffect, useState } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";

import { Typography } from "@mui/material";
import DataTable from "./shared/DataTable";
import TableSkeleton from "./shared/TableSkeleton";

function CryptoList() {
  const [topTen, setTopTen] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTopTen = async () => {
    try {
      setLoading(true);
      const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_TOP_10);
      setTopTen(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTopTen();
  }, []);
  return (
    <section style={{ marginTop: "-10rem", paddingBottom: "3rem" }}>
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        TOP 10
      </Typography>
      {loading ? (
        Array.from(new Array(3)).map((item, index) => {
          return <TableSkeleton key={index}></TableSkeleton>;
        })
      ) : (
        <DataTable topTen={topTen}></DataTable>
      )}
    </section>
  );
}

export default CryptoList;
