<template>
  <div class="min-h-screen bg-green-custom to-gray-800 flex items-center justify-center p-8">
    <div class="bg-beige rounded-lg shadow-2xl max-w-lg w-full p-8 text-center">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-green-custom mb-6 tracking-wide">
          RSVP
        </h1>
        <p class="text-gray-700 text-lg leading-relaxed mb-2">
          ¡Queremos compartir este momento tan esperado contigo!
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          Por favor ayúdanos confirmando tu asistencia.
        </p>
      </div>

      <!-- Form -->
      <form 
        name="rsvp"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="space-y-6"
      >
        <input type="hidden" name="form-name" value="rsvp" />
        
        <!-- Honeypot field -->
        <div class="hidden">
          <input name="bot-field" />
        </div>

        <!-- Name -->
        <div class="text-left">
          <label class="block text-gray-700 font-semibold mb-3">
            Nombre completo
          </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required
            autocomplete="given-name"
            class="w-full border-b-2 border-green-custom bg-transparent pb-2 focus:border-brown-custom focus:outline-none transition-colors duration-300" 
          />
        </div>
        <div class="text-left">
          <label class="block text-gray-700 font-semibold mb-3">
            ¿Podrás asistir? 
          </label>
          <div class="flex gap-8">
            <label class="flex items-center cursor-pointer">
              <input 
                id="yes"
                type="radio" 
                name="attendance" 
                value="yes" 
                required
                class="w-5 h-5 text-green-custom bg-transparent border-2 border-green-custom focus:ring-green-custom focus:ring-2 mr-3" 
              />
              <span class="text-gray-700 text-lg">Sí</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input 
                id="no"
                type="radio" 
                name="attendance" 
                value="no"
                class="w-5 h-5 text-green-custom bg-transparent border-2 border-green-custom focus:ring-green-custom focus:ring-2 mr-3" 
              />
              <span class="text-gray-700 text-lg">No</span>
            </label>
          </div>
        </div>
        <div class="text-left">
          <label class="block text-gray-700 font-semibold mb-3">
            Número de invitados
          </label>
          <input 
            type="number" 
            name="guests" 
            id="guests" 
            required
            min="1"
            max="4"
            v-model.number="guests"
            autocomplete="family-name"
            class="w-full border-b-2 border-green-custom bg-transparent pb-2 focus:border-brown-custom focus:outline-none transition-colors duration-300" 
          />
          <h1
            v-if="guests !== null && (guests < 1 || guests > 4)" 
            class="text-red-600 text-sm mt-2"
          >
            Solo puedes ingresar entre 1 y 4 invitados.
        </h1>
        </div>
        <div>
          <h1 class="text-sm text-green-custom font-bold">
            Por favor confirmar el nombre de asistentes colocando el nombre de cada uno de ellos, a más tardar el 30 de septiembre
          </h1>
        </div>
        <div class="pt-6">
          <button 
            type="submit" 
            class="w-full bg-green-custom text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 text-lg"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      guests: null
    }
  }
}
</script>

<style scoped>
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="radio"]:checked {
  background-color: var(--green-custom);
  border-color: (--green-custom);
  position: relative;
}

input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
}

/* Input focus effects */
input:focus {
  outline: none;
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}
</style>