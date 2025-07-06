import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { compression } from 'vite-plugin-compression2'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      // Bundle analyzer for production builds
      mode === 'production' &&
        visualizer({
          filename: 'dist/stats.html',
          open: false,
          gzipSize: true,
          brotliSize: true,
        }),
      // Compression plugins for production
      mode === 'production' &&
        compression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 1024,
          deleteOriginFile: false,
        }),
      mode === 'production' &&
        compression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 1024,
          deleteOriginFile: false,
        }),
    ].filter(Boolean),

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },

    server: {
      allowedHosts: ['www.simonelivraghi.com'],
    },

    build: {
      // Target modern browsers for smaller bundle sizes
      target: 'es2020',

      // Enable minification
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: true,
          pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
        },
        format: {
          comments: false,
        },
      },

      // Optimize bundle splitting
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            vendor: ['vue', 'vue-router', 'pinia'],
            vueuse: ['@vueuse/head'],
          },

          // Optimize asset naming for caching
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: assetInfo => {
            const info = assetInfo.name.split('.')
            const ext = info[info.length - 1]
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
              return `assets/images/[name]-[hash][extname]`
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
              return `assets/fonts/[name]-[hash][extname]`
            }
            if (ext === 'css') {
              return `assets/css/[name]-[hash][extname]`
            }
            return `assets/[ext]/[name]-[hash][extname]`
          },
        },
      },

      // Report bundle size
      reportCompressedSize: true,

      // Increase chunk size warning limit
      chunkSizeWarningLimit: 1000,

      // Enable CSS code splitting
      cssCodeSplit: true,

      // Generate source maps for production debugging
      sourcemap: mode === 'development',

      // Optimize assets
      assetsInlineLimit: 4096,
    },

    // CSS optimization
    css: {
      devSourcemap: mode === 'development',
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";',
        },
      },
    },

    // Optimization for different environments
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia', '@vueuse/head'],
      exclude: ['@vitejs/plugin-vue'],
    },

    // Performance hints
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
  }
})
