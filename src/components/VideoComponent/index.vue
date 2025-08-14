<template>
  <div class="bg-blue-custom py-24 sm:py-32">
    <div class="relative mx-auto max-w-4xl flex flex-col items-center">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/UQKh7SjgAG8?si=m0SKm2W5pJbBSeTB&amp;start=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoComponent'
}
</script>
