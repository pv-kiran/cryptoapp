import { useParams } from "react-router-dom";
import { API_ENDPOINTS } from "../constants/endpoints";

import Paper from "@mui/material/Paper";
import { Box, Chip, Stack, Typography } from "@mui/material";
import ChangeInfo from "./ChangeInfo";
import PriceChange from "./PriceChange";
import CoinChart from "./CoinChart";

import CircularProgress from "@mui/material/CircularProgress";
import Error from "./shared/Error";
import CoinOhce from "./CoinOhce";
import { USDollar } from "../utils/convertor";
import useFetch from "../hooks/useFetch";

function Coin() {
  const { id } = useParams();

  const { data, error } = useFetch(API_ENDPOINTS.FETCH_BY_ID(id));

  // // const priceChangeSort = (priceChange) => {
  // //   return priceChange.sort((a, b) => {
  // //     return a - b;
  // //   });
  // // };

  return (
    <Box>
      {error ? (
        <Error></Error>
      ) : data.coin ? (
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
                    src={data.coin?.iconUrl}
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
                    {data.coin?.name}
                    {/* <span>({data.coin?.symbol})</span> */}
                  </Typography>
                </Box>
                <Chip
                  sx={{
                    backgroundColor: "#0e5f99",
                    margin: ".75rem 0",
                    color: "white",
                  }}
                  label={`Rank #${data.coin.rank}`}></Chip>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "900",
                      marginRight: "1rem",
                    }}>
                    {USDollar.format(data.coin?.price)}
                  </Typography>
                  <ChangeInfo cap_change={data.coin?.change}></ChangeInfo>
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
                      data.coin?.sparkline[data.coin?.sparkline?.length - 1]
                    )} */}
                    {/* {USDollar.format(priceChangeSort(data.coin?.sparkline)[0])} */}
                    {USDollar.format(data.coin?.sparkline[0])}
                  </Typography>
                  <Typography>24hrs</Typography>
                  <Typography>
                    {/* {USDollar.format(
                      priceChangeSort(data.coin?.sparkline)[
                        data.coin?.sparkline?.length - 1
                      ]
                    )} */}
                    {/* {USDollar.format(data.coin?.sparkline[0])} */}
                    {USDollar.format(
                      data.coin?.sparkline[data.coin?.sparkline?.length - 1]
                    )}
                  </Typography>
                </Box>
                <PriceChange
                  low={data.coin?.sparkline[0]}
                  high={
                    data.coin?.sparkline[data.coin?.sparkline?.length - 1]
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
                    {parseFloat(data.coin?.supply?.total).toFixed(2)}
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
                    {data.coin?.supply?.max
                      ? parseFloat(data.coin?.supply?.max).toFixed(2)
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
                    {parseFloat(data.coin?.supply?.circulating).toFixed(2)}
                  </Typography>
                </Box>
              </Paper>
            </Stack>
          </section>

          <CoinChart
            coinId={data.coin?.uuid}
            coinName={data.coin?.name}></CoinChart>
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
