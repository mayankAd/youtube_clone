import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_RAPID_API_KEY': JSON.stringify(env.VITE_RAPID_API_KEY)
    },
    base: "./",
    plugins: [react()],
  }
})