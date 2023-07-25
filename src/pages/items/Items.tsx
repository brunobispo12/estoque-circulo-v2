import SearchBar from './view/SearchBar'
import ItemsViewMode from './view/itemsViewMode'

function Items() {
  return (
    <div className='p-5 space-y-8'>
      <span>
        <h1 className='text-xl font-satoshi-bold'>Relatório de itens</h1>
      </span>
      <div className='space-y-4 flex flex-col items-center'>
        <SearchBar />
        <ItemsViewMode />
      </div>
    </div>
  )
}

export default Items