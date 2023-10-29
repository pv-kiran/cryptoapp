/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { Paper } from "@mui/material";
import { useState } from "react";
import { API_ENDPOINTS } from "../constants/endpoints";
import useFetch from "../hooks/useFetch";

// eslint-disable-next-line react/prop-types
function CoinChart({ coinId, coinName }) {
  // period wise display for data - 1day , 1week , ...
  const [period, setPeriod] = useState(`24h`);
  //chart data
  const { data } = useFetch(API_ENDPOINTS.FETCH_CHART_DATA(coinId, period));

  let chartLabel, chartData;

  // time duration logic for chart display
  const timePeriod = [
    {
      period: "1D",
      value: `24h`,
    },
    {
      period: "7D",
      value: `7d`,
    },
    {
      period: "1M",
      value: `30d`,
    },
    {
      period: "3M",
      value: `3m`,
    },
    {
      period: "1Y",
      value: `1y`,
    },
    {
      period: "3Y",
      value: `3y`,
    },
  ];

  if (data?.history?.length > 0) {
    chartLabel = data?.history?.map((item) => {
      return new Date(item.timestamp * 1000).toLocaleDateString();
    });
    chartData = data?.history?.map((item) => item?.price);
  }

  const coinChart = {
    labels: chartLabel,
    datasets: [
      {
        label: `${coinName} to USD chart`,
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
        marginTop: "1rem",
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
            xl: "block",
            lg: "block",
            md: "block",
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
