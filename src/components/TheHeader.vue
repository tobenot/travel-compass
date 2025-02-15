<template>
  <header class="sticky top-0 bg-white dark:bg-dark-600 shadow-sm z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8" />
          <span class="text-xl font-bold text-gray-900 dark:text-white">旅路罗盘</span>
        </div>
        
        <div class="relative w-full max-w-2xl ml-4">
          <div class="flex items-center bg-white dark:bg-dark-500 rounded-2xl
                      transition-all duration-300 
                      border border-primary-200 dark:border-primary-900
                      shadow-[0_0_10px_rgba(139,92,246,0.1)]
                      dark:shadow-[0_0_10px_rgba(139,92,246,0.05)]
                      hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]
                      dark:hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]
                      backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80">
            <span class="pl-4 text-gold-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            
            <input
              type="search"
              v-model="searchQuery"
              placeholder="搜索导航或直接搜索..."
              class="w-full px-3 py-4 bg-transparent focus:outline-none 
                     text-gray-700 dark:text-gray-200
                     placeholder-gray-400 dark:placeholder-gray-500"
              @input="handleSearch"
            />
            
            <div class="flex items-center space-x-2 pr-3">
              <button
                @click="handleGoogleSearch"
                class="flex items-center px-4 py-2 rounded-xl text-sm font-medium
                       transition-all duration-300 transform hover:scale-105
                       bg-gradient-to-r from-gold-500 to-gold-600 
                       hover:from-gold-600 hover:to-gold-700
                       text-white shadow-md hover:shadow-lg"
              >
                <img src="https://www.google.com/favicon.ico" class="w-4 h-4 mr-1.5 filter dark:brightness-110" alt="Google" />
                搜索
              </button>
              
              <button
                @click="handleBaiduSearch"
                class="flex items-center px-4 py-2 rounded-xl text-sm font-medium
                       transition-all duration-300 transform hover:scale-105
                       bg-gradient-to-r from-gold-500 to-gold-600 
                       hover:from-gold-600 hover:to-gold-700
                       text-white shadow-md hover:shadow-lg"
              >
                <img src="https://www.baidu.com/favicon.ico" class="w-4 h-4 mr-1.5 filter dark:brightness-110" alt="Baidu" />
                搜索
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/search'

const searchStore = useSearchStore()
const searchQuery = ref('')

const handleSearch = () => {
  searchStore.setSearchQuery(searchQuery.value)
}

// 处理 Google 搜索，使用输入内容构造搜索链接，并在新标签页中打开
const handleGoogleSearch = () => {
  const query = searchQuery.value.trim()
  if (query) {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      '_blank'
    )
  }
}

// 处理 百度 搜索，使用输入内容构造搜索链接，并在新标签页中打开
const handleBaiduSearch = () => {
  const query = searchQuery.value.trim()
  if (query) {
    window.open(
      `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`,
      '_blank'
    )
  }
}
</script> 