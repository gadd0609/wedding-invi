<template>
  <form 
  name="rsvp"
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
<input type="hidden" name="form-name" value="rsvp" />
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">RSVP</h2>
      <p class="mt-1 text-sm/6 text-gray-600">¡Queremos compartir este momento tan esperado contigo!Por favor ayúdanos confirmando tu asistencia.</p>
    </div>
  
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">Tus datos</h2>
      <p class="mt-1 text-sm/6 text-gray-600">Por favor contesta el siguiente formulario.</p>
  
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="name" class="block text-sm/6 font-medium text-gray-900">Nombre completo </label>
          <div class="mt-2">
            <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
  
        <div class="sm:col-span-3">
          <label for="guests" class="block text-sm/6 font-medium text-gray-900">numero de invitados</label>
          <div class="mt-2">
            <input type="text" name="guests" id="guests" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
  
        <div class="sm:col-span-4">
          <label for="number" class="block text-sm/6 font-medium text-gray-900">whatsapp</label>
          <div class="mt-2">
            <input id="number" name="number" type="number" autocomplete="number" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
 
      </div>
    </div>
  
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">Notificaciones</h2>
      <p class="mt-1 text-sm/6 text-gray-600">En caso de cualquier cambio o imprevisto, estaremos dando nuevas indicaciones por el WhatsApp registrado.</p>
  
      <div class="mt-10 space-y-10">

  
        <fieldset>
          <legend class="text-sm/6 font-semibold text-gray-900">Asistencia</legend>
          <p class="mt-1 text-sm/6 text-gray-600">Confírmanos si formarás parte de nuestra boda</p>
          <div class="mt-6 space-y-6">
            <div class="flex items-center gap-x-3">
              <input 
                id="yes" 
                name="yes" 
                type="radio" checked="" 
                class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
              <label for="push-everything" class="block text-sm/6 font-medium text-gray-900">Si</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="no"
                name="no"
                type="radio"
                class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
              <label for="push-email" class="block text-sm/6 font-medium text-gray-900">No</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
  </div>
  </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'FormComponent'
  }
  </script>