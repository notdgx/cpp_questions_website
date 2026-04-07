const PrevIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13 4L7 10L13 16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const NextIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 4L13 10L7 16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const NavArrows = ({ active, max, onPrev, onNext, hidden = false }) => {
  if (hidden) return null

  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        disabled={active <= 0}
        className="fixed left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl liquid-glass cursor-pointer md:left-4 md:flex md:h-12 md:w-12 disabled:pointer-events-none disabled:opacity-30"
      >
        <PrevIcon />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        disabled={active >= max}
        className="fixed right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl liquid-glass cursor-pointer md:right-4 md:flex md:h-12 md:w-12 disabled:pointer-events-none disabled:opacity-30"
      >
        <NextIcon />
      </button>
    </>
  )
}

export default NavArrows
