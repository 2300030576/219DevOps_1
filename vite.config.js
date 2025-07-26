// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/S219_CICD/', // 👈 Important for GitHub Pages!
  plugins: [react()]
})
