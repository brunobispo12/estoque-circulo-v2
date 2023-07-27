import ItemGrid from "../components/ItemGrid"
import { Item } from '../../../utils/types/itemTypes'
import { useState } from "react"
import Modal from "../../../components/Modal"

type Props = {
  items: Array<Item>
}

function GridList({ items }: Props) {

  const [updateItemModal, setUpdateItemModal] = useState(false)

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-8'>
      {items.map((item) => {
        return <ItemGrid setModal={setUpdateItemModal} item={item} />
      })}
      {updateItemModal && <Modal setModal={setUpdateItemModal} modalTitle="Atualizar Item"><div>modal do grid</div></Modal>}
    </div>
  )
}

export default GridList