import { easeIn, easeInOut, motion } from "framer-motion"
import useLogOff from "../../hooks/useLogOff"

function UserModal() {

  const { LogOff } = useLogOff()

  return (
    <motion.div className='bg-princeton p-1 rounded-sm '
      initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, ease: easeInOut }}>
      <ul>
        <li>Detalhes</li>
        <li><button onClick={LogOff}>Sair</button></li>
      </ul>
    </motion.div>
  )
}

export default UserModal