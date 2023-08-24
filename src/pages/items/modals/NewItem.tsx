import axios from "axios"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useQueryClient, useQuery } from "react-query"
import handleError from "../../../utils/functions/handleErrors"

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

function NewItemModal({ setModal }: Props) {

  const { register, handleSubmit } = useForm()
  const [item, setItem] = useState()
  const [error, setError] = useState('')
  const [shouldRefetch, setShouldRefetch] = useState(false)
  const key = ['newItem']
  const QueryClient = useQueryClient()


  const { isLoading, refetch } = useQuery<any>(key, async () => {
    const response = await axios.post(`http://localhost:8080/items/register`, item)
    return response.data;
  }, {
    enabled: false,
    onSuccess: () => {
      QueryClient.invalidateQueries('items')
      setModal(false)
    },
    onError: (error: any) => {
      const errorStatus: number = error.response.status
      const errorMessage = handleError(errorStatus)
      setError(errorMessage)
    },
    retry: 1
  })

  useEffect(() => {
    if (shouldRefetch) {
      refetch();
      setShouldRefetch(false)
    }
  }, [shouldRefetch, item])

  async function handleAddNewItem(data: any) {
    data = {
      brand: data.brand,
      condition: data.condition,
      name: data.name,
      type: data.type,
      available: data.available,
      item_id: data.item_id,
      desc: data.desc,
      location: {
        sector: data?.sector,
        borrower: data?.borrower,
        borrowDate: data.borrowDate,
      }
    }
    setItem(data)
    setShouldRefetch(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleAddNewItem)} className="space-y-8">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-y-6'>
          <label className='space-y-1'>
            <h4>ID:</h4>
            <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
              {...register('item_id')} />
          </label>
          <div></div>
          <label className='space-y-1'>
            <h4>Nome:</h4>
            <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
              {...register('name')} />
          </label>
          <label className='space-y-1'>
            <h4>Tipo:</h4>
            <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
              {...register('type')} />
          </label>
          <label className='space-y-1'>
            <h4>Condição:</h4>
            <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
              {...register('condition')} />
          </label>
          <label className='space-y-1'>
            <h4>Disponivel:</h4>
            <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
              {...register('available')} />
          </label>
          <label className='space-y-1'>
            <h4>Marca:</h4>
            <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
              {...register('brand')} />
          </label>
          <label className='space-y-1'>
            <h4>Setor:</h4>
            <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
              {...register('sector')} />
          </label>
          <label className='space-y-1'>
            <h4>Comodatário:</h4>
            <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
              {...register('borrower')} />
          </label>
          <label className='space-y-1'>
            <h4>Data:</h4>
            <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
              {...register('borrowDate')} />
          </label>
        </div>
        <div className='px-4 py-1 space-y-6 flex flex-col'>
          <label className='space-y-3 flex flex-col items-center'>
            <h4 className="self-start">Descrição:</h4>
            <motion.textarea whileFocus={{ borderColor: '#FF9400' }} className='p-2 w-full h-56 outline-none border border-raisin rounded text-sm' {...register('desc')}></motion.textarea>
          </label>
          <div className='flex justify-end'>
            <motion.button whileHover={{ scale: 1.03 }} type="submit" className="bg-princeton px-2 w-20 h-8 rounded border-2 border-raisin">
              Enviar
            </motion.button>
          </div>
        </div>
      </form>
    </>
  )
}

export default NewItemModal