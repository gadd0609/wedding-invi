<template>
  <div class="bg-brown-custom  rounded-t-2xl">
    <div class="mx-auto max-w-2xl px-8 py-16 sm:px-8 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-3xl sm:text-6xl text-center font-bold text-beige mb-4 drop-shadow-lg">
        LOS NOVIOS
      </h2>
      <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="rounded-xl overflow-hidden shadow-lg bg-gray-100 hover:scale-105 transition-transform duration-200"
        >
          <img 
            :src="photo.src" 
            :alt="photo.alt"
            class="w-full h-48 sm:h-56 md:h-64 object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="relative max-w-4xl mx-auto sm:py-16 shadow-2xl">
    <img 
      src="/photos/DSC03155.jpg" 
      alt="photo.alt"
      class="w-full object-cover overflow-hidden sm:rounded-2xl bg-gray-100"
    />
    <img 
      src="/logoWhite.svg" 
      alt="logo"
      class="absolute inset-0 m-auto w-32 h-32"
    />
  </div>
</template>

<script>
import setup from './hook.js'

export default {
  name: 'FiancesComponent',
  setup
}
</script>