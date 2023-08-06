import { BsPlus } from 'react-icons/bs'
import { Item } from '../../../utils/types/itemTypes'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../../../components/Modal'
import { useState } from 'react'
import DeitailsItem from '../modals/DeitailsItem'

type Props = {
    item: Item,
}

function ItemGrid({ item }: Props) {

    const [updateItemModal, setUpdateItemModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState<any>()

    function openModal(item: Item) {
        setSelectedItem(item)
        setUpdateItemModal(true)
    }

    return (
        <div className='border-2 border-princeton w-[18rem] h-24 rounded px-2 py-1 space-y-1'>
            <div className='flex justify-between items-center'>
                <h3 className='font-satoshi-bold'>{item.item_id}</h3>
                <motion.button whileHover={{ scale: 1.1 }} onClick={() => openModal(item)}>
                    <BsPlus size={25} />
                </motion.button>
            </div>
            <div className='text-[0.9rem] space-y-1 px-2 '>
                <div className='flex justify-between'><span>Nome: {item.name}</span> <span>Tipo: {item.type}</span></div>
                <div className='flex justify-between'>
                    <span>Disponível: {item.available ? 'Sim' : 'Não'}</span>
                    <span>Data: {item.location?.borrowDate}</span>
                </div>
            </div>
            <AnimatePresence>
                {updateItemModal &&
                    <Modal setModal={setUpdateItemModal} modalTitle="Detalhes do Item"><DeitailsItem item={selectedItem} /></Modal>}
            </AnimatePresence>

        </div>
    )
}

export default ItemGrid