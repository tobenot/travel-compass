import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 尝试使用相对路径，解决资源路径问题
  base: './',
  plugins: [vue()],
}) 