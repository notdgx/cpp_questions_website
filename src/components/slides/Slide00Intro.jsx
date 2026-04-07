import { useEffect, useRef, useState } from 'react'
import BlurReveal from '../animated/BlurReveal'
import SlideUpLine from '../animated/SlideUpLine'
import Divider from '../shared/Divider'
import Logo from '../shared/Logo'
import SlideBackgroundVideo from '../shared/SlideBackgroundVideo'

const MetaItem = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[var(--text-tertiary)]" style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
      {label}
    </span>
    <span className="text-white" style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}>
      {value}
    </span>
  </div>
)

const Slide00Intro = ({ isActive, totalProblems, bgVideo, blurThemeLabel, onToggleBlurTheme }) => {
  const [activationCount, setActivationCount] = useState(0)
  const wasActive = useRef(false)

  useEffect(() => {
    if (isActive && !wasActive.current) {
      setActivationCount((count) => count + 1)
    }
    wasActive.current = isActive
  }, [isActive])

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#0a0a0f]">
      <SlideBackgroundVideo src={bgVideo} isActive />

      <BlurReveal isActive={isActive} delay={0.05} duration={0.9}>
        <div className="relative z-[2] flex items-start justify-between px-[5%] pt-[3.5%] md:items-center">
          <Logo />
          <div className="flex flex-col items-end gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onToggleBlurTheme}
              className="liquid-glass liquid-glass-pill px-3 py-1.5 text-[11px] tracking-wide text-white/90"
            >
              {blurThemeLabel}
            </button>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-right sm:flex sm:gap-6 md:gap-8">
              <MetaItem label="Type" value="Assignment" />
              <MetaItem label="Problems" value={String(totalProblems)} />
              <MetaItem label="Topics" value="11" />
              <MetaItem label="Stack" value="C++" />
            </div>
          </div>
        </div>
      </BlurReveal>

      <Divider className="relative z-[2] mt-6 px-[5%]" />

      <div key={activationCount} className="relative z-[2] flex flex-1 flex-col justify-end gap-8 px-[5%] pb-[18%] sm:pb-[12%] md:flex-row md:items-end md:justify-between md:gap-10 md:pb-[8%]">
        <h1
          className="text-white leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(36px, 9vw, 140px)' }}
        >
          <span className="block">
            <SlideUpLine isActive={isActive} delay={0.3}>
              C++ Object
            </SlideUpLine>
          </span>
          <span className="block">
            <SlideUpLine isActive={isActive} delay={0.4}>
              Oriented Programming
            </SlideUpLine>
          </span>
        </h1>

        <BlurReveal isActive={isActive} delay={0.8} duration={0.9} className="max-w-[360px] text-[var(--text-secondary)] md:pb-4">
          <p style={{ fontSize: 'clamp(13px, 1.1vw, 18px)' }}>
            A curated collection of solutions spanning 11 core computer science topics.
          </p>
        </BlurReveal>
      </div>
    </div>
  )
}

export default Slide00Intro
