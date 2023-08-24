import { useEffect, useState } from "react";
// import { cryptoInstance } from "../api/axiosInstance";
// import { API_ENDPOINTS } from "../constants/endpoints";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function CryptoList() {
  const [topTen, setTopTen] = useState([]);
  const fetchTopTen = async () => {
    try {
      // const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_TRENDING);
      setTopTen([
        {
          id: "bitcoin",
          symbol: "btc",
          name: "Bitcoin",
          image:
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          current_price: 2147447,
          market_cap: 41840142768713,
          market_cap_rank: 1,
          fully_diluted_valuation: 45135477535667,
          total_volume: 872481766635,
          high_24h: 2201871,
          low_24h: 2144504,
          price_change_24h: -38853.686596667394,
          price_change_percentage_24h: -1.77714,
          market_cap_change_24h: -786477821373.7578,
          market_cap_change_percentage_24h: -1.84504,
          circulating_supply: 19466793.0,
          total_supply: 21000000.0,
          max_supply: 21000000.0,
          ath: 5128383,
          ath_change_percentage: -58.0904,
          ath_date: "2021-11-10T14:24:11.849Z",
          atl: 3993.42,
          atl_change_percentage: 53720.66409,
          atl_date: "2013-07-05T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-24T18:25:54.209Z",
        },
        {
          id: "ethereum",
          symbol: "eth",
          name: "Ethereum",
          image:
            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
          current_price: 135818,
          market_cap: 16355411537519,
          market_cap_rank: 2,
          fully_diluted_valuation: 16355411537519,
          total_volume: 553564155499,
          high_24h: 139474,
          low_24h: 135652,
          price_change_24h: -2902.098955651716,
          price_change_percentage_24h: -2.09205,
          market_cap_change_24h: -354957570584.6094,
          market_cap_change_percentage_24h: -2.12418,
          circulating_supply: 120214161.666801,
          total_supply: 120214161.666801,
          max_supply: null,
          ath: 362338,
          ath_change_percentage: -62.45407,
          ath_date: "2021-11-10T14:24:19.604Z",
          atl: 28.13,
          atl_change_percentage: 483502.35102,
          atl_date: "2015-10-20T00:00:00.000Z",
          roi: {
            times: 83.5587437036047,
            currency: "btc",
            percentage: 8355.87437036047,
          },
          last_updated: "2023-08-24T18:25:51.830Z",
        },
        {
          id: "tether",
          symbol: "usdt",
          name: "Tether",
          image:
            "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
          current_price: 82.55,
          market_cap: 6849732559945,
          market_cap_rank: 3,
          fully_diluted_valuation: 6849732559945,
          total_volume: 1224722913716,
          high_24h: 82.84,
          low_24h: 82.23,
          price_change_24h: 0.01764714,
          price_change_percentage_24h: 0.02138,
          market_cap_change_24h: 17213332772,
          market_cap_change_percentage_24h: 0.25193,
          circulating_supply: 82845776808.287,
          total_supply: 82845776808.287,
          max_supply: null,
          ath: 91.22,
          ath_change_percentage: -9.3622,
          ath_date: "2018-07-24T00:00:00.000Z",
          atl: 36.86,
          atl_change_percentage: 124.31322,
          atl_date: "2015-03-02T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-24T18:25:01.025Z",
        },
        {
          id: "binancecoin",
          symbol: "bnb",
          name: "BNB",
          image:
            "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
          current_price: 17931.94,
          market_cap: 2762674472354,
          market_cap_rank: 4,
          fully_diluted_valuation: 3591243473015,
          total_volume: 36260880246,
          high_24h: 18195.54,
          low_24h: 17776.05,
          price_change_24h: 26.85,
          price_change_percentage_24h: 0.14998,
          market_cap_change_24h: 6029240962,
          market_cap_change_percentage_24h: 0.21872,
          circulating_supply: 153856150.0,
          total_supply: 153856150.0,
          max_supply: 200000000.0,
          ath: 50351,
          ath_change_percentage: -64.33785,
          ath_date: "2021-05-10T07:24:17.097Z",
          atl: 2.58,
          atl_change_percentage: 694602.72962,
          atl_date: "2017-10-19T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-24T18:25:53.731Z",
        },
        {
          id: "ripple",
          symbol: "xrp",
          name: "XRP",
          image:
            "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
          current_price: 42.55,
          market_cap: 2253764800919,
          market_cap_rank: 5,
          fully_diluted_valuation: 4259282150350,
          total_volume: 67989534515,
          high_24h: 44.12,
          low_24h: 42.36,
          price_change_24h: -1.158845377600386,
          price_change_percentage_24h: -2.65115,
          market_cap_change_24h: -67266141845.60254,
          market_cap_change_percentage_24h: -2.89811,
          circulating_supply: 52914193551.0,
          total_supply: 99988485729.0,
          max_supply: 100000000000.0,
          ath: 215.1,
          ath_change_percentage: -80.19924,
          ath_date: "2018-01-07T00:00:00.000Z",
          atl: 0.159343,
          atl_change_percentage: 26629.96654,
          atl_date: "2013-08-16T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-24T18:25:45.750Z",
        },
        {
          id: "usd-coin",
          symbol: "usdc",
          name: "USD Coin",
          image:
            "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
          current_price: 82.46,
          market_cap: 2133599286423,
          market_cap_rank: 6,
          fully_diluted_valuation: 2133667772460,
          total_volume: 407212317881,
          high_24h: 83.01,
          low_24h: 82.23,
          price_change_24h: -0.039328616951294755,
          price_change_percentage_24h: -0.04767,
          market_cap_change_24h: -3875978396.1694336,
          market_cap_change_percentage_24h: -0.18133,
          circulating_supply: 25860907993.7291,
          total_supply: 25861738098.5791,
          max_supply: null,
          ath: 87.19,
          ath_change_percentage: -5.37524,
          ath_date: "2020-03-13T02:35:16.858Z",
          atl: 65.31,
          atl_change_percentage: 26.32923,
          atl_date: "2021-05-19T13:14:05.611Z",
          roi: null,
          last_updated: "2023-08-24T18:25:48.821Z",
        },
        {
          id: "staked-ether",
          symbol: "steth",
          name: "Lido Staked Ether",
          image:
            "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
          current_price: 135792,
          market_cap: 1137357523579,
          market_cap_rank: 7,
          fully_diluted_valuation: 1137357523579,
          total_volume: 622615522,
          high_24h: 139440,
          low_24h: 135629,
          price_change_24h: -3169.2865117017645,
          price_change_percentage_24h: -2.28069,
          market_cap_change_24h: -20005475340.62671,
          market_cap_change_percentage_24h: -1.72854,
          circulating_supply: 8362478.28450158,
          total_supply: 8362478.28450158,
          max_supply: 8362478.28450158,
          ath: 358528,
          ath_change_percentage: -62.06428,
          ath_date: "2021-11-10T14:40:47.256Z",
          atl: 35697,
          atl_change_percentage: 281.01323,
          atl_date: "2020-12-22T04:08:21.854Z",
          roi: null,
          last_updated: "2023-08-24T18:25:50.458Z",
        },
        {
          id: "cardano",
          symbol: "ada",
          name: "Cardano",
          image:
            "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
          current_price: 21.87,
          market_cap: 767506257849,
          market_cap_rank: 8,
          fully_diluted_valuation: 985526068608,
          total_volume: 13766053479,
          high_24h: 22.35,
          low_24h: 21.67,
          price_change_24h: -0.17370056580026727,
          price_change_percentage_24h: -0.78781,
          market_cap_change_24h: -7905138306.776367,
          market_cap_change_percentage_24h: -1.01948,
          circulating_supply: 35045020830.3234,
          total_supply: 45000000000.0,
          max_supply: 45000000000.0,
          ath: 225.26,
          ath_change_percentage: -90.27801,
          ath_date: "2021-09-02T06:00:10.474Z",
          atl: 1.38,
          atl_change_percentage: 1492.24368,
          atl_date: "2017-11-02T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-24T18:25:54.487Z",
        },
        {
          id: "dogecoin",
          symbol: "doge",
          name: "Dogecoin",
          image:
            "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
          current_price: 5.18,
          market_cap: 729754046809,
          market_cap_rank: 9,
          fully_diluted_valuation: 729752957809,
          total_volume: 19984221386,
          high_24h: 5.31,
          low_24h: 5.16,
          price_change_24h: -0.1026024630359661,
          price_change_percentage_24h: -1.94215,
          market_cap_change_24h: -15112285537.255127,
          market_cap_change_percentage_24h: -2.02886,
          circulating_supply: 140723956383.705,
          total_supply: 140723746383.705,
          max_supply: null,
          ath: 53.62,
          ath_change_percentage: -90.32982,
          ath_date: "2021-05-08T05:08:23.458Z",
          atl: 0.00552883,
          atl_change_percentage: 93679.82146,
          atl_date: "2015-05-06T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-24T18:25:53.422Z",
        },
        {
          id: "solana",
          symbol: "sol",
          name: "Solana",
          image:
            "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
          current_price: 1727.82,
          market_cap: 704718584449,
          market_cap_rank: 10,
          fully_diluted_valuation: 960270834866,
          total_volume: 30752141571,
          high_24h: 1811.93,
          low_24h: 1724.78,
          price_change_24h: -37.851384927669415,
          price_change_percentage_24h: -2.14374,
          market_cap_change_24h: -14125717862.940186,
          market_cap_change_percentage_24h: -1.96506,
          circulating_supply: 407770662.395342,
          total_supply: 555640624.573892,
          max_supply: null,
          ath: 19286.66,
          ath_change_percentage: -91.03811,
          ath_date: "2021-11-06T21:54:35.825Z",
          atl: 38.03,
          atl_change_percentage: 4445.47855,
          atl_date: "2020-05-11T19:35:23.449Z",
          roi: null,
          last_updated: "2023-08-24T18:25:48.490Z",
        },
      ]);
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
      <TableContainer sx={{ padding: ".7rem" }} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Current Price</TableCell>
              <TableCell align="right">24h</TableCell>
              <TableCell align="right">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topTen.map((crypto, index) => {
              const {
                name,
                image,
                current_price,
                market_cap,
                price_change_percentage_24h,
              } = crypto;
              return (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { bgcolor: "#87918e" },
                  }}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}>
                    <img
                      src={image}
                      alt="image"
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "1rem",
                      }}
                    />
                    {name}
                  </TableCell>
                  <TableCell align="right">&#8377; {current_price}</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color:
                        price_change_percentage_24h > 0 ? "#79d47c" : "#de4a33",
                    }}>
                    {price_change_percentage_24h}
                  </TableCell>
                  <TableCell align="right">&#8377; {market_cap}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default CryptoList;
