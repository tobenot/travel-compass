<template>
  <div 
    class="w-full max-w-sm bg-white/70 dark:bg-dark-600/80 backdrop-blur-lg 
           rounded-2xl shadow-lg border border-primary-200 dark:border-primary-900
           transition-all duration-300 p-3"
  >
    <!-- 完整模式 -->
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-medium text-gray-900 dark:text-white truncate flex-1">{{ currentSong.title }}</h3>
        <div class="flex items-center space-x-1">
          <!-- 最小化按钮 -->
        </div>
      </div>

      <!-- 封面和播放进度 -->
      <div class="relative">
        <img :src="currentSong.cover" alt="Album Cover" class="w-full h-40 object-cover rounded-lg shadow-md" />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 rounded-b-lg">
          <p class="text-white text-xs font-medium">{{ currentSong.artist }}</p>
        </div>
      </div>

      <!-- 进度条 -->
      <div class="space-y-1">
        <div class="h-1.5 bg-gray-200 dark:bg-dark-400 rounded-full overflow-hidden">
          <div class="h-full bg-primary-500 rounded-full" :style="`width: ${progress}%`"></div>
        </div>
        <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{{ formatTime(currentTime) }}</span>
          <span>{{ formatTime(duration) }}</span>
        </div>
      </div>

      <!-- 控制按钮 -->
      <div class="flex justify-center items-center space-x-4">
        <button @click="prev" class="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="togglePlay" class="p-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-md hover:shadow-lg">
          <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button @click="next" class="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <!-- 音量控制 -->
      <div class="flex items-center space-x-2 mt-1">
        <button @click="toggleMute" class="p-1 text-gray-600 dark:text-gray-400">
          <svg v-if="isMuted" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
          <svg v-else-if="volume < 0.5" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072" />
          </svg>
        </button>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          v-model="volume" 
          @input="updateVolume"
          class="w-full h-1.5 rounded-full appearance-none bg-gray-200 dark:bg-dark-400 outline-none accent-primary-500" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const minimized = ref(false)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const currentSongIndex = ref(0)
const audio = ref(null)
const volume = ref(0.7)
const isMuted = ref(false)
const previousVolume = ref(0.7)
const autoPlay = ref(true)
const position = ref('left')

// 示例歌曲列表 - 您需要替换为实际的音乐文件
const songs = [
  {
    title: '背景音乐',
    artist: '旅路罗盘',
    src: './music/background.mp3', // 修改为相对路径，与App.vue中图片引用方式一致
    cover: './images/music-cover.svg' // 同样修改为相对路径
  }
  // 您可以添加更多歌曲
]

const currentSong = computed(() => songs[currentSongIndex.value])

const progress = computed(() => {
  if (duration.value === 0) return 0
  return (currentTime.value / duration.value) * 100
})

// 格式化时间（将秒数转换为 mm:ss 格式）
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

// 播放/暂停切换
const togglePlay = () => {
  if (!audio.value) return
  
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }
  
  isPlaying.value = !isPlaying.value
}

// 上一首
const prev = () => {
  currentSongIndex.value = (currentSongIndex.value - 1 + songs.length) % songs.length
  loadSong()
}

// 下一首
const next = () => {
  currentSongIndex.value = (currentSongIndex.value + 1) % songs.length
  loadSong()
}

// 加载歌曲
const loadSong = () => {
  if (!audio.value) return
  
  audio.value.src = currentSong.value.src
  audio.value.load()
  
  if (isPlaying.value) {
    audio.value.play().catch(error => {
      console.error('音乐播放失败:', error)
    })
  }
}

// 更新进度
const updateProgress = () => {
  if (!audio.value) return
  
  currentTime.value = audio.value.currentTime
  duration.value = audio.value.duration
}

// 更新音量
const updateVolume = () => {
  if (!audio.value) return
  
  audio.value.volume = volume.value
  
  if (volume.value > 0 && isMuted.value) {
    isMuted.value = false
  } else if (volume.value === 0 && !isMuted.value) {
    isMuted.value = true
  }
}

// 切换静音
const toggleMute = () => {
  if (!audio.value) return
  
  if (isMuted.value) {
    volume.value = previousVolume.value
    audio.value.volume = volume.value
    isMuted.value = false
  } else {
    previousVolume.value = volume.value
    volume.value = 0
    audio.value.volume = 0
    isMuted.value = true
  }
}

// 监听音量变化
watch(volume, (newVolume) => {
  if (!audio.value) return
  audio.value.volume = newVolume
})

onMounted(() => {
  // 创建音频元素
  audio.value = new Audio()
  audio.value.src = currentSong.value.src
  audio.value.volume = volume.value
  
  // 添加事件监听器
  audio.value.addEventListener('timeupdate', updateProgress)
  audio.value.addEventListener('ended', next)
  audio.value.addEventListener('error', (e) => {
    console.error('音频加载失败:', e)
    alert('背景音乐加载失败，请确保音乐文件已放置在正确位置。')
  })
  audio.value.addEventListener('canplay', () => {
    duration.value = audio.value.duration
    
    // 如果设置了自动播放，则尝试播放
    if (autoPlay.value) {
      // 注意：大多数浏览器的自动播放策略会阻止自动播放，除非用户与页面有交互
      // 因此，我们需要捕获可能的错误
      audio.value.play()
        .then(() => {
          isPlaying.value = true
        })
        .catch(error => {
          console.log('自动播放被阻止：', error)
          isPlaying.value = false
        })
    }
  })
})

onUnmounted(() => {
  // 清理事件监听器
  if (audio.value) {
    audio.value.removeEventListener('timeupdate', updateProgress)
    audio.value.removeEventListener('ended', next)
    audio.value.pause()
    audio.value = null
  }
})
</script>

<style>
/* 自定义滑块样式 */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #8b5cf6;
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #8b5cf6;
  cursor: pointer;
  border: none;
}
</style> 