import { ModalType } from "../utils/types/genericTypes"
import { GrClose } from 'react-icons/gr'
import { motion } from "framer-motion"

function Modal({ children, setModal, modalTitle }: ModalType) {
    return (
        <div className='z-50 fixed left-0 top-0 flex justify-center items-center h-screen w-full bg-gray-600 bg-opacity-50'>
            <motion.div className='bg-smoke w-4/12 h-2/3 rounded border-raisin border-2 p-3 space-y-7 overflow-y-auto scrollbar-thumb-princeton scrollbar-thin'
                initial={{ x: -75, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2 }}
            >
                <div className="flex justify-between">
                    <h3 className="font-satoshi-bold text-xl">{modalTitle}</h3>
                    <button onClick={() => { setModal(false) }}><GrClose size={20} /></button>
                </div>
                {children}
            </motion.div>
        </div>
    )
}

export default Modal