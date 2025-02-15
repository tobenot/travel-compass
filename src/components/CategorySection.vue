<template>
  <div class="space-y-8">
    <section v-for="category in filteredCategories" :key="category.title" class="animate-fade-in">
      <h2 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ category.title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NavCard
          v-for="item in category.items"
          :key="item.link"
          v-show="matchesSearch(item)"
          v-bind="item"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSearchStore } from '../stores/search'
import NavCard from './NavCard.vue'
import { navigationData } from '../data/navigation'

const searchStore = useSearchStore()

const matchesSearch = (item) => {
  const query = searchStore.searchQuery.toLowerCase()
  if (!query) return true
  
  return (
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  )
}

const filteredCategories = computed(() => {
  if (!searchStore.searchQuery) return navigationData
  
  return navigationData.map(category => ({
    ...category,
    items: category.items.filter(matchesSearch)
  })).filter(category => category.items.length > 0)
})
</script> 