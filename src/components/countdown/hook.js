import { ref, onMounted, onUnmounted } from 'vue'

export default function useCountdown() {
  const targetDate = new Date('2025-11-15T00:00:00').getTime()
  
  const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  const isFinished = ref(false)
  let intervalId = null

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference > 0) {
      timeLeft.value = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      }
      isFinished.value = false
    } else {
      timeLeft.value = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
      isFinished.value = true
    }
  }

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0')
  }

  const startCountdown = () => {
    calculateTimeLeft()
    intervalId = setInterval(() => {
      calculateTimeLeft()
    }, 1000)
  }

  const stopCountdown = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  onMounted(() => {
    startCountdown()
  })

  onUnmounted(() => {
    stopCountdown()
  })

  return {
    timeLeft,
    isFinished,
    formatNumber,
    startCountdown,
    stopCountdown
  }
}