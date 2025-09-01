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

        <!-- Nombres de invitados -->
        <div class="text-left">
          <label class="block text-gray-700 font-semibold mb-3">
            Nombre(s) de invitado(s)
          </label>
          <div class="space-y-3">
            <div v-for="(guest, idx) in guests" :key="idx" class="flex items-center gap-2">
              <input
                type="text"
                name="name"
                required
                v-model="guests[idx]"
                :placeholder="`Nombre del invitado ${idx+1}`"
                class="w-full border-b-2 border-green-custom bg-transparent pb-2 focus:border-brown-custom focus:outline-none transition-colors duration-300"
                maxlength="60"
              />
              <button
                v-if="guests.length > 1"
                type="button"
                @click="removeGuest(idx)"
                class="text-red-400 hover:text-red-600 text-xl font-bold px-2"
                aria-label="Eliminar invitado"
                title="Eliminar invitado"
              >×</button>
            </div>
          </div>
          <button
            v-if="guests.length < 5"
            type="button"
            @click="addGuest"
            class="text-green-custom text-sm mt-2 hover:underline focus:outline-none"
          >
            + Agregar otro invitado
          </button>
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
      guests: ['']
    }
  },
  methods: {
    addGuest() {
      if (this.guests.length < 5) {
        this.guests.push('');
      }
    },
    removeGuest(idx) {
      if (this.guests.length > 1) {
        this.guests.splice(idx, 1);
      }
    }
  }
}
</script>