/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";

// eslint-disable-next-line react/prop-types
function CoinChart({ coinId }) {
  const [chart, setChart] = useState([]);
  const [period, setPeriod] = useState(1);
  let chartLabel, chartData;

  const timePeriod = [
    {
      period: "1D",
      value: 1,
    },
    {
      period: "7D",
      value: 7,
    },
    {
      period: "1M",
      value: 30,
    },
    {
      period: "6M",
      value: 180,
    },
    {
      period: "1Y",
      value: 365,
    },
    {
      period: "ALL",
      value: `max`,
    },
  ];

  const fetchChartData = async (coinId) => {
    try {
      const { data } = await cryptoInstance.get(
        API_ENDPOINTS.FETCH_CHART_DATA(coinId, period)
      );
      setChart(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChartData(coinId, period);
  }, [period]);

  if (chart.length > 0) {
    chartLabel = chart.map((item) => {
      const timestamp = item[0];
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hours = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);

      if (period === 1) {
        return `${hours}:${minutes}`;
      }
      return `${year}-${month}-${day}`;
    });
    chartData = chart.map((item) => item[1]);
  }

  const coinChart = {
    labels: chartLabel,
    datasets: [
      {
        label: `${coinId?.toUpperCase()} to INR chart`,
        data: chartData,
        borderColor: "#fff",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <Paper
      style={{
        backgroundColor: "#5f7f96",
        margin: "2rem 0",
        position: "relative",
      }}>
      <Line
        data={coinChart}
        options={options}
        style={{ width: "100%", height: "auto" }}
      />
      <ButtonGroup
        sx={{
          position: "absolute",
          top: "2.5rem",
          right: "2.5rem",
          padding: ".3rem",
          backgroundColor: "#abb4ba",
          display: {
            lg: "block",
            xl: "block",
            ad: "none",
            sm: "none",
            xs: "none",
          },
        }}
        variant="contained"
        aria-label="outlined primary button group">
        {timePeriod.map((time, index) => {
          return (
            <Button
              key={index}
              sx={{
                color: "#fff",
                backgroundColor: time.value === period ? "#0c3b59" : "#557285",
                marginRight: ".2rem",
                "&:hover": { backgroundColor: "#0c3b59" },
              }}
              onClick={() => setPeriod(time.value)}>
              {time.period}
            </Button>
          );
        })}
      </ButtonGroup>
    </Paper>
  );
}

export default CoinChart;
