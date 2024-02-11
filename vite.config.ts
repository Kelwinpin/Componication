import { defineConfig } from 'vite'
import { stylexPlugin } from "vite-plugin-stylex-dev"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stylexPlugin()],
})
