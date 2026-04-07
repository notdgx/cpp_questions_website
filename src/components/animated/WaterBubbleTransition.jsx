import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const WaterBubbleTransition = ({ open, clickOrigin, onClose, children }) => {
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    let showingTimer
    let idleTimer

    if (open) {
      setPhase('expanding')
      showingTimer = setTimeout(() => setPhase('showing'), 400)
    } else if (phase !== 'idle') {
      setPhase('collapsing')
      idleTimer = setTimeout(() => {
        setPhase('idle')
        if (typeof onClose === 'function') onClose()
      }, 380)
    }

    return () => {
      clearTimeout(showingTimer)
      clearTimeout(idleTimer)
    }
  }, [open])

  if (phase === 'idle') return null

  const originStyle = {
    transformOrigin: `${clickOrigin?.x ?? '50%'}px ${clickOrigin?.y ?? '50%'}px`
  }

  return (
    <div className="fixed inset-0 z-50" style={originStyle}>
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(41,151,255,0.12) 0%, rgba(130,56,220,0.1) 45%, rgba(0,0,0,0.06) 100%)',
          ...originStyle
        }}
        initial={{ scale: 0, borderRadius: '50%' }}
        animate={
          phase === 'expanding' || phase === 'showing'
            ? { scale: 4, borderRadius: '0%' }
            : { scale: 0, borderRadius: '50%' }
        }
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'showing' ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default WaterBubbleTransition
