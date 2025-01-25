import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Means that we can use describe and expect without importing them
    environment: 'jsdom', // Tests work better to test its working in browser
    setupFiles: "src/setupTests.ts", // Any test config before tests run
  }
})
