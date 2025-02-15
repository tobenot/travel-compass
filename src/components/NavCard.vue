<template>
  <a 
    :href="link" 
    target="_blank" 
    rel="noopener noreferrer"
    class="block p-4 bg-white dark:bg-dark-600 rounded-lg
           border border-gray-100 dark:border-dark-500
           shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]
           dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.3)]
           hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)]
           dark:hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)]
           hover:border-gray-200 dark:hover:border-dark-400
           transition-all duration-300 ease-out
           hover:-translate-y-0.5"
  >
    <div class="flex items-center space-x-3">
      <div class="shrink-0 relative">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-dark-500 dark:to-dark-600 rounded-lg"></div>
        <img 
          :src="`https://www.google.com/s2/favicons?domain=${encodeURIComponent(link)}&sz=128`"
          :alt="title" 
          class="relative w-10 h-10 rounded-lg object-cover"
          loading="lazy"
          @error="handleImageError"
        />
      </div>
      <div class="min-w-0">
        <h3 class="font-medium text-gray-900 dark:text-gray-100 truncate">{{ title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5">{{ description }}</p>
      </div>
    </div>
  </a>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  link: String,
  icon: String,
});

const handleImageError = (e) => {
  // 当favicon.ico加载失败时，使用备用的Google服务
  e.target.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(props.link)}&sz=128`
}
</script>

<style>
.nav-card {
  @apply bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300;
}
.nav-card-content {
  @apply flex items-start space-x-3;
}
.nav-card-icon {
  @apply w-10 h-10 rounded-lg;
}
.nav-card-title {
  @apply font-medium text-gray-900;
}
.nav-card-description {
  @apply text-sm text-gray-500 mt-1 line-clamp-2;
}
</style> 