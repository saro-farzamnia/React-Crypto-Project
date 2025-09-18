import TableRow from "./TableRow";
import LoaderPage from "./LoaderPage";
import styles from "./TableCoin.module.css";

const TableCoines = ({ coines, isLoading, setChart }) => {
  console.log({ coines });
  return (
    <div className={styles.container}>
      {isLoading ? (
        <LoaderPage />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coines.map((coin) => (
              <TableRow coin={coin} key={coin.id} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableCoines;
