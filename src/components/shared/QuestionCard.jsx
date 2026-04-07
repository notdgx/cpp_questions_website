import { motion } from 'motion/react'

const QuestionCard = ({ question, index, onClick }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <button
        type="button"
        onClick={onClick}
        className="liquid-glass liquid-glass-sm group flex min-h-[100px] w-full cursor-pointer flex-col gap-2 p-4 text-left"
      >
        <div className="flex items-start justify-between">
          <span className="text-[11px] tracking-widest text-[var(--text-secondary)]">Q{question.id}</span>
          <span className="liquid-glass liquid-glass-pill px-2 py-1 text-[11px] text-[var(--accent-blue)]">C++</span>
        </div>
        <p className="text-white" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)', lineHeight: 1.4 }}>
          {question.title}
        </p>
        <div className="mt-auto flex items-center gap-1 text-[12px] text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-white">
          <span>View Solution</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3L10 8L5 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
    </motion.div>
  )
}

export default QuestionCard
