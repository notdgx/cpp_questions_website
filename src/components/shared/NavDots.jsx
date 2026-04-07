const NavDots = ({ total, active, setActive }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '100px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          aria-label={`Go to slide ${i + 1}`}
          style={{
            width: active === i ? '24px' : '8px',
            height: '8px',
            borderRadius: '100px',
            background: active === i ? '#ffffff' : 'rgba(255,255,255,0.4)',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            transition: 'all 300ms ease',
            flexShrink: 0
          }}
        />
      ))}
    </div>
  )
}

export default NavDots
