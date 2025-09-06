import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['react-icons'],
          analytics: ['@vercel/analytics', '@vercel/speed-insights']
        }
      }
    },
    // Enable minification
    minify: 'esbuild',
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable source maps for debugging (disable in production)
    sourcemap: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons']
  },
  // Performance settings
  server: {
    hmr: {
      overlay: false
    }
  }
})
