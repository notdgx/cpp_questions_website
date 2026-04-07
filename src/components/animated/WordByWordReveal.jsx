import { motion } from 'motion/react'

const ease = [0.25, 0.1, 0.25, 1]

const WordByWordReveal = ({
  text,
  isActive,
  delay = 0,
  duration = 0.55,
  stagger = 0.035,
  className = ''
}) => {
  const words = String(text ?? '').split(' ')

  return (
    <div className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: '0.27em', marginBottom: '0.1em' }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={{ y: isActive ? '0%' : '100%' }}
            transition={{
              duration,
              ease,
              delay: delay + index * stagger
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}

export default WordByWordReveal
