import { useEffect, useMemo, useState } from 'react'
import BlurReveal from '../animated/BlurReveal'
import { hljs } from '../../hljs'

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L14 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const ClipboardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 2H10.5C11.0523 2 11.5 2.44772 11.5 3V11.5C11.5 12.0523 11.0523 12.5 10.5 12.5H3.5C2.94772 12.5 2.5 12.0523 2.5 11.5V3C2.5 2.44772 2.94772 2 3.5 2H5"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <rect x="5" y="1" width="4" height="2.2" rx="0.8" stroke="currentColor" strokeWidth="1.1" />
  </svg>
)

const SolutionModal = ({
  question,
  topicTitle,
  total,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setCopied(false)
  }, [question?.id])

  const highlightedCode = useMemo(() => {
    if (!question?.code) return ''
    return hljs.highlight(question.code, { language: 'cpp' }).value
  }, [question?.code])

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(question?.code ?? '')
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  if (!question) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/72 backdrop-blur-xl">
      <div className="liquid-glass my-8 mx-auto flex max-h-[88vh] w-[90%] max-w-5xl flex-col overflow-hidden rounded-3xl">
        <div className="flex items-start justify-between border-b border-white/10 px-6 pt-6 pb-4">
          <div>
            <p className="text-[12px] tracking-widest uppercase text-[var(--text-secondary)]">Q{question.id} · {topicTitle}</p>
            <h2 className="text-[20px] font-medium text-white">{question.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close solution"
            className="liquid-glass liquid-glass-circle liquid-glass-static flex h-9 w-9 items-center justify-center text-white/70"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-5">
          <div className="flex flex-col gap-3">
            <BlurReveal isActive delay={0.05}>
              <p className="text-[12px] tracking-widest text-[var(--text-secondary)]">Problem Statement</p>
            </BlurReveal>
            <p className="whitespace-pre-wrap text-[15px] leading-[1.6] text-white/90">{question.question || 'No statement available.'}</p>
          </div>

          <div className="border-t border-white/10" />

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-[12px] tracking-widest text-[var(--text-secondary)]">Solution</p>
              <button
                type="button"
                onClick={copyCode}
                className="liquid-glass liquid-glass-pill flex items-center gap-2 px-3 py-1 text-[12px] text-white"
              >
                <ClipboardIcon />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="liquid-glass overflow-hidden rounded-xl">
              <pre className="bg-transparent p-5 text-[13px] leading-[1.6] text-white" style={{ fontFamily: "'SF Mono', Monaco, 'Cascadia Code', monospace" }}>
                <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
              </pre>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[12px] tracking-widest text-[var(--text-secondary)]">Console Output</p>
            <div className="liquid-glass rounded-xl p-5">
              <pre className="whitespace-pre-wrap font-mono text-[13px] leading-[1.6] text-[#30d158]">{question.output || 'No output provided.'}</pre>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
          <p className="text-[12px] text-[var(--text-tertiary)]">
            {topicTitle} · Problem {question.id} of {total}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              className="liquid-glass liquid-glass-pill px-4 py-2 text-[13px] text-white disabled:pointer-events-none disabled:opacity-35"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className="liquid-glass rounded-xl border border-[#2997ff]/40 bg-[#2997ff]/20 px-4 py-2 text-[13px] text-[#2997ff] disabled:pointer-events-none disabled:opacity-35"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionModal
