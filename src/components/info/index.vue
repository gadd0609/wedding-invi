<template>
  <div class="bg-beige text-center p-6 sm:p-12 rounded-t-3xl shadow-2xl">
    <div class="mt-8 mb-8">
      <h1 class="text-3xl mb-4 text-brown-custom sm:text-5xl text-beige">
        LOS NOVIOS
      </h1>
      <h1 class="text-2xl text-brown-custom sm:text-4xl text-beige">
        Gaddiel Alejandro Patiño Morfín
      </h1>
      <h1 class="text-2xl text-brown-custom sm:text-4xl text-beige">
        &
      </h1>
      <h1 class="text-2xl text-brown-custom sm:text-4xl text-beige">
        Fernanda Valeria Peralta Ramírez
      </h1>
    </div>
    <div class="justify-self-center">
      <img 
        class="sm:w-32 w-32 mx-auto" 
        src="/public/flowerRight.svg" 
        alt="Flor derecha"
      >
    </div>
    <div>
      <h1 class="text-3xl mb-4 text-brown-custom sm:text-5xl text-beige">
        PADRES DE LA NOVIA
      </h1>
      <h1 class="text-2xl text-brown-custom sm:text-4xl text-beige">
        Fernando Manuel Peralta Castro
      </h1>
      <h1 class="text-2xl text-brown-custom sm:text-4xl text-beige">
        &
      </h1>
      <h1 class="text-2xl text-brown-custom sm:text-4xl text-beige">
        Claudia Yolanda Ramírez Sánchez
      </h1>
    </div>
    <div class="justify-self-center mt-4">
      <img 
        class="sm:w-32 w-32 mx-auto" 
        src="/public/flowerRight.svg" 
        alt="Flor derecha"
      >
    </div>
    <div>
      <h1 class="text-3xl mb-4 text-brown-custom sm:text-5xl text-beige">
        PADRES DEL NOVIO
      </h1>
      <h1 class="text-2xl text-brown-custom sm:text-4xl text-beige">
        Enrique Alejandro Patiño Hernández
      </h1>
      <h1 class="text-2xl text-brown-custom sm:text-4xl text-beige">
        &
      </h1>
      <h1 class="text-2xl text-brown-custom sm:text-4xl text-beige">
        Claudia Morfin Lepe
      </h1>
    </div>
    <div class="justify-self-center mt-8">
      <img 
        class="sm:w-32 w-32 mx-auto" 
        src="/public/flowerRight.svg" 
        alt="Flor derecha"
      >
    </div>
    <div>
      <h1 class="text-3xl text-brown-custom sm:text-5xl text-beige">
        "Todo lo hizo hermoso en su tiempo."
      </h1>
      <h1 class="text-xl mb-8 text-brown-custom sm:text-3xl text-beige">
        - Eclesiastes 3:11
      </h1>
    </div>
    <div class="my-16">
      <h1 class="text-3xl my-8 text-green-custom sm:text-5xl text-beige text-center">
        ITINERARIO
      </h1>
      <div class="grid grid-cols-3"> 
        <div class="justify-self-center mt-">
           <img 
            class="sm:w-36" 
            src="/flowersLarge.svg" 
            alt="Flor derecha"
          >
        </div>
        <div>
          <h1 class="text-xl text-green-custom sm:text-3xl text-beige text-center">
           CEREMONIA
          </h1>
          <h1 class="text-xl mb-8 text-brown-custom sm:text-3xl text-beige text-center">
            5:00 PM <font-awesome-icon icon="fa-solid fa-clock" /> 
          </h1>
          <h1 class="text-xl mt-8 text-green-custom sm:text-3xl text-beige text-center">
           UBICACIÓN
          </h1>
          <h1 class="text-xl mb-8 text-brown-custom sm:text-3xl text-beige text-center">
           Hacienda de chiapa
          </h1>
          <h1 class="text-center">
            <a
              href="https://maps.app.goo.gl/6moEQD4drjwVnWr4A"
              target="_blank"
              rel="noopener"
              class="rounded-md border border-brown-custom my-5 px-5 py-2.5 text-md font-semibold text-brown-custom shadow-xs hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style="justify-content: center;"
            >
              Ir al mapa
            </a> 
          </h1>
          <h1 class="text-xl mt-8 text-green-custom sm:text-3xl text-beige text-center">
           RECEPCIÓN
          </h1>
          <h1 class="text-xl text-brown-custom mb-8 sm:text-3xl text-beige text-center">
           6:00 PM
          </h1>
          <h1 class="text-xl text-green-custom sm:text-3xl text-beige text-center">
           VESTIMENTA
          </h1>
          <h1 class="text-xl text-brown-custom sm:text-3xl text-beige text-center">
           Garden party formal
          </h1>
          <div class="flex justify-center mt-4">
            <button
              @click="showDressCodeModal = true"
              class="rounded-md border border-brown-custom px-5 py-2.5 text-md font-semibold text-brown-custom shadow-xs hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
            >
              Ejemplos
            </button>
          </div>
          <transition name="fade">
            <div 
              v-if="showDressCodeModal" 
              class="px-8 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            >
              <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative mx-2">
                <button 
                  @click="showDressCodeModal = false" 
                  class="absolute top-2 right-5 text-3xl text-brown-custom"
                >&times;
                </button>
                <h2 
                  class="text-xl font-bold mb-4 text-brown-custom"
                >
                  Ejemplos de Dress Code
                </h2>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <img 
                    src="/gradenPartyMale.jpeg" 
                    alt="Ejemplo 1" 
                    class="rounded-lg w-40 h-56 object-cover border border-brown-custom" 
                  />
                  <img 
                    src="/gardenPartyFemale.jpg" 
                    alt="Ejemplo 2" 
                    class="rounded-lg w-40 h-56 object-cover border border-brown-custom" 
                  />
                </div>
              </div>
            </div>
          </transition>
          <div class=" mt-8">
            <img 
              class="sm:w-32 w-32 bg-beige" 
              src="/haciendaLogo.svg" 
              alt="Hacienda Logo"
            >
          </div>
        </div>
        <div class="justify-self-center mt-">
           <img 
            class="sm:w-36" 
            src="/flowerLargeRight.svg" 
            alt="Flor derecha"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoComponent',
  data() {
    return {
      showDressCodeModal: false
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>