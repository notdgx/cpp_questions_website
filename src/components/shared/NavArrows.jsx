const ArrowIcon = ({ direction = 'right' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={direction === 'left' ? 'rotate-180' : ''}
  >
    <path d="M7 4L13 10L7 16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const NavArrows = ({ active, max, onPrev, onNext, hidden = false }) => {
  if (hidden) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[120]">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        disabled={active <= 0}
        className="pointer-events-auto absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl liquid-glass cursor-pointer disabled:pointer-events-none disabled:opacity-30"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        disabled={active >= max}
        className="pointer-events-auto absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl liquid-glass cursor-pointer disabled:pointer-events-none disabled:opacity-30"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  )
}

export default NavArrows
