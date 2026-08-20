import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { navigationData } from '../data/navigation.js'

export const useSearchStore = defineStore('search', () => {
  const searchQuery = ref('')

  const setSearchQuery = (query) => {
    searchQuery.value = query
  }

  const clearSearch = () => {
    searchQuery.value = ''
  }

  // 对外暴露的搜索文本（供 App.vue / CategorySection 显示无结果提示）
  const searchText = computed(() => searchQuery.value)

  // 过滤后的分类（保留原始顺序，id 与原始分类一致，links 对应原始 items）
  const filteredCategories = computed(() => {
    const q = searchQuery.value.trim().toLowerCase()
    if (!q) {
      return navigationData.map((c, i) => ({
        id: i,
        title: c.title,
        links: c.items
      }))
    }
    return navigationData
      .map((c, i) => ({
        id: i,
        title: c.title,
        links: c.items.filter((item) => {
          const text = `${item.title} ${item.description || ''} ${c.title}`.toLowerCase()
          return text.includes(q)
        })
      }))
      .filter((c) => c.links.length > 0)
  })

  return {
    searchQuery,
    searchText,
    setSearchQuery,
    clearSearch,
    filteredCategories
  }
})
