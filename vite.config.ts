import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/satheesh_portfolio/",
  plugins: [react()],
})