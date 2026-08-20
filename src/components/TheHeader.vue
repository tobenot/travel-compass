<template>
  <header class="sticky top-0 z-50 bg-gray-50/90 dark:bg-dark-700/90 backdrop-blur border-b-2 border-gray-300 dark:border-gray-600">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 py-4">
        <div class="flex items-center gap-2 shrink-0">
          <img src="/logo.svg" alt="Logo" class="w-9 h-9" />
          <span class="text-2xl font-bold tracking-tight font-grotesk text-black dark:text-white">
            旅路罗盘
          </span>
        </div>

        <div class="relative flex-1">
          <div class="flex items-stretch bg-white dark:bg-dark-600
                      border-2 border-gray-300 dark:border-gray-600
                      shadow-[3px_3px_0_0_rgba(0,0,0,0.12)] dark:shadow-[3px_3px_0_0_rgba(255,255,255,0.12)]
                      focus-within:shadow-none focus-within:translate-x-[3px] focus-within:translate-y-[3px] focus-within:border-primary-600 dark:focus-within:border-primary-400
                      transition-all duration-100">
            <span class="pl-3 pr-2 text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>

            <input
              type="search"
              v-model="searchQuery"
              placeholder="搜索导航或直接搜索..."
              class="flex-1 min-w-0 px-2 py-3 bg-transparent focus:outline-none
                     text-gray-900 dark:text-white
                     placeholder-gray-400 dark:placeholder-gray-500"
              @input="handleSearch"
            />

            <div class="flex items-stretch gap-0">
              <button
                @click="handleGoogleSearch"
                title="用 Google 搜索"
                class="flex items-center justify-center px-3 md:px-4
                       border-l-2 border-gray-300 dark:border-gray-600
                       bg-white dark:bg-dark-600
                       transition-all duration-100
                       hover:bg-gray-100 dark:hover:bg-dark-500"
              >
                <!-- Google "G" 彩色 logo -->
                <svg class="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </button>
              <button
                @click="handleBaiduSearch"
                title="用百度搜索"
                class="flex items-center justify-center px-3 md:px-4
                       border-l-2 border-gray-300 dark:border-gray-600
                       bg-white dark:bg-dark-600
                       transition-all duration-100
                       hover:bg-gray-100 dark:hover:bg-dark-500"
              >
                <img
                  src="https://www.baidu.com/favicon.ico"
                  alt="Baidu"
                  class="w-5 h-5"
                  referrerpolicy="no-referrer"
                />
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

const handleGoogleSearch = () => {
  const query = searchQuery.value.trim()
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank')
  }
}

const handleBaiduSearch = () => {
  const query = searchQuery.value.trim()
  if (query) {
    window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(query)}`, '_blank')
  }
}
</script>
