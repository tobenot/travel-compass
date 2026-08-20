<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="group block p-4
           bg-white dark:bg-dark-600
           border-[3px] border-black dark:border-white
           shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]
           hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
           hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500
           transition-all duration-100 ease-out"
  >
    <div class="flex items-center gap-3">
      <div
        class="shrink-0 w-11 h-11
               bg-black/5 dark:bg-white/10
               border-2 border-black/80 dark:border-white/60
               flex items-center justify-center
               transition-all duration-100 group-hover:bg-white group-hover:border-white group-hover:text-black"
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
      <div class="min-w-0 flex-1">
        <h3 class="font-bold text-[15px] leading-snug truncate font-grotesk">
          {{ title }}
        </h3>
        <p v-if="description" class="text-[13px] text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5 group-hover:text-white/80">
          {{ description }}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 shrink-0 text-black dark:text-white group-hover:text-black"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2.5" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
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
  e.target.style.display = 'none';
};
</script>
