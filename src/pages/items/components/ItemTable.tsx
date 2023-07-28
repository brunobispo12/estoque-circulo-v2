import { motion } from "framer-motion"
import { Item } from "../../../utils/types/itemTypes"

type Props = {
    items: Array<Item>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

function ItemTable({ items, setModal,  }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th className='w-52 text-start border-b-2 border-black'>ID</th>
                    <th className='w-52 text-start border-b-2 border-black'>Marca</th>
                    <th className='w-52 text-start border-b-2 border-black'>Nome</th>
                    <th className='w-32 text-start border-b-2 border-black'>Disponível</th>
                    <th className='w-8 border-b-2 border-black'></th>
                </tr>
            </thead>
            <tbody>
                {items?.map((item) => {
                    return (
                        <tr key={item._id}>
                            <td>{item.item_id}</td>
                            <td className='p-1'>{item.brand}</td>
                            <td className='p-1'>{item.name ? item.name : 'Sem nome cadastrado'}</td>
                            <td className='p-1'>{item.available ? 'Sim' : 'Não'}</td>
                            <td className='flex justify-center p-2'>
                                <motion.button whileHover={{ scale: 1.05}} onClick={() => setModal(true)} className='bg-princeton p-[2px] text-sm rounded border-raisin border-2'>Editar</motion.button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ItemTable