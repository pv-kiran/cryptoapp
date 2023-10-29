import { API_ENDPOINTS } from "../constants/endpoints";

import { Box, Typography } from "@mui/material";
import DataTable from "./shared/DataTable";
import TableSkeleton from "./shared/TableSkeleton";
import useFetch from "../hooks/useFetch";

function CryptoList() {
  const { data, loading } = useFetch(API_ENDPOINTS.FETCH_TOP_10);
  return (
    <Box
      sx={{
        marginTop: {
          xl: "-9rem",
          lg: "-9rem",
          md: "-9rem",
          sx: "3rem",
          xs: "3rem",
        },
        paddingBottom: "3rem",
      }}>
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        TOP 10
      </Typography>
      {loading ? (
        Array.from(new Array(3)).map((item, index) => {
          return <TableSkeleton key={index}></TableSkeleton>;
        })
      ) : (
        <DataTable topTen={data?.coins}></DataTable>
      )}
    </Box>
  );
}

export default CryptoList;
