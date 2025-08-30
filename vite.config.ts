import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // opcional para React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // eliminar si no usas React
    tailwindcss(),  // <- plugin oficial para Vite
  ],
})
