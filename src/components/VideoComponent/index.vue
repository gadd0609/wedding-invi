<template>
  <div class="bg-green-custom py-24 sm:py-32 min-h-screen w-full flex flex-col justify-center rounded-t-3xl">
    <div class="relative mx-auto max-w-4xl flex flex-col items-center">
      <iframe
          class="w-72 h-[500px] sm:w-96 sm:h-[600px] rounded-xl shadow-lg"
          src="https://youtube.com/shorts/UQKh7SjgAG8?si=CIIhkovUhMgrS3ay"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoComponent'
}
</script>
