<template>
  <header class="sticky top-0 z-50 bg-gray-50 dark:bg-dark-700 border-b-[3px] border-black dark:border-white">
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
                      border-[3px] border-black dark:border-white
                      shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]
                      focus-within:shadow-none focus-within:translate-x-[4px] focus-within:translate-y-[4px]
                      transition-all duration-100">
            <span class="pl-3 pr-2 text-black dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>

            <input
              type="search"
              v-model="searchQuery"
              placeholder="搜索导航或直接搜索..."
              class="flex-1 min-w-0 px-2 py-3 bg-transparent focus:outline-none
                     text-black dark:text-white
                     placeholder-gray-400 dark:placeholder-gray-500"
              @input="handleSearch"
            />

            <div class="flex items-stretch">
              <button
                @click="handleGoogleSearch"
                class="flex items-center px-3 md:px-4 text-sm font-bold font-grotesk
                       border-l-[3px] border-black dark:border-white
                       bg-black text-white dark:bg-white dark:text-black
                       transition-all duration-100
                       hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
              >
                G
              </button>
              <button
                @click="handleBaiduSearch"
                class="flex items-center px-3 md:px-4 text-sm font-bold font-grotesk
                       border-l-[3px] border-black dark:border-white
                       transition-all duration-100
                       hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
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
