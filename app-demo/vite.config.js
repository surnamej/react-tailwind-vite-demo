import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Include .js files so that JSX is processed in those files too
      include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    }),
    tailwindcss()
  ],
})
