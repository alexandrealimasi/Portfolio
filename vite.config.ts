import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: '0.0.0.0', // allow external access
    port: process.env.PORT ? Number(process.env.PORT) : 8001, // use Render port if set
    allowedHosts: ['portfolio-3-1tmz.onrender.com'], 
  },
})
