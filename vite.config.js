import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 注意：确保此文件位于项目根目录
export default defineConfig({
  // 设置部署时的基础路径
  base: '/travel-compass/',
  plugins: [vue()],
}) 