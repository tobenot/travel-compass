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

            <div class="flex items-stretch">
              <button
                @click="handleGoogleSearch"
                class="flex items-center px-3 md:px-4 text-sm font-bold font-grotesk
                       border-l-2 border-gray-300 dark:border-gray-600
                       bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900
                       transition-all duration-100
                       hover:bg-gray-600 dark:hover:bg-white"
              >
                G
              </button>
              <button
                @click="handleBaiduSearch"
                class="flex items-center px-3 md:px-4 text-sm font-bold font-grotesk
                       border-l-2 border-gray-300 dark:border-gray-600
                       transition-all duration-100
                       hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                B
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
