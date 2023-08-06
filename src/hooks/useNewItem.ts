import { useCallback, useState } from "react"
import { useQuery } from "react-query";
import handleError from "../utils/functions/handleErrors";
import axios from "axios";


function useNewItem() {

    const [error, setError] = useState('')
    const key = ['newItem']

    const addNewItem = useCallback(async (data: Object) => {
        const { isLoading } = useQuery<any>(key, async () => {
            const response = await axios.post(`http://localhost:3001/api/items`, data)
            return response.data;
        }, {
            enabled: false,
            onSuccess: (data) => {
                console.log(data)
            },
            onError: (error: any) => {
                const errorStatus: number = error.response.status
                const errorMessage = handleError(errorStatus)
                setError(errorMessage)
            },
            retry: 1
        })

        return { isLoading, error }
    }, [])



    return { addNewItem }
}

export default useNewItem

