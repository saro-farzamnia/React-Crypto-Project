import { useState } from "react";
import styles from "./Chart.module.css";
import { convertData } from "../../helper/convertData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ chart, setChart }) => {
  const [type, setType] = useState("prices");

  const typeHandler = (e) => {
    if (e.target.logName === "BUTTON") {
      const type = e.target.innerText.toLowerCase().replace(" ","_")
      setType(type)
    }
  };

  return (
    <div className={styles.container}>
      <span onClick={() => setChart(null)} className={styles.cross}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}></div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(type, chart)} type={type} />
        </div>
        <div className={styles.types} onClick={typeHandler}>
          <button className={type === "prices" ? styles.selected : null} >Prices</button>
          <button className={type === "market_caps" ? styles.selected : null} >Market Caps</button>
          <button className={type === "total_valumes" ? styles.selected : null} >Total Volumes</button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices :</p>
            <span>$ {chart.coin.price_change_percentage_24h}</span>
          </div>

          <div>
            <p>ATH :</p>
            <span>$ {chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Cap :</p>
            <span>{chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="rgb(29, 133, 133)"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
