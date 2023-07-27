import SearchBar from './view/SearchBar'
import ItemsViewMode from './view/ItemsViewMode'
import Modal from '../../components/Modal'
import useModal from '../../hooks/useModal'

function Items() {

  return (
    <div className='p-5'>
      <div className='space-y-8'>
        <span>
          <h1 className='text-xl font-satoshi-bold'>Relatório de itens</h1>
        </span>
        <div className='space-y-8 flex flex-col items-center'>
          <SearchBar />
          <ItemsViewMode />
        </div>
      </div>
      
    </div>
  )
}

export default Items