<template>
  <div class="bg-brown-custom flex items-center justify-center rounded-t-3xl">
    <div class="mx-auto max-w-4xl px-8 pt-16 sm:px-8 sm:pt-24 lg:px-8">

      <div class="text-center mb-12">
        <h1 class="text-3xl sm:text-6xl font-bold text-beige mb-4 drop-shadow-lg">
          ¡NOS CASAMOS!
        </h1>
        <p class="text-xl sm:text-2xl text-beige font-medium">
          15 de Noviembre, 2025
        </p>
      </div>

      <div v-if="!isFinished" class="text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold text-beige mb-8 drop-shadow-sm">
          Faltan
        </h2>
        
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8">
          
          <div class="bg-beige rounded-xl shadow-xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 border-2 border-beige/20">
            <div class="text-4xl sm:text-5xl font-bold text-brown-custom mb-2">
              {{ formatNumber(timeLeft.days) }}
            </div>
            <div class="text-lg sm:text-xl text-green-custom font-medium">
              {{ timeLeft.days === 1 ? 'Día' : 'Días' }}
            </div>
          </div>

          <div class="bg-beige rounded-xl shadow-xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 border-2 border-beige/20">
            <div class="text-4xl sm:text-5xl font-bold text-brown-custom mb-2">
              {{ formatNumber(timeLeft.hours) }}
            </div>
            <div class="text-lg sm:text-xl text-green-custom font-medium">
              {{ timeLeft.hours === 1 ? 'Hora' : 'Horas' }}
            </div>
          </div>

          <div class="bg-beige rounded-xl shadow-xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 border-2 border-beige/20">
            <div class="text-4xl sm:text-5xl font-bold text-brown-custom mb-2">
              {{ formatNumber(timeLeft.minutes) }}
            </div>
            <div class="text-lg sm:text-xl text-green-custom font-medium">
              {{ timeLeft.minutes === 1 ? 'Minuto' : 'Minutos' }}
            </div>
          </div>

          <div class="bg-beige rounded-xl shadow-xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 border-2 border-beige/20">
            <div class="text-4xl sm:text-5xl font-bold text-brown-custom mb-2">
              {{ formatNumber(timeLeft.seconds) }}
            </div>
            <div class="text-lg sm:text-xl text-green-custom font-medium">
              {{ timeLeft.seconds === 1 ? 'Segundo' : 'Segundos' }}
            </div>
          </div>

        </div>

        <div class="bg-beige/80 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-lg border border-beige/30">
          <p class="text-lg sm:text-xl text-green-custom italic font-medium">
            "Todo lo hizo hermoso en su tiempo." Eclesiastes 3:11
          </p>
        </div>
      </div>

      <div v-else class="text-center">
        <div class="bg-beige rounded-xl shadow-2xl p-8 sm:p-12 border-2 border-beige/20">
          <h2 class="text-4xl sm:text-5xl font-bold text-brown-custom mb-4">
            ¡Es el gran día!
          </h2>
          <p class="text-xl sm:text-2xl text-green-custom mb-6 font-medium">
            Hoy nos casamos 💍
          </p>
          <div class="text-6xl sm:text-7xl mb-4">
            🎉 ❤️ 🎉
          </div>
          <p class="text-lg sm:text-xl text-brown-custom">
            ¡Que comience nuestra nueva aventura juntos!
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import setup from './hook.js'

export default {
  name: 'CountdownComponent',
  setup
}
</script>