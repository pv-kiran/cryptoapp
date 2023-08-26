import { useEffect, useState } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";
import { Paper, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
function CryptoTrending() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTrending = async () => {
    try {
      setLoading(true);
      const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_TRENDING);
      setLoading(false);
      setTrending(data);
    } catch (err) {
      console.log(err);
    }
  };
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
        }}>
        {loading
          ? Array.from(new Array(4)).map((item, index) => {
              return (
                <Stack spacing={0.5} key={index}>
                  <Skeleton
                    variant="rectangular"
                    width="11rem"
                    height="11rem"
                  />
                </Stack>
              );
            })
          : trending.map((crypto, index) => {
              const {
                name,
                image,
                current_price,
                price_change_percentage_24h,
              } = crypto;
              return (
                <Paper
                  key={index}
                  elevation={2}
                  style={{
                    width: "11rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1rem",
                    height: "8.5rem",
                    backgroundColor: "#e1eff2",
                    borderRadius: ".3rem",
                    color: "#2c93b0",
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
                      &#8377; {current_price?.toLocaleString()}
                    </Typography>
                    <img
                      src={image}
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
                    {price_change_percentage_24h > 0 ? (
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

                    {`${parseFloat(price_change_percentage_24h).toFixed(2)}%`}
                  </Typography>
                </Paper>
              );
            })}
      </section>
    </>
  );
}

export default CryptoTrending;
