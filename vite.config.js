import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/projet-kasa/', // Ton repo GitHub Pages
  plugins: [react()],
})