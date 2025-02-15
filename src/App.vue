<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- 顶部导航栏 -->
    <header class="bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 fixed top-0 left-0 right-0 z-10">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="relative w-10 h-10">
              <img src="/logo.svg" alt="Logo" 
                   class="w-full h-full object-contain transform hover:rotate-12 transition-transform duration-500" />
              <div class="absolute inset-0 bg-primary-100 rounded-lg -z-10 animate-pulse"></div>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                旅路罗盘
              </span>
              <span class="text-xs text-gray-400">发现精彩导航</span>
            </div>
          </div>
          
          <!-- 搜索框 -->
          <div class="relative max-w-xl w-full hidden md:block group">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="探索你感兴趣的导航..."
              class="w-full px-5 py-2.5 rounded-full border border-gray-200 
                     bg-gray-50/50 outline-none focus:ring-2 focus:ring-primary-200 
                     focus:border-primary-300 focus:bg-white
                     transition-all duration-300 placeholder:text-gray-400"
            />
            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400
                         group-focus-within:text-primary-500 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- 移动端搜索框 -->
    <div class="md:hidden sticky top-16 z-10 bg-white/80 backdrop-blur-md shadow-sm py-3 px-4">
      <div class="relative">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="搜索..."
          class="w-full px-4 py-2.5 rounded-full border border-gray-200 
                 bg-gray-50/50 outline-none focus:ring-2 focus:ring-primary-200"
        />
        <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>
    </div>

    <!-- 主体内容区 -->
    <main class="flex-1 container mx-auto px-4 pt-24 md:pt-28">
      <section v-for="(category, index) in filteredNavData" 
               :key="index" 
               class="mb-12 animate-slide-up"
               :style="{ animationDelay: `${index * 0.1}s` }">
        <div class="flex items-center space-x-4 mb-6">
          <h2 class="text-lg font-bold text-dark-600 flex items-center space-x-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
            <span>{{ category.name }}</span>
          </h2>
          <div class="h-[1px] flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          <NavCard
            v-for="(item, idx) in category.links"
            :key="idx"
            :item="item"
            :style="{ animationDelay: `${(index * 0.1 + idx * 0.05)}s` }"
          />
        </div>
      </section>
    </main>

    <!-- 页脚区域 -->
    <footer class="bg-white/80 backdrop-blur-md border-t border-gray-100 py-8 mt-auto">
      <div class="container mx-auto px-4 text-center">
        <div class="flex flex-col items-center space-y-2">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8 opacity-50" />
          <p class="text-gray-600">© 2024 旅路罗盘</p>
          <p class="text-sm text-gray-400 flex items-center space-x-2">
            <span>精选导航</span>
            <span class="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>简单易用</span>
            <span class="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>持续更新</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import navData from "./config/navData"; // 从配置文件中导入导航数据
import NavCard from "./components/NavCard.vue"; // 导入卡片组件

export default {
  name: "App",
  components: {
    NavCard,
  },
  data() {
    return {
      // 搜索查询参数，默认值为空
      searchQuery: "",
    };
  },
  computed: {
    // 当 searchQuery 为空时返回全部数据，否则过滤各个分类中的链接
    filteredNavData() {
      if (!this.searchQuery.trim()) {
        return navData;
      }
      const query = this.searchQuery.trim().toLowerCase();
      return navData
        .map(category => {
          const filteredLinks = category.links.filter(item => {
            return (
              item.title.toLowerCase().includes(query) ||
              item.desc.toLowerCase().includes(query)
            );
          });
          return { ...category, links: filteredLinks };
        })
        .filter(category => category.links.length > 0);
    },
  },
};
</script>

<style>
:root {
  --scrollbar-thumb: #E2E8F0;
  --scrollbar-track: #F8FAFC;
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 4px;
  border: 2px solid var(--scrollbar-track);
}

::-webkit-scrollbar-thumb:hover {
  background: #CBD5E1;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}
</style> 