import { motion } from "framer-motion"

function NewItemModal() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-y-6'>
        <label className='space-y-1'>
          <h4>Nome:</h4>
          <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none' />
        </label>
        <label className='space-y-1'>
          <h4>Condição:</h4>
          <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none' />
        </label>
        <label className='space-y-1'>
          <h4>Marca:</h4>
          <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none' />
        </label>
        <label className='space-y-1'>
          <h4>Setor:</h4>
          <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none' />
        </label>
        <label className='space-y-1'>
          <h4>Comodatário:</h4>
          <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none' />
        </label>
        <label className='space-y-1'>
          <h4>Data:</h4>
          <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" className='border border-raisin rounded indent-1 outline-none' />
        </label>
      </div>
      <div className='p-4 space-y-5'>
        <label className='space-y-3'>
          <h4>Descrição:</h4>
          <motion.textarea whileFocus={{ borderColor: '#FF9400' }} className='p-2 w-full h-56 outline-none border border-raisin rounded text-sm'></motion.textarea>
        </label>
        <div className='flex justify-end'>
          <motion.button whileHover={{ scale: 1.03 }} className="bg-princeton px-2 w-20 h-8 rounded border-2 border-raisin">
            Enviar
          </motion.button>
        </div>
      </div>
    </>
  )
}

export default NewItemModal