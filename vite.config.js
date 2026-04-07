import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const githubPagesBase = repositoryName ? `/${repositoryName}/` : './'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGithubActions ? githubPagesBase : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
