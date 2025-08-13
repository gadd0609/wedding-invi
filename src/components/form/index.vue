<template>
  <div class="min-h-screen bg-beige to-gray-800 flex items-center justify-center p-4">
    <div class="bg-beige rounded-lg shadow-2xl max-w-lg w-full p-8 text-center">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-blue-custom mb-6 tracking-wide">
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
            class="w-full border-b-2 border-gray-400 bg-transparent pb-2 focus:border-blue-custom focus:outline-none transition-colors duration-300" 
          />
        </div>

                <!-- Attendance Radio Buttons -->
        <div class="text-left">
          <label class="block text-gray-700 font-semibold mb-3">
            ¿Podrás asistir? 
          </label>
          <div class="flex gap-8">
            <label class="flex items-center cursor-pointer">
              <input 
                id="attendance"
                type="radio" 
                name="attendance" 
                value="yes" 
                required
                class="w-5 h-5 text-blue-custom bg-transparent border-2 border-gray-400 focus:ring-blue-custom focus:ring-2 mr-3" 
              />
              <span class="text-gray-700 text-lg">Sí</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input 
                id="attendance"
                type="radio" 
                name="attendance" 
                value="no"
                class="w-5 h-5 text-blue-custom bg-transparent border-2 border-gray-400 focus:ring-blue-custom focus:ring-2 mr-3" 
              />
              <span class="text-gray-700 text-lg">No</span>
            </label>
          </div>
        </div>

        <!-- Number of guests -->
        <div class="text-left">
          <label class="block text-gray-700 font-semibold mb-3">
            Número de invitados
          </label>
          <input 
            type="text" 
            name="guests" 
            id="guests" 
            autocomplete="family-name"
            class="w-full border-b-2 border-gray-400 bg-transparent pb-2 focus:border-blue-custom focus:outline-none transition-colors duration-300" 
          />
        </div>

        <!-- Submit Button -->
        <div class="pt-6">
          <button 
            type="submit" 
            class="w-full bg-blue-custom text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 text-lg"
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
  name: 'FormComponent'
}
</script>

<style scoped>
/* Custom radio button styling */
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="radio"]:checked {
  background-color: var(--blue-custom, #3b82f6);
  border-color: var(--blue-custom, #3b82f6);
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