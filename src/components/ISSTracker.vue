<template>
  <div class="fixed bottom-6 right-6 z-50 w-80
              p-5 bg-gradient-to-br from-white/95 to-blue-50/95 dark:from-slate-800/95 dark:to-blue-900/95 
              rounded-2xl backdrop-blur-md
              border border-blue-200 dark:border-blue-500/30
              shadow-[0_0_30px_rgba(59,130,246,0.2)]
              dark:shadow-[0_0_30px_rgba(59,130,246,0.15)]
              animate-float cursor-pointer
              hover:scale-105 hover:-translate-y-1
              overflow-hidden"
       @mouseenter="stopAnimation"
       @mouseleave="startAnimation"
       :style="{ animation: isAnimationPaused ? 'none' : 'float 6s ease-in-out infinite' }">
    
    <!-- 装饰性舱窗 -->
    <div class="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 rounded-full blur-md"></div>
    <div class="absolute right-8 top-8 w-3 h-3 bg-blue-400/30 rounded-full"></div>
    <div class="absolute right-12 top-6 w-2 h-2 bg-blue-400/20 rounded-full"></div>
    
    <!-- 飞船舱门装饰线 -->
    <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0"></div>
    
    <div class="flex items-center space-x-3 mb-4">
      <div class="relative">
        <span class="text-2xl">🛸</span>
        <!-- 脉冲指示灯 -->
        <div class="absolute -right-1 -bottom-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
      <h3 class="text-lg font-medium text-gray-800 dark:text-blue-50">国际空间站位置</h3>
    </div>
    
    <div v-if="issData" class="space-y-2 relative">
      <!-- 数据显示面板 -->
      <div class="space-y-2 bg-white/50 dark:bg-slate-900/50 rounded-lg p-3 
                  border border-blue-100 dark:border-blue-500/20">
        <p class="text-sm text-gray-600 dark:text-blue-100/90 flex justify-between">
          <span class="font-medium">纬度:</span>
          <span class="font-mono">{{ issData.latitude.toFixed(2) }}°</span>
        </p>
        <p class="text-sm text-gray-600 dark:text-blue-100/90 flex justify-between">
          <span class="font-medium">经度:</span>
          <span class="font-mono">{{ issData.longitude.toFixed(2) }}°</span>
        </p>
        <p class="text-sm text-gray-600 dark:text-blue-100/90 flex justify-between">
          <span class="font-medium">高度:</span>
          <span class="font-mono">{{ issData.altitude.toFixed(2) }} km</span>
        </p>
        <p class="text-sm text-gray-600 dark:text-blue-100/90 flex justify-between">
          <span class="font-medium">速度:</span>
          <span class="font-mono">{{ (issData.velocity).toFixed(2) }} km/h</span>
        </p>
      </div>
      
      <!-- 更新时间 -->
      <p class="text-xs text-gray-500 dark:text-blue-200/60 mt-3 text-right font-mono">
        更新时间: {{ new Date(issData.timestamp * 1000).toLocaleString() }}
      </p>
    </div>
    <div v-else class="text-sm text-gray-500 dark:text-blue-100/60 animate-pulse">
      正在建立连接...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const issData = ref(null)
const isAnimationPaused = ref(false)
let timer = null

const fetchISSPosition = async () => {
  try {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    issData.value = await response.json()
  } catch (error) {
    console.error('获取国际空间站数据失败:', error)
  }
}

const stopAnimation = () => {
  isAnimationPaused.value = true
}

const startAnimation = () => {
  isAnimationPaused.value = false
}

onMounted(() => {
  fetchISSPosition()
  timer = setInterval(fetchISSPosition, 30000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style>
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-10px, -10px) rotate(1deg);
  }
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style> 