import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mavuriel.github.io/mini-blog-dev/',
  plugins: [react()]
})
