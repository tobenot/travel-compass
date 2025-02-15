<template>
  <a 
    :href="item.url" 
    target="_blank"
    class="group animate-fade-in bg-white/80 backdrop-blur-sm rounded-xl 
           hover:shadow-lg hover:shadow-primary-100/50 
           transition-all duration-300 overflow-hidden border border-gray-100/80
           hover:border-primary-200 hover:-translate-y-0.5"
  >
    <div class="p-4">
      <div class="flex items-start space-x-3">
        <!-- 网站图标 -->
        <div class="relative">
          <div class="w-12 h-12 rounded-lg bg-gray-50/80 p-2.5 
                      group-hover:scale-110 transition-transform duration-300
                      overflow-hidden">
            <img 
              :src="item.icon || '/default-icon.svg'" 
              :alt="item.title"
              class="w-full h-full object-contain"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          </div>
        </div>
        
        <!-- 标题和描述 -->
        <div class="flex-1 min-w-0">
          <h3 class="text-dark-600 font-medium mb-1 truncate 
                     group-hover:text-primary-600 transition-colors duration-300">
            {{ item.title }}
          </h3>
          <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
      
      <!-- 标签区域 -->
      <div class="mt-3 flex flex-wrap gap-2" v-if="item.tags && item.tags.length">
        <span 
          v-for="tag in item.tags" 
          :key="tag"
          class="px-2.5 py-1 rounded-md text-xs bg-gray-50/80 text-gray-600
                 border border-gray-100/80 backdrop-blur-sm"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'NavCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* 可根据需要添加额外样式 */
</style> 