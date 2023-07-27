import { BsPlus } from 'react-icons/bs'
import { Item } from '../../../utils/types/itemTypes'

type Props = {
    item: Item,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

function ItemGrid({ item, setModal }: Props) {
    return (
        <div className='border-2 border-princeton w-[18rem] h-24 rounded px-2 py-1 space-y-1'>
            <div className='flex justify-between items-center'>
                <h3 className='font-satoshi-bold'>{item.item_id}</h3>
                <button onClick={() => { setModal(true) }}>
                    <BsPlus size={25} />
                </button>
            </div>
            <div className='text-[0.9rem] space-y-1 px-2 '>
                <div className='flex justify-between'><span>Nome: {item.name}</span> <span>Tipo: {item.type}</span></div>
                <div className='flex justify-between'>
                    <span>Disponível: {item.available ? 'Sim' : 'Não'}</span>
                    <span>Data: {item.location?.borrowDate}</span>
                </div>
            </div>
        </div>
    )
}

export default ItemGrid