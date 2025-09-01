<template>
  <div class="bg-brown-custom rounded-t-2xl min-h-screen w-full flex flex-col justify-center">
    <div class="mx-auto max-w-2xl px-8 py-16 sm:px-8 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-3xl sm:text-6xl text-center font-bold text-beige mb-4 drop-shadow-lg">
        GADDIEL & FERNANDA
      </h2>
      <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="rounded-xl overflow-hidden shadow-lg bg-gray-100 hover:scale-105 transition-transform duration-200 cursor-pointer"
          @click="openDialog(photo)"
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
  <div class="relative mx-auto">
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

  <div
    v-if="showDialog"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-10"
    @click.self="closeDialog"
  >
    <div class="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-5 relative">
      <button
        class="absolute top-1 right-2 text-2xl text-gray-500 hover:text-red-500"
        @click="closeDialog"
        aria-label="Cerrar"
      >×</button>
      <img
        :src="selectedPhoto.src"
        :alt="selectedPhoto.alt"
        class="w-full max-h-[70vh] object-contain rounded"
      />
      <p class="mt-2 text-center text-brown-custom font-semibold">{{ selectedPhoto.alt }}</p>
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