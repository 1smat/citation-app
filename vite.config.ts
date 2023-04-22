import { defineConfig, createServer, ViteDevServer } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs';
import { createProxyMiddleware } from 'http-proxy-middleware';

const proxyConfig = {
  target: 'https://crudapi.co.uk',
  changeOrigin: true,
};
const apiProxy = createProxyMiddleware(proxyConfig);


const serverOptions = {
  https: {
    key: fs.readFileSync('./localhost.key'),
    cert: fs.readFileSync('./localhost.crt'),
  },
  // middleware: [apiProxy],
  proxy: {
    '/api': {
      target: 'https://crudapi.co.uk',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api/v1' },
    },
  }
}



export default defineConfig({
  server: serverOptions,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
})






