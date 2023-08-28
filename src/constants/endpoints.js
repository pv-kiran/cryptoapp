export const API_CRYPTO_BASE_URL = "https://api.coingecko.com/api/v3/coins";

export const API_NEWS_BASE_URL = "https://api.thenewsapi.com/v1/news";

export const API_ENDPOINTS = {
  FETCH_TRENDING:
    "/markets?vs_currency=inr&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en",
  FETCH_TOP_10:
    "/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en",
  FETCH_ALL: (page) => {
    if (page) {
      return `/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`;
    }
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&sparkline=false&locale=en`;
  },
  FETCH_BY_ID: (id) => {
    return `/markets?vs_currency=inr&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
  },
  FETCH_CHART_DATA: (id, duration) => {
    if (duration === "max") {
      return `/${id}/ohlc?vs_currency=inr&days=max`;
    }
    return `/${id}/ohlc?vs_currency=inr&days=${duration}`;
  },
  FETCH_CRYPTO_NEWS:
    "/all?locale=us&language=en&api_token=46sPc7xUenbrEj00lgxV1kzDiR1JWIDdtA6DqAvS&search=bitcoin",
};
