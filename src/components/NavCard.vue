<template>
  <a
    :href="link.link"
    target="_blank"
    rel="noopener noreferrer"
    class="group block p-4
           bg-white dark:bg-dark-600
           border-2 border-gray-300 dark:border-gray-600
           shadow-[3px_3px_0_0_rgba(0,0,0,0.12)] dark:shadow-[3px_3px_0_0_rgba(255,255,255,0.12)]
           transition-all duration-100
           hover:border-gray-500 dark:hover:border-gray-400
           hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]
           focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
  >
    <div class="flex items-start gap-3">
      <!-- 图标：emoji 或 Google favicon -->
      <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center
                  border-2 border-gray-200 dark:border-gray-600
                  bg-gray-50 dark:bg-dark-500
                  transition-colors duration-100
                  group-hover:border-primary-600 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30">
        <img
          v-if="!link.icon && faviconUrl"
          :src="faviconUrl"
          :alt="link.title"
          class="w-6 h-6"
          loading="lazy"
          referrerpolicy="no-referrer"
        />
        <span v-else class="text-xl leading-none">{{ link.icon || '🔗' }}</span>
      </div>

      <div class="flex-1 min-w-0">
        <h3 class="font-grotesk font-semibold text-sm text-gray-900 dark:text-white truncate
                   group-hover:text-primary-700 dark:group-hover:text-primary-300">
          {{ link.title }}
        </h3>
        <p v-if="link.description" class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5">{{ link.description }}</p>
      </div>

      <span class="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 mt-1 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </span>
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  link: { type: Object, required: true }
})

// 防御性计算 favicon URL（避免 new URL() 对空/非法值抛异常）
const faviconUrl = computed(() => {
  try {
    if (!props.link.link) return ''
    const url = new URL(props.link.link)
    if (!url.hostname) return ''
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`
  } catch {
    return ''
  }
})
</script>
