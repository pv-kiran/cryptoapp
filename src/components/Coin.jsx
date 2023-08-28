import { useParams } from "react-router-dom";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";
import { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import { Box, Chip, Stack, Typography } from "@mui/material";
import ChangeInfo from "./ChangeInfo";
import PriceChange from "./PriceChange";
import CoinChart from "./CoinChart";

import CircularProgress from "@mui/material/CircularProgress";
import Error from "./shared/Error";

function Coin() {
  // coin information
  const [coinInfo, setCoinInfo] = useState(null);
  // coin id
  const { id } = useParams();
  // setting the error stage
  const [error, setError] = useState(false);

  // fetch the coin information
  const fetchCoinById = async (id) => {
    try {
      const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_BY_ID(id));
      setCoinInfo(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchCoinById(id);
  }, [id]);

  return (
    <>
      {error ? (
        <Error></Error>
      ) : coinInfo ? (
        <>
          {coinInfo?.map((info, index) => {
            const {
              name,
              symbol,
              image,
              current_price,
              market_cap_rank,
              circulating_supply,
              total_supply,
              max_supply,
              market_cap,
              market_cap_change_24h,
              market_cap_change_percentage_24h,
              price_change_percentage_24h,
              high_24h,
              low_24h,
            } = info;
            return (
              <section key={index}>
                <Stack
                  direction={{
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                  }}
                  spacing={2}
                  sx={{
                    marginBottom: "1rem",
                  }}>
                  <Paper
                    sx={{
                      width: {
                        xl: "35%",
                        lg: "35%",
                        md: "100%",
                        sx: "100%",
                        xs: "100%",
                      },
                      padding: "1rem",
                      backgroundColor: "#5f7f96",
                      marginBottom: "1rem",
                    }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}>
                      <img
                        src={image}
                        style={{
                          width: "1.7rem",
                          height: "1.7rem",
                          marginRight: "1rem",
                        }}
                        alt="coin image"
                      />
                      <Typography
                        variant="h5"
                        sx={{
                          textTransform: "uppercase",
                          fontWeight: "900",
                        }}>
                        {name} <span>({symbol})</span>
                      </Typography>
                    </Box>
                    <Chip
                      sx={{
                        backgroundColor: "#0e5f99",
                        margin: ".75rem 0",
                        color: "white",
                      }}
                      label={`Rank #${market_cap_rank}`}></Chip>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "900",
                          marginRight: "1rem",
                        }}>
                        &#8377;{current_price?.toLocaleString()}
                      </Typography>
                      <ChangeInfo
                        cap_change={price_change_percentage_24h}></ChangeInfo>
                    </Box>
                  </Paper>
                  <Paper
                    sx={{
                      padding: "1rem",
                      width: {
                        xl: "65%",
                        lg: "65%",
                        md: "100%",
                        sx: "100%",
                        xs: "100%",
                      },
                      backgroundColor: "#5f7f96",
                    }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "900", marginRight: "2.5rem" }}>
                      Price Change In 24hrs
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "1rem 0",
                      }}>
                      <Typography>&#8377;{low_24h.toLocaleString()}</Typography>
                      <Typography>24hrs</Typography>
                      <Typography>
                        &#8377;{high_24h?.toLocaleString()}
                      </Typography>
                    </Box>
                    <PriceChange low={low_24h} high={high_24h}></PriceChange>
                  </Paper>
                </Stack>
                <Stack
                  direction={{
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                  }}
                  spacing={2}>
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
                        Market Cap
                      </Typography>
                      <ChangeInfo
                        cap_change={
                          market_cap_change_percentage_24h
                        }></ChangeInfo>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: ".3rem 0",
                        marginTop: "1.5rem",
                      }}>
                      <Typography>Market Cap</Typography>
                      <Typography>
                        &#8377;{market_cap?.toLocaleString()}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: ".3rem 0",
                      }}>
                      <Typography>Market Cap Change in 24h</Typography>
                      <Typography>
                        &#8377;{market_cap_change_24h?.toLocaleString()}
                      </Typography>
                    </Box>
                  </Paper>
                  <Paper
                    elevation={2}
                    sx={{
                      padding: "1rem",
                      width: {
                        xl: "40%",
                        lg: "40%",
                        md: "100%",
                        sx: "100%",
                        xs: "100%",
                      },
                      backgroundColor: "#5f7f96",
                    }}>
                    <Typography variant="h5" sx={{ fontWeight: "900" }}>
                      Coins Supply
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: ".3rem 0",
                      }}>
                      <Typography>Total Supply</Typography>
                      <Typography>{total_supply?.toLocaleString()}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: ".3rem 0",
                      }}>
                      <Typography>Max Supply</Typography>
                      <Typography>{max_supply?.toLocaleString()}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: ".3rem 0",
                      }}>
                      <Typography>Circulating Supply</Typography>
                      <Typography>
                        {circulating_supply?.toLocaleString()}
                      </Typography>
                    </Box>
                  </Paper>
                </Stack>
              </section>
            );
          })}
          <CoinChart coinId={id}></CoinChart>
        </>
      ) : (
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default Coin;
