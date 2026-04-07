import { useEffect, useRef, useState } from 'react'
import BlurReveal from '../animated/BlurReveal'
import WordByWordReveal from '../animated/WordByWordReveal'
import Divider from '../shared/Divider'
import Logo from '../shared/Logo'
import QuestionCard from '../shared/QuestionCard'
import SlideBackgroundVideo from '../shared/SlideBackgroundVideo'
import { topics } from '../../data/manifest'

const TopicSlide = ({ topicIndex, isActive, onQuestionOpen, bgVideo }) => {
  const topic = topics[topicIndex]
  const [activationCount, setActivationCount] = useState(0)
  const wasActive = useRef(false)

  useEffect(() => {
    if (isActive && !wasActive.current) {
      setActivationCount((count) => count + 1)
    }
    wasActive.current = isActive
  }, [isActive])

  if (!topic) return null

  const numberLabel = String(topic.id).padStart(2, '0')

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-black">
      <SlideBackgroundVideo src={bgVideo} isActive />

      <BlurReveal isActive={isActive} delay={0.05} duration={0.9}>
        <div className="relative z-[2] flex items-center justify-between px-[5%] pt-[3.5%]">
          <Logo />
          <span className="text-[20px] text-[var(--text-secondary)]">{numberLabel}</span>
        </div>
      </BlurReveal>

      <Divider className="relative z-[2] mt-6 px-[5%]" />

      <div key={activationCount} className="relative z-[2] flex min-h-0 flex-1 flex-col px-[5%] pt-[4%] pb-[78px] overflow-hidden sm:pt-[3.5%] sm:pb-[84px]">
        <div className="max-w-full md:max-w-[65%] flex-shrink-0">
          <BlurReveal isActive={isActive} delay={0.15}>
            <p
              className="uppercase tracking-widest text-[var(--text-secondary)]"
              style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}
            >
              {topic.title}
            </p>
          </BlurReveal>

          <h2 className="mt-1 text-white leading-[1.04]" style={{ fontSize: 'clamp(19px, 3.5vw, 56px)', wordBreak: 'normal' }}>
            <WordByWordReveal text={`Explore ${topic.title} problems`} isActive={isActive} delay={0.25} />
          </h2>

          <BlurReveal isActive={isActive} delay={0.7}>
            <p
              className="mt-3 max-w-[560px] text-[var(--text-secondary)]"
              style={{ fontSize: 'clamp(12px, 1.1vw, 18px)' }}
            >
              {topic.description}
            </p>
          </BlurReveal>
        </div>

        <div
          className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 mt-6 grid min-h-0 flex-1 content-start gap-3 overflow-y-auto overflow-x-hidden pr-1 pb-2 sm:mt-8"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))' }}
        >
          {topic.questions.map((question, index) => (
            <QuestionCard
              key={`${topicIndex}-${question.filename}`}
              question={question}
              index={index}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const origin = {
                  x: rect.left + rect.width / 2,
                  y: rect.top + rect.height / 2
                }
                onQuestionOpen(topicIndex, index, origin)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopicSlide
