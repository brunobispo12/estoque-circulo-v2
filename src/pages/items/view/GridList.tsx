import ItemGrid from "../components/ItemGrid"
import { Item } from '../../../utils/types/itemTypes'

type Props = {
  items: Array<Item>
}

function GridList({ items }: Props) {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-8 gap-x-12'>
      {items.map((item) => {
        return <ItemGrid item={item} />
      })}
    </div>
  )
}

export default GridList