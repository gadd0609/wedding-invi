<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="relative mx-auto max-w-4xl flex flex-col items-center">
      <video controls width="640">
        <source 
          src="https://drive.google.com/drive/shared-with-me?hl=es" 
          type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoComponent'
}
</script>
