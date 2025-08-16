<template>
  <div class="bg-beige py-24 sm:py-32 min-h-screen w-full flex flex-col justify-center">
    <div class="relative mx-auto max-w-4xl flex flex-col">
      <img 
        class="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-40" 
        src="/public/flowerLeft.svg" 
        alt="Flor izquierda"
      >
      <img 
        class="absolute right-0 bottom-0 w-32 sm:w-40" 
        src="/public/flowerRight.svg" 
        alt="Flor derecha"
      >
      <div class="flex flex-col items-center z-10">
        <img 
          class="w-40 sm:w-52 mb-6" 
          src="/public/logo.svg" 
          alt="Logo"
        >
      </div>
      <div class="mt-8 text-center">
        <h1 class="text-2xl sm:text-3xl text-green-custom tracking-widest mb-2">
          25 DE NOVIEMBRE 2025
        </h1>
        <h1 class="text-xl sm:text-2xl text-brown-custom">
          Cuauhtémoc, Colima, Mex
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeComponent'
}
</script>