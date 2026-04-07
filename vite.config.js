import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGithubActions ? '/cpp_questions_website/' : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
