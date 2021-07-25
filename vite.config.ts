import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import ViteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()]
    }),
    ViteCompression()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // Set '@' to point to the 'src' directory
    }
  },
  base: './', // Set the packing path
  server: {
    port: 3000,
    open: true, // The browser opens automatically when the service starts
    cors: true // Allow cross-origin resource sharing
    // Configure the proxy service according to your needs
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
  build: {
    chunkSizeWarningLimit: 1024,
    cssCodeSplit: true,
    manifest: true
  }
})
