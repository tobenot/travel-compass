<template>
  <header class="sticky top-0 bg-white dark:bg-dark-600 shadow-sm z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8" />
          <span class="text-xl font-bold text-gray-900 dark:text-white">旅路罗盘</span>
        </div>
        
        <div class="w-full max-w-xs ml-4">
          <input
            type="search"
            v-model="searchQuery"
            placeholder="搜索导航..."
            class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            @input="handleSearch"
          />
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
</script> 