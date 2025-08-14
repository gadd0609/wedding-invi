import { ref, onMounted } from 'vue'

export default function useCarousel() {
  const currentIndex = ref(0)
  
  const photos = ref([
    { src: 'https://drive.google.com/file/d/1Pvjy4lnj2QSmmaVVxyqcTcZTvF_XdDsP/view?usp=drive_link', alt: 'Foto de los novios 1' },
    { src: '/src/assets/photos/DSC03086.jpg', alt: 'Foto de los novios 2' },
    { src: '/src/assets/photos/DSC03268.jpg', alt: 'Foto de los novios 3' },
    { src: '/src/assets/photos/DSC03134.jpg', alt: 'Foto de los novios 4' },
    { src: '/src/assets/photos/DSC03203.jpg', alt: 'Foto de los novios 5' },
    { src: '/src/assets/photos/DSC03251.jpg', alt: 'Foto de los novios 6' },
    { src: '/src/assets/photos/DSC03159.jpg', alt: 'Foto de los novios 7' },
    { src: '/src/assets/photos/DSC03080.jpg', alt: 'Foto de los novios 8' },
    { src: '/src/assets/photos/DSC03111.jpg', alt: 'Foto de los novios 9' },
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

  const autoPlay = () => {
    setInterval(() => {
      if (currentIndex.value < photos.value.length - 1) {
        currentIndex.value++
      } else {
        currentIndex.value = 0
      }
    }, 5000) // Cambia cada 5 segundos
  }

  // Descomenta la siguiente línea si quieres auto-play
  // onMounted(() => {
  //   autoPlay()
  // })

  return {
    currentIndex,
    photos,
    nextSlide,
    prevSlide,
    goToSlide,
    autoPlay
  }
}