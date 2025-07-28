<template>
	<div class="min-h-screen flex flex-col relative">
		<!-- 背景图层 -->
		<div class="fixed inset-0 z-0">
			<img 
				src="/images/sea.png" 
				alt="" 
				class="w-full h-full object-cover opacity-70 dark:opacity-40"
			/>
			<div class="absolute inset-0 bg-white/40 dark:bg-dark-900/60 backdrop-blur-[2px]"></div>
		</div>

		<!-- 主要内容 -->
		<div class="relative z-20 flex flex-col min-h-screen">
			<TheHeader />
			
			<!-- 海报展示区域 -->
			<div class="mx-auto mt-8 mb-6 px-4">
				<div class="relative">
					<!-- 装饰性背景 -->
					<div class="absolute -inset-6 bg-gradient-to-r from-primary-500/10 to-gold-500/10 
								rounded-3xl blur-xl"></div>
					
					<!-- 海报容器 -->
					<div class="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl">
						<!-- 海报1 -->
						<div class="relative max-w-[320px] md:max-w-[280px] xl:max-w-[300px] mx-auto group">
							<div class="relative rounded-2xl overflow-hidden
										border-4 border-white/20 dark:border-white/10 
										shadow-[0_0_25px_rgba(255,255,255,0.15)]
										dark:shadow-[0_0_25px_rgba(255,255,255,0.08)]
										bg-white/5 backdrop-blur-sm
										transform transition-all duration-500
										hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
										hover:border-primary-400/40">
								<img 
									src="/images/poster1.webp" 
									alt="海报1" 
									class="w-full aspect-[1104/1472] object-cover"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent
											opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
							<!-- 装饰角落 -->
							<div class="absolute -top-1.5 -left-1.5 w-6 h-6 
										border-t-[3px] border-l-[3px] border-primary-500/60
										group-hover:border-primary-500/90 transition-colors duration-300"></div>
							<div class="absolute -top-1.5 -right-1.5 w-6 h-6 
										border-t-[3px] border-r-[3px] border-primary-500/60
										group-hover:border-primary-500/90 transition-colors duration-300"></div>
							<div class="absolute -bottom-1.5 -left-1.5 w-6 h-6 
										border-b-[3px] border-l-[3px] border-primary-500/60
										group-hover:border-primary-500/90 transition-colors duration-300"></div>
							<div class="absolute -bottom-1.5 -right-1.5 w-6 h-6 
										border-b-[3px] border-r-[3px] border-primary-500/60
										group-hover:border-primary-500/90 transition-colors duration-300"></div>
						</div>

						<!-- 海报2 -->
						<div class="relative max-w-[320px] md:max-w-[280px] xl:max-w-[300px] mx-auto group">
							<div class="relative rounded-2xl overflow-hidden
										border-4 border-white/20 dark:border-white/10 
										shadow-[0_0_25px_rgba(255,255,255,0.15)]
										dark:shadow-[0_0_25px_rgba(255,255,255,0.08)]
										bg-white/5 backdrop-blur-sm
										transform transition-all duration-500
										hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
										hover:border-gold-400/40">
								<img 
									src="/images/poster2.webp" 
									alt="海报2" 
									class="w-full aspect-[1104/1472] object-cover"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent
											opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
							<!-- 装饰角落 -->
							<div class="absolute -top-1.5 -left-1.5 w-6 h-6 
										border-t-[3px] border-l-[3px] border-gold-500/60
										group-hover:border-gold-500/90 transition-colors duration-300"></div>
							<div class="absolute -top-1.5 -right-1.5 w-6 h-6 
										border-t-[3px] border-r-[3px] border-gold-500/60
										group-hover:border-gold-500/90 transition-colors duration-300"></div>
							<div class="absolute -bottom-1.5 -left-1.5 w-6 h-6 
										border-b-[3px] border-l-[3px] border-gold-500/60
										group-hover:border-gold-500/90 transition-colors duration-300"></div>
							<div class="absolute -bottom-1.5 -right-1.5 w-6 h-6 
										border-b-[3px] border-r-[3px] border-gold-500/60
										group-hover:border-gold-500/90 transition-colors duration-300"></div>
						</div>

						<!-- 海报3 -->
						<div class="relative max-w-[320px] md:max-w-[280px] xl:max-w-[300px] 
									md:col-span-2 xl:col-span-1 md:mx-auto xl:mx-0 group">
							<div class="relative rounded-2xl overflow-hidden
										border-4 border-white/20 dark:border-white/10 
										shadow-[0_0_25px_rgba(255,255,255,0.15)]
										dark:shadow-[0_0_25px_rgba(255,255,255,0.08)]
										bg-white/5 backdrop-blur-sm
										transform transition-all duration-500
										hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
										hover:border-primary-400/40">
								<img 
									src="/images/poster3.webp" 
									alt="海报3" 
									class="w-full aspect-[1104/1472] object-cover"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent
											opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
							<!-- 装饰角落 -->
							<div class="absolute -top-1.5 -left-1.5 w-6 h-6 
										border-t-[3px] border-l-[3px] border-primary-500/60
										group-hover:border-primary-500/90 transition-colors duration-300"></div>
							<div class="absolute -top-1.5 -right-1.5 w-6 h-6 
										border-t-[3px] border-r-[3px] border-primary-500/60
										group-hover:border-primary-500/90 transition-colors duration-300"></div>
							<div class="absolute -bottom-1.5 -left-1.5 w-6 h-6 
										border-b-[3px] border-l-[3px] border-primary-500/60
										group-hover:border-primary-500/90 transition-colors duration-300"></div>
							<div class="absolute -bottom-1.5 -right-1.5 w-6 h-6 
										border-b-[3px] border-r-[3px] border-primary-500/60
										group-hover:border-primary-500/90 transition-colors duration-300"></div>
						</div>
					</div>
				</div>
			</div>

			<!-- 立绘肖像展示区域 -->
			<div class="mx-auto mb-8 px-4">
				<div class="relative flex justify-center">
					<!-- 装饰性光晕背景 -->
					<div class="absolute -inset-8 bg-gradient-to-r from-primary-600/20 via-gold-500/20 to-primary-600/20 
								rounded-full blur-2xl animate-pulse"></div>
					
					<!-- 立绘容器 -->
					<div class="relative group">
						<!-- 外层装饰环 -->
						<div class="absolute -inset-6 border-2 border-primary-400/30
									rounded-2xl rotate-1 group-hover:rotate-2 transition-transform duration-700
									shadow-[0_0_30px_rgba(139,92,246,0.3)]"></div>
						<div class="absolute -inset-4 border-2 border-gold-400/40
									rounded-2xl -rotate-1 group-hover:-rotate-2 transition-transform duration-700
									shadow-[0_0_20px_rgba(219,165,32,0.3)]"></div>
						
						<!-- 主相框 -->
						<div class="relative rounded-xl overflow-hidden
									border-4 border-white/40 dark:border-white/20 
									shadow-[0_0_25px_rgba(255,255,255,0.3)]
									dark:shadow-[0_0_25px_rgba(255,255,255,0.15)]
									bg-white/10 backdrop-blur-md
									transform transition-all duration-500
									group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]
									animate-float">
							<img 
								:src="randomPortrait" 
								alt="立绘肖像" 
								class="w-[280px] h-[420px] object-contain
									   group-hover:brightness-110 transition-all duration-300"
							/>
							<!-- 渐变遮罩 -->
							<div class="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-gold-500/5
										opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
						</div>
						
						<!-- 华丽装饰角落 -->
						<div class="absolute -top-2 -left-2 w-8 h-8 
									border-t-[4px] border-l-[4px] border-primary-400/70
									group-hover:border-primary-300 transition-all duration-300">
							<div class="absolute -top-1 -left-1 w-3 h-3
									   border-t-2 border-l-2 border-gold-400/60"></div>
						</div>
						<div class="absolute -top-2 -right-2 w-8 h-8 
									border-t-[4px] border-r-[4px] border-primary-400/70
									group-hover:border-primary-300 transition-all duration-300">
							<div class="absolute -top-1 -right-1 w-3 h-3
									   border-t-2 border-r-2 border-gold-400/60"></div>
						</div>
						<div class="absolute -bottom-2 -left-2 w-8 h-8 
									border-b-[4px] border-l-[4px] border-gold-400/70
									group-hover:border-gold-300 transition-all duration-300">
							<div class="absolute -bottom-1 -left-1 w-3 h-3
									   border-b-2 border-l-2 border-primary-400/60"></div>
						</div>
						<div class="absolute -bottom-2 -right-2 w-8 h-8 
									border-b-[4px] border-r-[4px] border-gold-400/70
									group-hover:border-gold-300 transition-all duration-300">
							<div class="absolute -bottom-1 -right-1 w-3 h-3
									   border-b-2 border-r-2 border-primary-400/60"></div>
						</div>
					</div>
				</div>
			</div>

			<main class="flex-1 container mx-auto px-4 py-8">
				<!-- Container for ISSTracker and MusicPlayer -->
				<div class="flex flex-wrap justify-center gap-6 mb-6">
					<ISSTracker />
					<MusicPlayer />
				</div>

				<CategorySection />
			</main>
			<footer class="bg-gray-100/80 dark:bg-dark-700/80 backdrop-blur-sm py-6 w-full mt-auto">
				<div class="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
					<p>© {{ new Date().getFullYear() }} 旅路罗盘. All rights reserved.</p>
				</div>
			</footer>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import CategorySection from './components/CategorySection.vue'
import ISSTracker from './components/ISSTracker.vue'
import MusicPlayer from './components/MusicPlayer.vue'

// 定义可选的立绘图片数组
const portraitImages = [
	'./images/portrait1.png',
	'./images/portrait2.png',
	'./images/portrait3.png'
]

// 随机选择一个立绘肖像
const randomPortrait = computed(() => {
	return portraitImages[Math.floor(Math.random() * portraitImages.length)]
})
</script>

<style scoped>
</style> 