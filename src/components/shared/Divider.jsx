const Divider = ({ className = '' }) => {
  return <div className={`w-full ${className}`.trim()}><div className="h-px w-full bg-[var(--divider)]" /></div>
}

export default Divider
