<template>
  <header class="sticky top-0 bg-white dark:bg-dark-600 shadow-sm z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8" />
          <span class="text-xl font-bold text-gray-900 dark:text-white">旅路罗盘</span>
        </div>
        
        <div class="relative w-full max-w-2xl ml-4">
          <div class="flex items-center bg-gray-50 dark:bg-dark-500 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <span class="pl-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            
            <input
              type="search"
              v-model="searchQuery"
              placeholder="搜索导航或直接搜索..."
              class="w-full px-3 py-3 bg-transparent focus:outline-none text-gray-700 dark:text-gray-200"
              @input="handleSearch"
            />
            
            <div class="flex items-center space-x-1 pr-2">
              <button
                @click="handleGoogleSearch"
                class="flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                       bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              >
                <img src="https://www.google.com/favicon.ico" class="w-4 h-4 mr-1" alt="Google" />
                搜索
              </button>
              
              <button
                @click="handleBaiduSearch"
                class="flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                       bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
              >
                <img src="https://www.baidu.com/favicon.ico" class="w-4 h-4 mr-1" alt="Baidu" />
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