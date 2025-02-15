<template>
  <a 
    :href="link" 
    target="_blank" 
    rel="noopener noreferrer"
    class="block p-4 bg-white dark:bg-dark-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
  >
    <div class="flex items-center space-x-3">
      <img 
        :src="`https://www.google.com/s2/favicons?domain=${encodeURIComponent(link)}&sz=128`"
        :alt="title" 
        class="w-8 h-8 rounded"
        loading="lazy"
      />
      <div>
        <h3 class="font-medium text-gray-900 dark:text-gray-100">{{ title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{{ description }}</p>
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