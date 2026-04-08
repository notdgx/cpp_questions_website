import { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { topics } from './data/manifest'
import Slide00Intro from './components/slides/Slide00Intro'
import Slide01 from './components/slides/Slide01'
import Slide02 from './components/slides/Slide02'
import Slide03 from './components/slides/Slide03'
import Slide04 from './components/slides/Slide04'
import Slide05 from './components/slides/Slide05'
import Slide06 from './components/slides/Slide06'
import Slide07 from './components/slides/Slide07'
import Slide08 from './components/slides/Slide08'
import Slide09 from './components/slides/Slide09'
import Slide10 from './components/slides/Slide10'
import Slide11 from './components/slides/Slide11'
import NavDots from './components/shared/NavDots'
import NavArrows from './components/shared/NavArrows'
import WaterBubbleTransition from './components/animated/WaterBubbleTransition'
import SolutionModal from './components/shared/SolutionModal'

const introVideo = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'
const blurThemes = ['smooth', 'frosted', 'liquid']
const defaultBlurTheme = 'liquid'
const defaultBlurThemeIndex = Math.max(blurThemes.indexOf(defaultBlurTheme), 0)
const blurThemeLabels = {
  smooth: 'Smooth Blur',
  frosted: 'Frosted Blur',
  liquid: 'Liquid Glass'
}

const topicSlideVideos = [
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8',
  'https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8',
  'https://stream.mux.com/PkFsoKeakRLgL01gjf02CRcSbsJ600Z00NvLr9eRZ92pLbA.m3u8',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4',
  'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8',
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8',
  'https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4',
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8',
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8',
  'https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8'
]

const topicSlideComponents = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11
]

const App = () => {
  const [active, setActive] = useState(0)
  const [blurThemeIndex, setBlurThemeIndex] = useState(() => {
    if (typeof window === 'undefined') return defaultBlurThemeIndex
    const savedTheme = window.localStorage.getItem('blurTheme')
    const savedIndex = savedTheme ? blurThemes.indexOf(savedTheme) : -1
    return savedIndex >= 0 ? savedIndex : defaultBlurThemeIndex
  })
  const [touchStartX, setTouchStartX] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null)
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null)
  const [clickOrigin, setClickOrigin] = useState({ x: 0, y: 0 })
  const blurTheme = blurThemes[blurThemeIndex]
  const liquidFilterUrl = useMemo(() => {
    const baseUrl = import.meta.env.BASE_URL || '/'
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
    if (typeof window === 'undefined') return `${normalizedBase}#liquidDisplacementFilter`
    return `${window.location.origin}${normalizedBase}#liquidDisplacementFilter`
  }, [])

  const liquidBackdropVars = useMemo(
    () => ({
      '--glass-backdrop-liquid': `brightness(1.1) blur(14px) saturate(165%) url("${liquidFilterUrl}")`,
      '--glass-backdrop-sm-liquid': `brightness(1.08) blur(12px) saturate(150%) url("${liquidFilterUrl}")`
    }),
    [liquidFilterUrl]
  )

  const toggleBlurTheme = () => {
    setBlurThemeIndex((index) => (index + 1) % blurThemes.length)
  }

  const totalProblems = useMemo(
    () => topics.slice(1).reduce((acc, topic) => acc + topic.questions.length, 0),
    []
  )

  const openQuestion = (topicIndex, questionIndex, origin) => {
    setSelectedTopicIndex(topicIndex)
    setSelectedQuestionIndex(questionIndex)
    setClickOrigin(origin)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const selectedTopic = selectedTopicIndex != null ? topics[selectedTopicIndex] : null
  const selectedQuestion =
    selectedTopic && selectedQuestionIndex != null
      ? selectedTopic.questions[selectedQuestionIndex]
      : null

  const goPrevQuestion = () => {
    setSelectedQuestionIndex((index) => Math.max((index ?? 0) - 1, 0))
  }

  const goNextQuestion = () => {
    if (!selectedTopic) return
    setSelectedQuestionIndex((index) => Math.min((index ?? 0) + 1, selectedTopic.questions.length - 1))
  }

  const slides = [
    {
      id: 0,
      render: () => (
        <Slide00Intro
          isActive={active === 0}
          totalProblems={totalProblems}
          bgVideo={introVideo}
          blurThemeLabel={blurThemeLabels[blurTheme]}
          onToggleBlurTheme={toggleBlurTheme}
        />
      )
    },
    ...topicSlideComponents.map((SlideComponent, index) => {
      const slideId = index + 1
      return {
        id: slideId,
        render: () => (
          <SlideComponent
            isActive={active === slideId}
            onQuestionOpen={openQuestion}
            bgVideo={topicSlideVideos[index]}
          />
        )
      }
    })
  ]

  const totalSlides = slides.length
  const maxSlide = totalSlides - 1

  useEffect(() => {
    const onKeyDown = (e) => {
      if (modalOpen) {
        if (e.code === 'Escape') {
          setModalOpen(false)
          return
        }

        if (e.code === 'ArrowLeft') {
          goPrevQuestion()
          return
        }

        if (e.code === 'ArrowRight') {
          goNextQuestion()
          return
        }

        return
      }

      if (e.code === 'ArrowRight' || e.code === 'ArrowDown' || e.code === 'Space') {
        setActive((prev) => Math.min(prev + 1, maxSlide))
      }
      if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
        setActive((prev) => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [modalOpen, maxSlide, selectedTopic])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('blurTheme', blurTheme)
  }, [blurTheme])

  return (
    <div className={`h-full w-full blur-theme-${blurTheme}`} style={liquidBackdropVars}>
      <div
        className="relative h-screen w-screen overflow-hidden bg-black"
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (modalOpen || touchStartX == null) return
          const delta = e.changedTouches[0].clientX - touchStartX
          if (delta > 50) setActive((prev) => Math.max(prev - 1, 0))
          if (delta < -50) setActive((prev) => Math.min(prev + 1, maxSlide))
          setTouchStartX(null)
        }}
      >
        {slides.map((slide) => {
          const isActive = active === slide.id
          return (
            <motion.section
              key={slide.id}
              className="absolute inset-0"
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ zIndex: isActive ? 10 : 0, pointerEvents: isActive ? 'auto' : 'none' }}
            >
              {slide.render()}
            </motion.section>
          )
        })}

        <WaterBubbleTransition open={modalOpen} clickOrigin={clickOrigin}>
          <SolutionModal
            question={selectedQuestion}
            topicTitle={selectedTopic?.title ?? ''}
            total={selectedTopic?.questions.length ?? 0}
            onClose={closeModal}
            onPrev={goPrevQuestion}
            onNext={goNextQuestion}
            hasPrev={(selectedQuestionIndex ?? 0) > 0}
            hasNext={
              selectedTopic
                ? (selectedQuestionIndex ?? 0) < selectedTopic.questions.length - 1
                : false
            }
          />
        </WaterBubbleTransition>

        <svg width="0" height="0" className="absolute pointer-events-none opacity-0">
          <filter id="liquidDisplacementFilter">
            <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="180"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      </div>

      {!modalOpen && <NavDots active={active} setActive={setActive} total={totalSlides} />}
      <NavArrows
        active={active}
        max={maxSlide}
        onPrev={() => setActive((prev) => Math.max(prev - 1, 0))}
        onNext={() => setActive((prev) => Math.min(prev + 1, maxSlide))}
        hidden={modalOpen}
      />
    </div>
  )
}

export default App
