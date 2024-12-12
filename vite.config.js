import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        forkhloe: resolve(__dirname, 'forkhloe/index.html'),
      },
    },
  },
  plugins: [react()],
})
