import { useEffect, useState } from "react";
// import { newsInstance } from "../api/axiosInstance";
// import { API_ENDPOINTS } from "../constants/endpoints";
import { Paper, Typography } from "@mui/material";

function CryptoNews() {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      // const { data } = await newsInstance.get(API_ENDPOINTS.FETCH_CRYPTO_NEWS);
      setNews(
        [
          {
            uuid: "06cf9575-9222-4e06-bae9-eb39f9c9cba4",
            title: "Bitcoin in Retirement: Bitcoin IRAs",
            description:
              "What exactly are the options for investors looking for Bitcoin exposure in their retirement portfolios?",
            keywords: "",
            snippet:
              "40% of millennial investors (aged 25 to 40) want the option to add cryptocurrencies to their retirement plans, according to a Spring 2021 survey by global marke...",
            url: "https://www.etftrends.com/2021/08/bitcoin-in-retirement-bitcoin-iras/",
            image_url:
              "https://www.etftrends.com/wp-content/uploads/2021/08/Bitcoin-In-Retirement-Bitcoin-IRAs.jpg",
            language: "en",
            published_at: "2021-08-26T16:37:15.000000Z",
            source: "etftrends.com",
            categories: ["business"],
            relevance_score: 21.079346,
          },
          {
            uuid: "0787ea47-eefc-4611-92e4-0d3a237cdf3c",
            title: "Bitcoin ₿",
            description:
              "In 2008, an unknown person or group going by the name Satoshi Nakamoto published a paper titled “Bitcoin: A Peer-to-Peer Electronic Cash System”. This paper...",
            keywords: "",
            snippet:
              "Bitcoin ₿\n\nHow it started, Where it is write now, What the future holds…\n\nIn 2008, an unknown person or group going by the name Satoshi Nakamoto published a...",
            url: "https://medium.com/@anshul.maheshwar/bitcoin-82dfd7b3fa17",
            image_url:
              "https://miro.medium.com/v2/resize:fit:728/1*YXgK066fYgR1N3n9Q3OMhw.jpeg",
            language: "en",
            published_at: "2023-04-21T03:40:56.000000Z",
            source: "medium.com",
            categories: ["tech"],
            relevance_score: 20.870125,
          },
          {
            uuid: "16df56bc-9d19-4ba5-b57c-6cb76191a3ce",
            title: "Bitcoin vs Bitcoin Cash- What’s the Difference?",
            description:
              "Bitcoin Cash (BCH), a cryptocurrency that aims to be an alternative to Bitcoin (BTC), the oldest and most traded cryptocurrency in the world.",
            keywords: "",
            snippet:
              "Bitcoin vs Bitcoin Cash- What’s the Difference?\n\nByline: Hannah Parker\n\nWhat is Bitcoin Cash?\n\nBitcoin Cash (BCH), a cryptocurrency that aims to be an alterna...",
            url: "https://fintechranking.com/2022/08/30/bitcoin-vs-bitcoin-cash-whats-the-difference/",
            image_url:
              "https://i0.wp.com/fintechranking.com/wp-content/uploads/2022/08/Bitcoin.png?fit=977%2C647&ssl=1",
            language: "en",
            published_at: "2022-08-30T14:08:00.000000Z",
            source: "fintechranking.com",
            categories: ["business", "tech"],
            relevance_score: 20.818836,
          },
        ].reverse()
      );
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
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1rem",
        }}>
        {news.map((news, index) => {
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
