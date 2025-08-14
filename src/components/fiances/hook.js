import { ref, onMounted } from 'vue'

export default function useCarousel() {
  const currentIndex = ref(0)
  
  const photos = ref([
    { src: 'public/photos/DSC03086.jpg', alt: 'Foto de los novios 1' },
    { src: 'public/photos/DSC03268.jpg', alt: 'Foto de los novios 2' },
    { src: 'public/photos/DSC03134.jpg', alt: 'Foto de los novios 3' },
    { src: 'public/photos/DSC03203.jpg', alt: 'Foto de los novios 4' },
    { src: 'public/photos/DSC03251.jpg', alt: 'Foto de los novios 5' },
    { src: 'public/photos/DSC03159.jpg', alt: 'Foto de los novios 6' },
  ])

  const nextSlide = () => {
    if (currentIndex.value < photos.value.length - 1) {
      currentIndex.value++
    }
  }

  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  const goToSlide = (index) => {
    currentIndex.value = index
  }

  return {
    currentIndex,
    photos,
    nextSlide,
    prevSlide,
    goToSlide
  }
}