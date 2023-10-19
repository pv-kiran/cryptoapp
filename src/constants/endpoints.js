export const API_CRYPTO_BASE_URL = "https://coinranking1.p.rapidapi.com";

export const API_NEWS_BASE_URL = "https://api.thenewsapi.com/v1/news";

export const API_ENDPOINTS = {
  FETCH_TRENDING: `/coins?limit=4&orderBy=marketCap&orderDirection=desc`,
  FETCH_TOP_10: "/coins?limit=10&orderBy=marketCap&orderDirection=desc",
  FETCH_ALL: (page) => {
    if (page) {
      return `/coins?limit=10&orderBy=marketCap&orderDirection=desc&offset=${page}`;
    }
    return `/coins?limit=100&orderBy=marketCap&orderDirection=desc`;
  },
  FETCH_BY_ID: (id) => {
    return `/coin/${id}`;
  },
  FETCH_CHART_DATA: (id, duration) => {
    return `coin/${id}/history?timePeriod=${duration}`;
  },
  FETCH_COIN_OHCE: (id) => {
    return `coin/${id}/ohlc?limit=1`;
  },
  FETCH_CRYPTO_NEWS:
    "/all?locale=us&language=en&api_token=46sPc7xUenbrEj00lgxV1kzDiR1JWIDdtA6DqAvS&search=bitcoin",
};
