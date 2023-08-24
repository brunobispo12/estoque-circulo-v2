import SearchBar from './view/SearchBar'
import TableList from './view/TableList'
import { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import handleError from '../../utils/functions/handleErrors'
import ErrorDiv from '../../components/ErrorDiv'

function Items() {

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
        console.log('error')
      },
      retry: 1
    })

  return (
    <div className='p-5'>
      <div className='space-y-8'>
        <span>
          <h1 className='text-xl font-satoshi-bold'>Relatório de itens</h1>
        </span>
        <div className='space-y-12 flex flex-col items-center'>
          <SearchBar />
          {data && <TableList items={data} />}
          {isError && <ErrorDiv errorMessage={error}></ErrorDiv>}
        </div>
      </div>
    </div>
  )
}

export default Items