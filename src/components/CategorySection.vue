<template>
  <div>
    <!-- 分类页签：方按钮，吸顶，选中态反色 -->
    <nav
      class="sticky top-16 z-40 -mx-4 px-4 py-3 mb-10
             bg-gray-50 dark:bg-dark-700
             border-b-2 border-gray-300 dark:border-gray-600
             overflow-x-auto whitespace-nowrap"
    >
      <div class="inline-flex gap-2">
        <button
          v-for="(cat, i) in visibleCategories"
          :key="cat.id"
          @click="scrollToCategory(cat.id)"
          class="inline-flex items-center gap-1.5 px-3 py-1.5
                 border-2 font-grotesk text-sm font-medium
                 transition-colors duration-100
                 focus:outline-none
                 focus-visible:ring-2 focus-visible:ring-primary-500
                 focus-visible:ring-offset-2
                 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-dark-700"
          :class="activeCategory === cat.id
            ? { 'bg-primary-700 text-white border-primary-700 dark:bg-primary-400 dark:text-dark-900 dark:border-primary-400': true }
            : { 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 dark:bg-dark-600 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-dark-500': true }"
        >
          <span class="text-xs opacity-70 font-mono">{{ pad2(i + 1) }}</span>
          {{ cat.title }}
        </button>
      </div>
    </nav>

    <!-- 分类内容 -->
    <div v-for="(cat, i) in visibleCategories" :key="cat.id" :id="`cat-${cat.id}`" class="mb-10 scroll-mt-32">
      <div class="flex items-baseline gap-3 mb-5">
        <span class="font-grotesk font-mono text-sm text-primary-700 dark:text-primary-400">{{ pad2(i + 1) }}</span>
        <h2 class="font-grotesk text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ cat.title }}</h2>
        <span class="text-xs text-gray-400 dark:text-gray-500 font-mono">{{ cat.links.length }}</span>
        <div class="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <NavCard v-for="link in cat.links" :key="link.title" :link="link" />
      </div>
    </div>

    <!-- 搜索无结果 -->
    <div v-if="visibleCategories.length === 0" class="text-center py-16 text-gray-500 dark:text-gray-400 font-grotesk">
      <p class="text-3xl mb-3">🧭</p>
      <p>没有找到「{{ searchStore.searchText }}」相关的内容</p>
      <p class="text-sm mt-2 opacity-70">试试换个关键词，或清除搜索</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useSearchStore } from '../stores/search.js'
import NavCard from './NavCard.vue'

const searchStore = useSearchStore()

const pad2 = (n) => String(n).padStart(2, '0')

// 过滤后的分类（保留原始顺序，id 与原始分类一致）
const visibleCategories = computed(() =>
  searchStore.filteredCategories.map((c) => ({ id: c.id, title: c.title, links: c.links }))
)

// 当前滚动到的分类（用于页签高亮）
const activeCategory = ref('')

const sectionMap = new Map()

const onScroll = () => {
  if (sectionMap.size === 0) return
  const headerH = 64
  let current = ''
  for (const [id, el] of sectionMap) {
    if (el.getBoundingClientRect().top - headerH <= 48) {
      current = id
    }
  }
  activeCategory.value = current
}

const scrollToCategory = (id) => {
  const el = sectionMap.get(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  activeCategory.value = id
}

const collectSections = () => {
  sectionMap.clear()
  visibleCategories.value.forEach((c) => {
    const el = document.getElementById(`cat-${c.id}`)
    if (el) sectionMap.set(c.id, el)
  })
}

onMounted(() => {
  collectSections()
  window.addEventListener('scroll', onScroll, { passive: true })
  // 初始高亮
  setTimeout(onScroll, 100)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>