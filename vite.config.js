import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// 注意：确保此文件位于项目根目录
export default defineConfig({
  // 设置部署时的基础路径
  base: '/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: '旅路罗盘',
        short_name: '旅路罗盘',
        description: '旅路罗盘 - 为你指引前进方向的导航站',
        theme_color: '#8b5cf6',
        background_color: '#8b5cf6',
        display: 'standalone',
        lang: 'zh-CN',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
        // 排除 public/images 下的大图片资源，避免预缓存爆炸
        globIgnores: ['images/**'],
        // 安全网：允许单文件最大 4MiB
        maximumFileSizeToCacheInBytes: 4194304,
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/^\/api/],
      },
    }),
  ],
})
