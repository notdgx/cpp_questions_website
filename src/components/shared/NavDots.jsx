const NavDots = ({ active, setActive, total = 12, hidden = false }) => {
  if (hidden) return null

  return (
    <div
      className="fixed left-1/2 z-[120] flex -translate-x-1/2 items-center gap-2 px-3 py-2 liquid-glass liquid-glass-pill"
      style={{ bottom: '1.25rem' }}
    >
      {Array.from({ length: total }).map((_, index) => {
        const isCurrent = index === active
        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index}`}
            onClick={() => setActive(index)}
            className={
              isCurrent
                ? 'h-2 w-6 rounded-full bg-white transition-all duration-300'
                : 'h-2 w-2 rounded-full bg-white/40 transition-all duration-300'
            }
          />
        )
      })}
    </div>
  )
}

export default NavDots
