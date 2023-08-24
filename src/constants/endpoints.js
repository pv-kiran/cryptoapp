export const API_CRYPTO_BASE_URL = "https://api.coingecko.com/api/v3/coins";

export const API_NEWS_BASE_URL = "https://api.thenewsapi.com/v1/news";

export const API_ENDPOINTS = {
  FETCH_TRENDING:
    "/markets?vs_currency=inr&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en",
  FETCH_TOP_10:
    "/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en",
  FETCH_ALL:
    "/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
  FETCH_CRYPTO_NEWS:
    "/all?locale=us&language=en&api_token=wKHei5pU7dzyCibnfLOFGF26HaHIAdXvKVpoa7j5&search=bitcoin",
};
