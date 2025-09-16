import TableRow from "./TableRow"
import { Vortex } from 'react-loader-spinner'

const TableCoines = ({coines,isLoading}) => {
    console.log({coines})
  return (
    <div>
      {
        isLoading ? <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}}> <Vortex
  visible={true}
  height="150"
  width="150"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  /> </div> : <table>
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
          {
            coines.map(coin => 
              <TableRow coin={coin} key={coin.id} />
            )
          }
        </tbody>
      </table>
      }
    </div>
  )
}

export default TableCoines

