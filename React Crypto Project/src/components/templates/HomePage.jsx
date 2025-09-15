import { useEffect, useState } from "react"
import TableCoines from "../module/TableCoines"
import { getApi } from "../services/cryptoApi"

const HomePage = () => {

    const [coines,setCoines] = useState([]);
    const [isLoading,setIsLoading] = useState(true);


    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(getApi())
            const json = await res.json()
            setCoines(json)
            setIsLoading(false)
        }
        fetchData()
    },[])

  return (
    <div>
      <TableCoines coines={coines} isLoading={isLoading} />
    </div>
  )
}

export default HomePage
