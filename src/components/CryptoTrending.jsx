import { useEffect, useState } from "react";
// import { cryptoInstance } from "../api/axiosInstance";
// import { API_ENDPOINTS } from "../constants/endpoints";
import { Paper, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function CryptoTrending() {
  const [trending, setTrending] = useState([]);
  const fetchTrending = async () => {
    try {
      // const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_TRENDING);
      setTrending([
        {
          id: "bitcoin",
          symbol: "btc",
          name: "Bitcoin",
          image:
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          current_price: 2151794,
          market_cap: 41890842518955,
          market_cap_rank: 1,
          fully_diluted_valuation: 45190212189643,
          total_volume: 1168581007734,
          high_24h: 2201871,
          low_24h: 2148023,
          price_change_24h: -34337.81582949497,
          price_change_percentage_24h: -1.57071,
          market_cap_change_24h: -638627356890.5469,
          market_cap_change_percentage_24h: -1.50161,
          circulating_supply: 19466775,
          total_supply: 21000000,
          max_supply: 21000000,
          ath: 5128383,
          ath_change_percentage: -58.00772,
          ath_date: "2021-11-10T14:24:11.849Z",
          atl: 3993.42,
          atl_change_percentage: 53826.83828,
          atl_date: "2013-07-05T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-24T17:33:17.768Z",
        },
        {
          id: "ethereum",
          symbol: "eth",
          name: "Ethereum",
          image:
            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
          current_price: 136235,
          market_cap: 16374815970080,
          market_cap_rank: 2,
          fully_diluted_valuation: 16374815970080,
          total_volume: 608684457984,
          high_24h: 139474,
          low_24h: 135652,
          price_change_24h: -2840.9413038854254,
          price_change_percentage_24h: -2.04273,
          market_cap_change_24h: -335458702587.6543,
          market_cap_change_percentage_24h: -2.0075,
          circulating_supply: 120214161.666801,
          total_supply: 120214161.666801,
          max_supply: null,
          ath: 362338,
          ath_change_percentage: -62.40662,
          ath_date: "2021-11-10T14:24:19.604Z",
          atl: 28.13,
          atl_change_percentage: 484113.51519,
          atl_date: "2015-10-20T00:00:00.000Z",
          roi: {
            times: 83.64142041704812,
            currency: "btc",
            percentage: 8364.142041704812,
          },
          last_updated: "2023-08-24T17:33:12.888Z",
        },
        {
          id: "tether",
          symbol: "usdt",
          name: "Tether",
          image:
            "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
          current_price: 82.51,
          market_cap: 6835228708224,
          market_cap_rank: 3,
          fully_diluted_valuation: 6835228708224,
          total_volume: 1289704778765,
          high_24h: 82.84,
          low_24h: 82.23,
          price_change_24h: 0.04975356,
          price_change_percentage_24h: 0.06034,
          market_cap_change_24h: 6145986211,
          market_cap_change_percentage_24h: 0.09,
          circulating_supply: 82845776808.287,
          total_supply: 82845776808.287,
          max_supply: null,
          ath: 91.22,
          ath_change_percentage: -9.39913,
          ath_date: "2018-07-24T00:00:00.000Z",
          atl: 36.86,
          atl_change_percentage: 124.22184,
          atl_date: "2015-03-02T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-24T17:30:00.530Z",
        },
        {
          id: "binancecoin",
          symbol: "bnb",
          name: "BNB",
          image:
            "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
          current_price: 17975.12,
          market_cap: 2764444300605,
          market_cap_rank: 4,
          fully_diluted_valuation: 3593544100259,
          total_volume: 35652973683,
          high_24h: 18195.54,
          low_24h: 17776.05,
          price_change_24h: 7.31,
          price_change_percentage_24h: 0.04071,
          market_cap_change_24h: 1901050638,
          market_cap_change_percentage_24h: 0.06882,
          circulating_supply: 153856150,
          total_supply: 153856150,
          max_supply: 200000000,
          ath: 50351,
          ath_change_percentage: -64.33345,
          ath_date: "2021-05-10T07:24:17.097Z",
          atl: 2.58,
          atl_change_percentage: 694688.46911,
          atl_date: "2017-10-19T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-24T17:33:14.811Z",
        },
      ]);
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
        {trending.map((crypto, index) => {
          const { name, image, current_price, price_change_percentage_24h } =
            crypto;
          return (
            <Paper
              key={index}
              elevation={1}
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
                  &#8377; {current_price}
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

                {price_change_percentage_24h}
              </Typography>
            </Paper>
          );
        })}
      </section>
    </>
  );
}

export default CryptoTrending;
