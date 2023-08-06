import ItemTable from '../components/ItemTable'
import { Item } from '../../../utils/types/itemTypes'
import { useState } from 'react'
import Modal from '../../../components/Modal'

type Props = {
    items: Array<Item>
}

function TableList({ items }: Props) {

    return (
        <div className='flex justify-center w-full'>
            <div></div>
            <ItemTable items={items}></ItemTable>
        </div>
    )
}

export default TableList