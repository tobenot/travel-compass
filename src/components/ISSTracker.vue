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
       @click="toggleLinks"
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
        <p class="text-sm text-gray-600 dark:text-blue-100/90 flex justify-between">
          <span class="font-medium">所在区域:</span>
          <span class="font-mono">{{ region.location }}</span>
        </p>
      </div>
      
      <!-- 更新时间 -->
      <p class="text-xs text-gray-500 dark:text-blue-200/60 mt-3 text-right font-mono">
        更新时间: {{ new Date(issData.timestamp * 1000).toLocaleString() }}
      </p>
      
      <!-- 新增：点击时显示链接 -->
      <div v-if="showLinks" class="mt-2 p-2 bg-white/50 dark:bg-slate-900/50 rounded-lg border border-blue-100 dark:border-blue-500/20">
        <ul class="space-y-1">
          <li>
            <a href="https://www.youtube.com/watch?v=OCem0E-0Q6Y" target="_blank" class="text-blue-500 hover:underline">
              空间站直播
            </a>
          </li>
          <li>
            <a href="https://zh.wikipedia.org/wiki/国际空间站" target="_blank" class="text-blue-500 hover:underline">
              国际空间站 - 维基百科
            </a>
          </li>
          <li>
            <a href="https://www.nasa.gov/international-space-station/" target="_blank" class="text-blue-500 hover:underline">
              NASA 国际空间站
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="text-sm text-gray-500 dark:text-blue-100/60 animate-pulse">
      正在建立连接...
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const issData = ref(null)
const isAnimationPaused = ref(false)
const showLinks = ref(false)
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

const toggleLinks = () => {
  showLinks.value = !showLinks.value
}

// 新增：根据经纬度简单判断半球以及所在区域（大陆或海洋）和详细位置（粗略估计）
const region = computed(() => {
  if (!issData.value) return { hemispheres: '未知', location: '未知位置' }
  const { latitude, longitude } = issData.value;
  
  // 判断半球
  const hemispheresArr = [];
  hemispheresArr.push(latitude >= 0 ? '北半球' : '南半球');
  hemispheresArr.push(longitude >= 0 ? '东半球' : '西半球');
  const hemispheres = hemispheresArr.join(' ');
  
  let areaType = '', areaName = '', areaDetail = '';
  
  // 判断大陆区域（粗略）
  if (latitude >= 15 && latitude <= 70 && longitude >= -30 && longitude <= 60) {
    areaType = '大陆';
    areaName = '欧洲';
    areaDetail = longitude < 15 ? '西部' : '东部';
  } else if (latitude >= 10 && latitude <= 70 && longitude < -30) {
    areaType = '大陆';
    areaName = '北美洲';
    areaDetail = longitude < -100 ? '西部' : '东部';
  } else if (latitude < 15 && longitude < -30) {
    areaType = '大陆';
    areaName = '南美洲';
    areaDetail = longitude < -60 ? '西部' : '东部';
  } else if (latitude >= -35 && latitude <= 40 && longitude >= -20 && longitude <= 55) {
    areaType = '大陆';
    areaName = '非洲';
    areaDetail = longitude < 15 ? '西部' : '东部';
  } else if (latitude >= 10 && longitude >= 55 && longitude <= 180) {
    areaType = '大陆';
    areaName = '亚洲';
    areaDetail = longitude < 100 ? '西部' : '东部';
  } else if (latitude < 0 && (longitude > 110 || longitude < -110)) {
    areaType = '大陆';
    areaName = '大洋洲';
    areaDetail = longitude < 150 ? '西部' : '东部';
  } else {
    // 未匹配到大陆，则归为海洋，并判断海洋类型和区域（仅为粗略估计）
    areaType = '海洋';
    if (latitude > 66) {
      areaName = '北冰洋';
    } else if (latitude < -60) {
      areaName = '南冰洋';
    } else if (longitude >= -70 && longitude <= 20) {
      areaName = '大西洋';
      areaDetail = longitude < -25 ? '西部' : '东部';
    } else if (longitude > 20 && longitude < 120) {
      areaName = '印度洋';
      areaDetail = longitude < 80 ? '西部' : '东部';
    } else {
      areaName = '太平洋';
      if (longitude >= 120 || longitude <= -70) {
        areaDetail = (longitude >= 120) ? '东部' : '西部';
      }
    }
  }
  
  const location = areaDetail ? `${areaName}（${areaDetail}）` : areaName;
  
  return {
    hemispheres,
    location
  };
})

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