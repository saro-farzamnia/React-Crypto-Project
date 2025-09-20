import { useEffect, useState } from "react";
import TableCoines from "../module/TableCoines";
import { getApi } from "../services/cryptoApi";
import Pagenation from "../module/Pagenation";
import Search from "../module/Search";
import Chart from "../module/Chart";

const HomePage = () => {
  const [coines, setCoines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await fetch(getApi(page, currency));
      const json = await res.json();
      setCoines(json);
      setIsLoading(false);
    };
    fetchData();
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoines coines={coines} isLoading={isLoading} setChart={setChart} />
      <Pagenation page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
};

export default HomePage;
