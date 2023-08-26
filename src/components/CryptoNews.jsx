import { useEffect, useState } from "react";
import { newsInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";
import { Paper, Typography } from "@mui/material";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function CryptoNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchNews = async () => {
    try {
      setLoading(true);
      const { data } = await newsInstance.get(API_ENDPOINTS.FETCH_CRYPTO_NEWS);
      setNews(data.data.reverse());
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <Typography variant="h4" marginBottom={1}>
        News
      </Typography>
      <section
        style={{
          display: "grid",
          gridTemplateRows: loading ? "1fr .75fr" : "1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1rem",
        }}>
        {loading
          ? Array.from(new Array(3)).map((item, index) => {
              return (
                <Stack spacing={0.5} key={index}>
                  <Skeleton
                    className={`news-${index}`}
                    variant="rectangular"
                    width="17rem"
                    height="17rem"
                  />
                </Stack>
              );
            })
          : news.map((news, index) => {
              const { uuid, title, description, url, image_url } = news;
              return (
                <Paper
                  className={`news-${index}`}
                  elevation={1}
                  key={uuid}
                  style={{
                    backgroundImage: `url(${image_url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: ".6rem",
                  }}>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "rgba(0,0,0,.6)",
                      padding: ".5rem 1rem",
                      color: "#fff",
                      position: "relative",
                      borderRadius: ".6rem",
                    }}>
                    <Typography variant="h5" fontWeight={600}>
                      {title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight={100}
                      className="news-des">
                      {description}
                    </Typography>
                    <a
                      href={url}
                      style={{
                        color: "#fff",
                        position: "absolute",
                        bottom: "1rem",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noreferrer">
                      Read more &rarr;
                    </a>
                  </div>
                </Paper>
              );
            })}
      </section>
    </>
  );
}

export default CryptoNews;
