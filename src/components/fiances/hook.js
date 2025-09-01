import { ref } from 'vue'

export default function useFiances() {
  const photos = ref([
    { src: '/photos/DSC03150.jpg', alt: 'Foto de los novios 1' },
    { src: '/photos/DSC03285.jpg', alt: 'Foto de los novios 2' },
    { src: '/photos/DSC03261.jpg', alt: 'Foto de los novios 3' },
    { src: '/photos/DSC03166.jpg', alt: 'Foto de los novios 4' },
    { src: '/photos/DSC03280.jpg', alt: 'Foto de los novios 5' },
    { src: '/photos/DSC03107.jpg', alt: 'Foto de los novios 6' },
  ])

  // Modal logic
  const showDialog = ref(false)
  const selectedPhoto = ref({})

  function openDialog(photo) {
    selectedPhoto.value = photo
    showDialog.value = true
  }
  function closeDialog() {
    showDialog.value = false
    selectedPhoto.value = {}
  }

  return {
    photos,
    showDialog,
    selectedPhoto,
    openDialog,
    closeDialog
  }
}