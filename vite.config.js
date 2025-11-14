import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    })
  ],
  build: {
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
          'analytics-vendor': ['@vercel/analytics', '@vercel/speed-insights'],
          'isotope-components': [
            './src/components/isotope/IsotopeUI.jsx',
            './src/components/isotope/IsotopeBackground.jsx',
            './src/components/isotope/IsotopeGrid.jsx',
            './src/components/isotope/IsotopeParticles.jsx'
          ]
        }
      }
    },
    // Enable minification
    minify: 'esbuild',
    // Optimize assets
    assetsInlineLimit: 4096,
    // Disable source maps in production
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons'],
    // Exclude heavy dependencies from pre-bundling
    exclude: []
  },
  // Performance settings
  server: {
    hmr: {
      overlay: false
    }
  },
  // Enable esbuild optimization
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})
