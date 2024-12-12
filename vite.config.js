import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  input: {
    home: '/index.html',
    forkhloe: '/pages/forkhloe.html',
    // Add more pages here
    },
})
