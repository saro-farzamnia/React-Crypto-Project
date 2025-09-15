const BASE_URL = "https://api.coingecko.com/api/v3";
const COIN_KEY = "CG-ZQa4BJDBQq9D75uebfSAt7P9";

const getApi = () => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&ids=&x_cg_demo_api_key=${COIN_KEY}`
}

export {getApi}