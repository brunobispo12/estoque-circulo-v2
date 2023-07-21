import { motion } from 'framer-motion'

function LoadingDiv() {
    return (
        <motion.div className='w-8 h-8 rounded-full border-[6px] border-t-transparent border-princeton' animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity,  ease: 'linear' }}></motion.div>
    )
}

export default LoadingDiv