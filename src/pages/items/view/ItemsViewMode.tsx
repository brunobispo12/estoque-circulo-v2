import TableList from "./TableList"
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
        const response = await axios.get("http://localhost:8080/items/all")
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
            <TableList items={data} />
        </>
    )
}

export default ItemsViewMode