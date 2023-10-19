import { useEffect, useState } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";
import { Paper, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { USDollar } from "../utils/convertor";
function CryptoTrending() {
  // trending crypto
  const [trending, setTrending] = useState([]);
  // for loading functionality - skeleton
  const [loading, setLoading] = useState(false);

  // method for fetching trending cryptos
  const fetchTrending = async () => {
    try {
      setLoading(true);
      const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_TRENDING);
      setLoading(false);
      setTrending(data?.data?.coins);
    } catch (err) {
      console.log(err);
    }
  };

  // fetch the trending cryptos
  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <>
      <Typography variant="h4" marginBottom={1}>
        Trending
      </Typography>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
        }}>
        {loading
          ? Array.from(new Array(4)).map((item, index) => {
              return (
                <Stack
                  sx={{
                    width: {
                      lg: "11rem",
                      md: "23%",
                      sm: "48%",
                      xs: "100%",
                    },
                    marginBottom: {
                      sm: ".5rem",
                      md: ".5rem",
                      xs: ".5rem",
                    },
                  }}
                  spacing={0.5}
                  key={index}>
                  <Skeleton variant="rectangular" width="100%" height="11rem" />
                </Stack>
              );
            })
          : trending.map((crypto, index) => {
              const { name, iconUrl, price, change } = crypto;
              return (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    // width: "11rem",
                    width: {
                      lg: "11rem",
                      md: "23%",
                      sm: "48%",
                      xs: "100%",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1rem",
                    height: "8.5rem",
                    backgroundColor: "#e1eff2",
                    borderRadius: ".3rem",
                    color: "#2c93b0",
                    marginBottom: "1rem",
                  }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {name}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Typography variant="h6" sx={{ fontWeight: "lighten" }}>
                      {USDollar.format(price)}
                    </Typography>
                    <img
                      src={iconUrl}
                      alt="coin image"
                      style={{ height: "1.6rem", width: "1.6rem" }}
                    />
                  </div>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      marginLeft: "-.7rem",
                    }}>
                    {change > 0 ? (
                      <ArrowDropUpIcon
                        fontSize="large"
                        sx={{
                          color: "green",
                        }}></ArrowDropUpIcon>
                    ) : (
                      <ArrowDropDownIcon
                        fontSize="large"
                        sx={{
                          color: "red",
                        }}></ArrowDropDownIcon>
                    )}

                    {`${parseFloat(change).toFixed(2)}%`}
                  </Typography>
                </Paper>
              );
            })}
      </section>
    </>
  );
}

export default CryptoTrending;
