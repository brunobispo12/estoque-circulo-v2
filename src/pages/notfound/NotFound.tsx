import { CirculoIcon } from "../../utils/constants/imagesPath"
import { motion } from "framer-motion"

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-4'>
      <div className="text-xl font-satoshi-bold">404 - Página não econtrada</div>
      <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3 }} src={CirculoIcon} alt="" className="w-16" />
    </div>
  )
}

export default NotFound