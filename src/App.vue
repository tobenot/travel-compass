<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-1 container mx-auto px-4 py-8">
      <CategorySection />
    </main>
    <footer class="bg-gray-100 dark:bg-dark-700 py-6 mt-auto">
      <div class="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {{ new Date().getFullYear() }} 旅路罗盘. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import CategorySection from './components/CategorySection.vue'
</script> 