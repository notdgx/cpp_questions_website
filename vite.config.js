import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
// In GitHub Actions, GITHUB_REPOSITORY is typically "owner/repo".
// For project pages we need "/repo/" as base; if unavailable, fall back to root "/".
const repositorySlug = process.env.GITHUB_REPOSITORY
const repositoryName =
  repositorySlug && repositorySlug.includes('/') ? repositorySlug.split('/')[1] : ''
const gitHubPagesBase = repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubActions ? gitHubPagesBase : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
