import React from 'react'
import { BsFillGridFill, BsList, BsSearch } from 'react-icons/bs'
import { LuTable2 } from 'react-icons/lu'

function SearchBar() {
  return (
    <div className='border-2 w-[55rem] border-princeton py-2 px-4 rounded-lg bg-raisin text-white flex justify-between'>
      <div className='flex gap-8 items-center'>
        <label className='space-x-3'>
          <span>Pesquisa:</span>
          <input type="text" className='border border-princeton rounded px-1 outline-none text-black w-64' />
        </label>
        <div className='text-black'>
          <select className='border border-princeton rounded w-20'>
            <option value="name">Nome</option>
            <option value="name">Disponível</option>
            <option value="name">Tipo</option>
            <option value="name">Local</option>
          </select>
        </div>
        <button><BsSearch /></button>
      </div>
      <div className='flex gap-5 items-center'>
        <button>{<BsFillGridFill size={18} />}</button>
        <button>{<BsList size={23}/>}</button>
      </div>
    </div>
  )
}

export default SearchBar