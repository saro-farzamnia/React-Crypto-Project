const BASE_URL = "https://api.coingecko.com/api/v3";
const COIN_KEY = "CG-ZQa4BJDBQq9D75uebfSAt7P9";

const getApi = (page, currency) => `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${COIN_KEY}`;

const searchCoin = query => `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${COIN_KEY}`;

const marketChart = coin => `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;

export { getApi, searchCoin, marketChart };