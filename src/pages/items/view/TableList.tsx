import ItemTable from '../components/ItemTable'
import { Item } from '../../../utils/types/itemTypes'
import { useState } from 'react'
import Modal from '../../../components/Modal'

type Props = {
    items: Array<Item>
}

function TableList({ items }: Props) {

    const [updateItemModal, setUpdateItemModal] = useState(false)

    return (
        <div className='flex justify-center w-full'>
            <div></div>
            <ItemTable items={items} setModal={setUpdateItemModal}></ItemTable>
            {updateItemModal && <Modal setModal={setUpdateItemModal} modalTitle='Atualizar Item'><div>dajsd</div></Modal>}
        </div>
    )
}

export default TableList