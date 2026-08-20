<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="group block p-4 rounded-2xl
           bg-white/70 dark:bg-dark-600/50
           backdrop-blur-md
           border border-gray-200/60 dark:border-white/10
           shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]
           dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.4)]
           hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)]
           dark:hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]
           hover:border-primary-300/80 dark:hover:border-primary-500/50
           hover:bg-white/85 dark:hover:bg-dark-500/60
           transition-all duration-300 ease-out
           hover:-translate-y-0.5"
  >
    <div class="flex items-center gap-3">
      <div
        class="shrink-0 relative w-11 h-11 rounded-xl
               bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-500 dark:to-dark-600
               flex items-center justify-center
               overflow-hidden
               transition-transform duration-300 group-hover:scale-110"
      >
        <template v-if="icon">
          <span class="text-xl leading-none">{{ icon }}</span>
        </template>
        <template v-else>
          <img
            :src="`https://www.google.com/s2/favicons?domain=${encodeURIComponent(link)}&sz=128`"
            :alt="title"
            class="w-6 h-6 object-contain"
            loading="lazy"
            @error="handleImageError"
          />
        </template>
      </div>
      <div class="min-w-0">
        <h3
          class="font-medium text-gray-900 dark:text-gray-100 truncate
                 transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-300"
        >
          {{ title }}
        </h3>
        <p v-if="description" class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5">
          {{ description }}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 shrink-0 ml-auto text-gray-300 dark:text-gray-500
               opacity-0 -translate-x-1
               group-hover:opacity-100 group-hover:translate-x-0
               transition-all duration-300 group-hover:text-primary-400 dark:group-hover:text-primary-500"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  link: String,
  icon: String,
});

const handleImageError = (e) => {
  // favicon 加载失败时回退到默认占位
  e.target.style.display = 'none';
};
</script>
