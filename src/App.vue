<template>
  <welcome-component/>
  <video-component/>
  <fiances-photos/>
  <gift-table-component/>
  <form-component
    name="rsvp"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  />
</template>

<script>
import WelcomeComponent from './components/welcome/index.vue'
import VideoComponent from './components/VideoComponent/index.vue'
import FiancesPhotos from './components/fiances/index.vue'
import GiftTableComponent from './components/giftTable/index.vue'
import FormComponent from './components/form/index.vue'
export default {
  name: 'IndexPage',
  components: {
    WelcomeComponent,
    VideoComponent,
    FiancesPhotos,
    GiftTableComponent,
    FormComponent
  }
}
</script>

