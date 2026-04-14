import { motion } from 'motion/react'

const ease = [0.25, 0.1, 0.25, 1]

const BlurReveal = ({ children, isActive, delay = 0, duration = 0.9, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12, scale: 0.985 }}
      animate={
        isActive
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 12, scale: 0.985 }
      }
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export default BlurReveal
