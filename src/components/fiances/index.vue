<template>
  <div class="bg-brown-custom ">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-5xl sm:text-6xl text-center font-bold text-beige mb-4 drop-shadow-lg">
        Los novios
      </h2>
      <div class="relative max-w-4xl mx-auto">
        <div class="overflow-hidden rounded-2xl bg-gray-100">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(photo, index) in photos" 
              :key="index"
              class="w-full flex-shrink-0"
            >
              <img 
                :src="photo.src" 
                :alt="photo.alt"
                class="w-full h-96 sm:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        <button 
          @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          :disabled="currentIndex === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          :disabled="currentIndex === photos.length - 1"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === photos.length - 1 }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(photo, index) in photos"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-200"
            :class="index === currentIndex ? 'bg-blue-custom' : 'bg-gray-300 hover:bg-gray-400'"
          ></button>
        </div>

        <div class="text-center mt-4 text-gray-600">
          {{ currentIndex + 1 }} / {{ photos.length }}
        </div>
      </div>

      <div class="mt-8 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-6 gap-2 max-w-4xl mx-auto">
        <button
          v-for="(photo, index) in photos"
          :key="index"
          @click="goToSlide(index)"
          class="aspect-square rounded-lg overflow-hidden transition-all duration-200 hover:scale-105"
          :class="index === currentIndex ? 'ring-2 ring-blue-custom' : 'opacity-60 hover:opacity-100'"
        >
          <img 
            :src="photo.src" 
            :alt="photo.alt"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import setup from './hook.js'

export default {
  name: 'FiancesComponent',
  setup
}
</script>