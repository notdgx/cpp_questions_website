export const GITHUB_PROFILE_URL = 'https://github.com/notdgx/'

const GithubLink = ({ className = '' }) => {
  return (
    <a
      href={GITHUB_PROFILE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Open GitHub profile"
      className={`liquid-glass liquid-glass-circle flex h-9 w-9 items-center justify-center text-white/90 ${className}`.trim()}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.59 2 12.25C2 16.78 4.87 20.63 8.84 21.99C9.34 22.08 9.5 21.77 9.5 21.5V19.74C6.73 20.36 6.14 18.38 6.14 18.38C5.68 17.17 5.03 16.85 5.03 16.85C4.12 16.2 5.1 16.21 5.1 16.21C6.1 16.28 6.63 17.28 6.63 17.28C7.53 18.85 8.97 18.4 9.54 18.13C9.63 17.47 9.89 17.02 10.17 16.76C7.96 16.49 5.62 15.62 5.62 11.73C5.62 10.63 6 9.73 6.65 9.02C6.55 8.76 6.2 7.7 6.75 6.26C6.75 6.26 7.59 5.98 9.5 7.31C10.3 7.08 11.15 6.97 12 6.97C12.85 6.97 13.7 7.08 14.5 7.31C16.41 5.98 17.25 6.26 17.25 6.26C17.8 7.7 17.45 8.76 17.35 9.02C18 9.73 18.38 10.63 18.38 11.73C18.38 15.63 16.03 16.48 13.82 16.75C14.17 17.07 14.5 17.69 14.5 18.64V21.5C14.5 21.77 14.66 22.08 15.16 21.99C19.13 20.63 22 16.78 22 12.25C22 6.59 17.52 2 12 2Z" />
      </svg>
    </a>
  )
}

export default GithubLink
