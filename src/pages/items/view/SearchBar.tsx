import { BsFillGridFill, BsList, BsSearch } from 'react-icons/bs'
import useViewMode from '../../../hooks/useViewMode'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Modal from '../../../components/Modal'
import NewItemModal from '../modals/NewItem'
function SearchBar() {
  const [newItemModal, setNewItemModal] = useState(false)
  const { changeViewMode } = useViewMode()

  return (
    <div className='flex justify-around items-center gap-8'>
      <div className='border-2 w-[55rem] border-princeton py-2 px-4 rounded-lg bg-raisin text-white flex justify-between'>
        <div className='flex gap-8 items-center'>
          <label className='space-x-2'>
            <span>Pesquisa:</span>
            <input type="text" className='border border-princeton rounded px-1 outline-none text-black w-64' />
          </label>
          <div className='text-black'>
            <select className='border border-princeton rounded w-24'>
              <option value="name">Nome</option>
              <option value="avaliable">Disponível</option>
              <option value="type">Tipo</option>
              <option value="location">Local</option>
            </select>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <motion.button onClick={() => changeViewMode('grid')} whileHover={{ scale: 1.1 }} >{<BsFillGridFill size={18} />}</motion.button>
          <motion.button onClick={() => changeViewMode('table')} whileHover={{ scale: 1.1 }}>{<BsList size={23} />}</motion.button>
        </div>
      </div>
      <motion.button onClick={() => { setNewItemModal((prevState) => !prevState) }} className='border-2 border-raisin rounded py-1 px-2 bg-princeton' whileHover={{ scale: 1.02 }}>
        Novo Item
      </motion.button>
      <AnimatePresence>
        {newItemModal && <Modal setModal={setNewItemModal} modalTitle='Novo Item'><NewItemModal /></Modal>}
      </AnimatePresence>
    </div>
  )
}

export default SearchBar