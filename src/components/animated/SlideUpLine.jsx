import { motion } from 'motion/react'

const ease = [0.25, 0.1, 0.25, 1]

const SlideUpLine = ({ children, isActive, delay = 0, duration = 0.7, className = '' }) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`.trim()}>
      <motion.span
        className="inline-block"
        initial={{ y: '100%' }}
        animate={{ y: isActive ? '0%' : '100%' }}
        transition={{ duration, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default SlideUpLine
