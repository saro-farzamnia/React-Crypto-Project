import chartUp from "../../assets/chart-up.svg"
import chartdown from "../../assets/chart-down.svg"

const TableRow = ({coin:{image,name,symbol,current_price,price_change_percentage_24h,total_volume}}) => {
    
  return(
    <tr>
      <td>
        <div>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td>{price_change_percentage_24h}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td> <img src={price_change_percentage_24h > 0 ? chartUp : chartdown} alt={name} /> </td>
    </tr>
  )
}

export default TableRow
