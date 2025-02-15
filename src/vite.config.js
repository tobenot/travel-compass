import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 部署在子目录的基准路径，确保静态资源正确加载
  base: '/travel-compass/',
  plugins: [vue()],
}) 