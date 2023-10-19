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
import CoinOhce from "./CoinOhce";
import { USDollar } from "../utils/convertor";

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
      data?.data?.coin?.sparkline?.sort((a, b) => {
        return a - b;
      });
      setCoinInfo(data.data.coin);
    } catch (err) {
      setError(true);
    }
  };

  // const priceChangeSort = (priceChange) => {
  //   return priceChange.sort((a, b) => {
  //     return a - b;
  //   });
  // };

  useEffect(() => {
    fetchCoinById(id);
  }, [id]);

  return (
    <Box>
      {error ? (
        <Error></Error>
      ) : coinInfo ? (
        <>
          <section>
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
                    src={coinInfo?.iconUrl}
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
                    {coinInfo?.name}
                    {/* <span>({coinInfo?.symbol})</span> */}
                  </Typography>
                </Box>
                <Chip
                  sx={{
                    backgroundColor: "#0e5f99",
                    margin: ".75rem 0",
                    color: "white",
                  }}
                  label={`Rank #${coinInfo.rank}`}></Chip>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "900",
                      marginRight: "1rem",
                    }}>
                    {USDollar.format(coinInfo?.price)}
                  </Typography>
                  <ChangeInfo cap_change={coinInfo?.change}></ChangeInfo>
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
                  <Typography>
                    {/* {USDollar.format(
                      coinInfo?.sparkline[coinInfo?.sparkline?.length - 1]
                    )} */}
                    {/* {USDollar.format(priceChangeSort(coinInfo?.sparkline)[0])} */}
                    {USDollar.format(coinInfo?.sparkline[0])}
                  </Typography>
                  <Typography>24hrs</Typography>
                  <Typography>
                    {/* {USDollar.format(
                      priceChangeSort(coinInfo?.sparkline)[
                        coinInfo?.sparkline?.length - 1
                      ]
                    )} */}
                    {/* {USDollar.format(coinInfo?.sparkline[0])} */}
                    {USDollar.format(
                      coinInfo?.sparkline[coinInfo?.sparkline?.length - 1]
                    )}
                  </Typography>
                </Box>
                <PriceChange
                  low={coinInfo?.sparkline[0]}
                  high={
                    coinInfo?.sparkline[coinInfo?.sparkline?.length - 1]
                  }></PriceChange>
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
              <CoinOhce coinId={id}></CoinOhce>
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
                  <Typography>
                    {parseFloat(coinInfo?.supply?.total).toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: ".3rem 0",
                  }}>
                  <Typography>Max Supply</Typography>
                  <Typography>
                    {coinInfo?.supply?.max
                      ? parseFloat(coinInfo?.supply?.max).toFixed(2)
                      : "NIL"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: ".3rem 0",
                  }}>
                  <Typography>Circulating Supply</Typography>
                  <Typography>
                    {parseFloat(coinInfo?.supply?.circulating).toFixed(2)}
                  </Typography>
                </Box>
              </Paper>
            </Stack>
          </section>

          <CoinChart
            coinId={coinInfo?.uuid}
            coinName={coinInfo?.name}></CoinChart>
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
    </Box>
  );
}

export default Coin;
