import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 设置 base 为仓库名（仅当部署到项目站时需要，如 https://<username>.github.io/travel-compass/）
  base: '/travel-compass/',
  plugins: [vue()],
}) 