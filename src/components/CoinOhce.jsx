/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Paper, Typography } from "@mui/material";
import { API_ENDPOINTS } from "../constants/endpoints";
import { useEffect, useState } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { USDollar } from "../utils/convertor";

function CoinOhce({ coinId }) {
  const [ohce, setOhce] = useState({});
  const fetchOhce = async (id) => {
    try {
      const { data } = await cryptoInstance.get(
        API_ENDPOINTS.FETCH_COIN_OHCE(id)
      );
      console.log(data?.data?.ohlc);
      setOhce(data?.data?.ohlc);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOhce(coinId);
  }, [coinId]);

  return (
    <Paper
      sx={{
        padding: "1rem",
        width: {
          xl: "60%",
          lg: "60%",
          md: "100%",
          sx: "100%",
          xs: "100%",
        },
        backgroundColor: "#5f7f96",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "900", marginRight: "2.5rem" }}>
          OHCE Details
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: ".3rem 0",
          marginTop: "1.5rem",
        }}>
        <Typography>Open Rate</Typography>
        <Typography>{USDollar.format(ohce[0]?.open)}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: ".3rem 0",
        }}>
        <Typography>Close Rate</Typography>
        <Typography>{USDollar.format(ohce[0]?.close)}</Typography>
      </Box>
    </Paper>
  );
}

export default CoinOhce;
