<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- 背景图层 -->
    <div class="fixed inset-0 z-0">
      <img 
        src="./images/sea.png" 
        alt="" 
        class="w-full h-full object-cover opacity-70 dark:opacity-40"
      />
      <div class="absolute inset-0 bg-white/40 dark:bg-dark-900/60 backdrop-blur-[2px]"></div>
    </div>

    <!-- 主要内容 -->
    <div class="relative z-20 flex flex-col min-h-screen">
      <TheHeader />
      
      <!-- 立绘相框 -->
      <div class="mx-auto mt-8 mb-4">
        <div class="relative">
          <!-- 装饰性边框 -->
          <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-700/20 
                      rounded-2xl blur-md"></div>
          <!-- 相框容器 -->
          <div class="relative rounded-xl overflow-hidden
                      border-4 border-white/30 dark:border-white/10 
                      shadow-[0_0_15px_rgba(255,255,255,0.2)]
                      dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                      bg-white/5 backdrop-blur-sm">
            <img 
              :src="`./images/portrait${randomNum}.png`" 
              alt="" 
              class="w-[256px] h-[384px] object-contain"
            />
          </div>
          <!-- 装饰性角落 -->
          <div class="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary-500/50"></div>
          <div class="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary-500/50"></div>
          <div class="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary-500/50"></div>
          <div class="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary-500/50"></div>
        </div>
      </div>

      <main class="flex-1 container mx-auto px-4 py-8">
        <CategorySection />
      </main>
      <footer class="bg-gray-100/80 dark:bg-dark-700/80 backdrop-blur-sm py-6 w-full mt-auto">
        <div class="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© {{ new Date().getFullYear() }} 旅路罗盘. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import CategorySection from './components/CategorySection.vue'

// 生成1-5的随机数
const randomNum = ref(Math.floor(Math.random() * 3) + 1)
</script> 