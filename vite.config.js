import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/cpp_questions_website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
