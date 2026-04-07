import { motion } from 'motion/react'

const ease = [0.25, 0.1, 0.25, 1]

const BlurReveal = ({ children, isActive, delay = 0, duration = 0.9, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={
        isActive
          ? { opacity: 1, filter: 'blur(0px)' }
          : { opacity: 0, filter: 'blur(8px)' }
      }
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export default BlurReveal
