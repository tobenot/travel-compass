import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const searchQuery = ref('')

  const setSearchQuery = (query) => {
    searchQuery.value = query
  }

  return {
    searchQuery,
    setSearchQuery
  }
}) 