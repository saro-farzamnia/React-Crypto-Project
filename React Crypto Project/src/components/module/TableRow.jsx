import chartUp from "../../assets/chart-up.svg"
import chartdown from "../../assets/chart-down.svg"
import styles from "./TableCoin.module.css"

const TableRow = ({coin:{image,name,symbol,current_price,total_volume,price_change_percentage_24h:price_change}}) => {
    
  return(
    <tr>
      <td>
        <div className={styles.symbol} >
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error} >{price_change}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td> <img src={price_change > 0 ? chartUp : chartdown} alt={name} /> </td>
    </tr>
  )
}

export default TableRow
