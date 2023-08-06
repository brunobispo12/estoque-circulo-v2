import TableList from "./TableList"
import GridList from "./GridList"
import useViewMode from "../../../hooks/useViewMode"
import { useQuery } from "react-query"
import axios from "axios"
import handleError from "../../../utils/functions/handleErrors"
import { useState } from "react"


function ItemsViewMode() {

    const { currentViewMode } = useViewMode()
    const key = ['items']
    const [error, setError] = useState('')

    const { data, isError } = useQuery(key, async () => {
        const response = await axios.get("http://localhost:3001/api/items")
        return response.data
    },
        {
            onError: (error: any) => {
                const errorStatus: number = error.response.status
                const errorMessage = handleError(errorStatus)
                setError(errorMessage)
            }
        })


    return (
        <>
            {currentViewMode === 'grid' ? <GridList items={data} /> : <TableList items={data} />}
            {isError && `${error}`}
        </>
    )
}

export default ItemsViewMode