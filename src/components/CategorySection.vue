<template>
  <div>
    <!-- 分类锚点导航条 -->
    <nav
      class="sticky top-16 z-40 -mx-4 px-4 py-3 mb-8
             bg-white/80 dark:bg-dark-700/80 backdrop-blur-lg
             border-b border-gray-200/60 dark:border-white/10"
    >
      <div class="container mx-auto flex gap-2 overflow-x-auto no-scrollbar">
        <button
          v-for="(category, index) in visibleCategories"
          :key="category.title"
          class="shrink-0 px-3 py-1.5 rounded-full text-sm font-medium
                 transition-all duration-200
                 bg-gray-100/80 dark:bg-dark-500/60 text-gray-600 dark:text-gray-300
                 hover:bg-primary-100 dark:hover:bg-primary-900/40
                 hover:text-primary-700 dark:hover:text-primary-300"
          @click="scrollToCategory(category.title, index)"
        >
          <span class="inline-block mr-1 opacity-60">{{ String(index + 1).padStart(2, '0') }}</span>
          {{ category.title }}
        </button>
      </div>
    </nav>

    <!-- 分类内容 -->
    <div class="space-y-10">
      <section
        v-for="(category, index) in filteredCategories"
        :key="category.title"
        :id="`category-${index}`"
        class="animate-fade-in scroll-mt-32"
      >
        <h2 class="flex items-center gap-2 text-lg font-bold mb-4 text-gray-900 dark:text-white">
          <span class="text-primary-500 dark:text-primary-400 font-mono text-sm">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          {{ category.title }}
          <span class="ml-1 text-xs font-normal text-gray-400 dark:text-gray-500">
            {{ category.items.length }}
          </span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <NavCard
            v-for="item in category.items"
            :key="item.link"
            v-bind="item"
          />
        </div>
      </section>

      <!-- 搜索无结果提示 -->
      <div
        v-if="filteredCategories.length === 0 && searchStore.searchQuery"
        class="text-center py-16 text-gray-500 dark:text-gray-400"
      >
        <p class="text-4xl mb-4">🧭</p>
        <p class="text-lg font-medium">没有找到「{{ searchStore.searchQuery }}」</p>
        <p class="text-sm mt-2">试试别的关键词，或者清空搜索</p>
      </div>
    </div>
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
    (item.description || '').toLowerCase().includes(query)
  )
}

const filteredCategories = computed(() => {
  if (!searchStore.searchQuery) return navigationData

  return navigationData.map(category => ({
    ...category,
    items: category.items.filter(matchesSearch)
  })).filter(category => category.items.length > 0)
})

// 锚点导航条显示全部分类（不受搜索过滤影响，方便定位）
const visibleCategories = computed(() => navigationData)

const scrollToCategory = (title, index) => {
  const el = document.getElementById(`category-${index}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
/* 隐藏锚点导航条的横向滚动条 */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
