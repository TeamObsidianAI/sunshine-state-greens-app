import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves this project at /sunshine-state-greens-app/.
  // Switch back to '/' if you move to a custom domain or root-level hosting.
  base: '/sunshine-state-greens-app/',
})
