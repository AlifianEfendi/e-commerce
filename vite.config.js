import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@fragments': path.resolve(__dirname, 'src/components/fragments'),
      '@layouts': path.resolve(__dirname, 'src/components/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    host : "0.0.0.0",
    port : 5173,
  }
})
