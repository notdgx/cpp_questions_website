import { createRoot } from 'react-dom/client'
import 'highlight.js/styles/github-dark.css'
import App from './App'
import './index.css'
import { hljs } from './hljs'

export { hljs }

createRoot(document.getElementById('root')).render(<App />)
