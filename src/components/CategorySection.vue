<template>
  <div>
    <!-- 分类页签：粗野方按钮，吸顶 -->
    <nav
      class="sticky top-16 z-40 -mx-4 px-4 py-3 mb-10
             bg-gray-50 dark:bg-dark-700
             border-b-[3px] border-black dark:border-white"
    >
      <div class="container mx-auto flex gap-2 overflow-x-auto no-scrollbar">
        <button
          v-for="(category, index) in navigationData"
          :key="category.title"
          class="shrink-0 flex items-center gap-2 px-3 py-2 text-sm font-bold
                 border-[3px] border-black dark:border-white
                 font-grotesk transition-all duration-100
                 bg-white dark:bg-dark-600 text-black dark:text-white
                 hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          :class="{
            'translate-x-[3px] translate-y-[3px] bg-black text-white dark:bg-white dark:text-black':
              activeIndex === index
          }"
          @click="scrollToCategory(index)"
        >
          <span class="text-[11px] font-mono opacity-60">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          {{ category.title }}
        </button>
      </div>
    </nav>

    <!-- 分类内容 -->
    <div class="space-y-12">
      <section
        v-for="(category, index) in filteredCategories"
        :key="category.title"
        :id="`category-${index}`"
        class="scroll-mt-32"
      >
        <div class="flex items-center gap-3 mb-5 border-b-[3px] border-black dark:border-white pb-3">
          <span class="font-mono text-sm font-bold px-2 py-1 bg-black text-white dark:bg-white dark:text-black">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h2 class="text-xl font-bold tracking-tight font-grotesk uppercase">
            {{ category.title }}
          </h2>
          <span class="ml-auto text-xs font-mono text-gray-500 dark:text-gray-400">
            {{ category.items.length }} ITEMS
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        class="text-center py-20 border-[3px] border-dashed border-black dark:border-white"
      >
        <p class="text-5xl mb-4 font-grotesk">404</p>
        <p class="text-lg font-bold">没有找到「{{ searchStore.searchQuery }}」</p>
        <p class="text-sm mt-2 text-gray-500 dark:text-gray-400">试试别的关键词，或者清空搜索</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useSearchStore } from '../stores/search'
import NavCard from './NavCard.vue'
import { navigationData } from '../data/navigation'

const searchStore = useSearchStore()
const activeIndex = ref(0)

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

const scrollToCategory = (index) => {
  const el = document.getElementById(`category-${index}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// 滚动时高亮当前可见的分类页签
const onScroll = () => {
  let current = 0
  navigationData.forEach((_, index) => {
    const el = document.getElementById(`category-${index}`)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 160) {
        current = index
      }
    }
  })
  activeIndex.value = current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* 隐藏页签的横向滚动条 */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
