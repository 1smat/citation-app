import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

const serverOptions = {
  https: {
    key: fs.readFileSync('./localhost.key'),
    cert: fs.readFileSync('./localhost.crt')
  },
  proxy: {
    '/api/v1': {
      target: 'https://crudapi.co.uk',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api/v1' }
    }
  },
  port: 3000
}

export default defineConfig({
  server: serverOptions,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
})
