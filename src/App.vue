<template>
  <welcome-component/>
  <div class="bg-beige">
    <video-component/>
  </div>
  <div class="bg-green-custom">
    <countdown-component/>
  </div>
  <div class="bg-brown-custom px-8 py-16 sm:py-16 shadow-xl">
    <img 
      src="/photos/DSC03269.jpg" 
      alt="photo.alt"
      class="w-full object-cover overflow-hidden rounded-2xl max-w-4xl mx-auto"
    />
  </div>
    <img 
      class="w-16 sm:w-32 absolute left-0 right-0" 
      src="/public/logoMulticolor.svg" 
      alt="Logo"
      style="margin-left: auto; margin-right: auto; align-self: center;"
    >
  <div class="bg-brown-custom">
    <info-component/>
  </div>
  <gift-table-component/>
  <form-component
    name="rsvp"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  />
  <div class="bg-green-custom">
    <fiances-photos/>
  </div>
</template>

<script>
import WelcomeComponent from './components/welcome/index.vue'
import VideoComponent from './components/VideoComponent/index.vue'
import FiancesPhotos from './components/fiances/index.vue'
import InfoComponent from './components/info/index.vue'
import GiftTableComponent from './components/giftTable/index.vue'
import FormComponent from './components/form/index.vue'
import CountdownComponent from './components/countdown/index.vue'

export default {
  name: 'IndexPage',
  components: {
    WelcomeComponent,
    VideoComponent,
    FiancesPhotos,
    InfoComponent,
    GiftTableComponent,
    FormComponent,
    CountdownComponent
  }
}
</script>

