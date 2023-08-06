import { motion } from "framer-motion"
import { DetailsProps } from "../../../utils/types/genericTypes"
import { useForm } from "react-hook-form"
import { useState } from "react"

function DeitailsItem({ item }: DetailsProps) {

    const { register, handleSubmit } = useForm()
    const [editIsOn, setEditIsOn] = useState(true)

    function setEditedItem(data: any) {
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
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(setEditedItem)} className="space-y-8">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-y-6'>
                    <label className='space-y-1'>
                        <h4>ID:</h4>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
                            disabled={editIsOn}
                            {...register('item_id')}
                            placeholder={item.item_id?.toString()}
                        />
                    </label>
                    <div></div>
                    <label className='space-y-1'>
                        <h4>Nome:</h4>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
                            disabled={editIsOn}
                            {...register('name')}
                            placeholder={`${item.name ? item.name : 'Sem nome cadastrado'}`}
                        />
                    </label>
                    <label className='space-y-1'>
                        <h4>Tipo:</h4>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
                            disabled={editIsOn}
                            {...register('type')}
                            placeholder={item.type?.toString()}
                        />
                    </label>
                    <label className='space-y-1'>
                        <h4>Condição:</h4>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
                            disabled={editIsOn}
                            {...register('condition')}
                            placeholder={item.condition?.toString()}
                        />
                    </label>
                    <label className='space-y-1'>
                        <h4>Disponivel:</h4>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
                            disabled={editIsOn}
                            {...register('available')}
                            placeholder={item.available?.toString()}
                        />
                    </label>
                    <label className='space-y-1'>
                        <h4>Marca:</h4>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
                            disabled={editIsOn}
                            {...register('brand')}
                            placeholder={item.brand?.toString()}
                        />
                    </label>
                    <label className='space-y-1'>
                        <h4>Setor:</h4>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
                            disabled={editIsOn}
                            {...register('sector')}
                            placeholder={item.location?.sector?.toString()}
                        />
                    </label>
                    <label className='space-y-1'>
                        <h4>Comodatário:</h4>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
                            disabled={editIsOn}
                            {...register('borrower')}
                            placeholder={item.location?.borrower?.toString()}
                        />
                    </label>
                    <label className='space-y-1'>
                        <h4>Data:</h4>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none'
                            disabled={editIsOn}
                            {...register('borrowDate')}
                            placeholder={item.location?.borrowDate?.toString()}
                        />
                    </label>
                </div>
                <div className='px-4 py-1 space-y-6'>
                    <label className='space-y-3 flex flex-col items-center'>
                        <h4 className="self-start">Descrição:</h4>
                        <motion.textarea whileFocus={{ borderColor: '#FF9400' }} className='p-2 w-full h-56 outline-none border border-raisin rounded text-sm'
                            placeholder={item.desc?.toString()} disabled={editIsOn}
                            {...register('desc')}
                        ></motion.textarea>
                    </label>
                    <div className='flex justify-end'>
                        {editIsOn ? <motion.button onClick={() => setEditIsOn((prevState) => { return !prevState })} whileHover={{ scale: 1.03 }} className="bg-princeton px-2 w-20 h-8 rounded border-2 border-raisin">
                            Editar
                        </motion.button> :
                            <motion.button whileHover={{ scale: 1.03 }} className="bg-princeton px-2 w-20 h-8 rounded border-2 border-raisin" type="submit">
                                Enviar
                            </motion.button>}
                    </div>
                </div>
            </form>
        </>
    )
}

export default DeitailsItem