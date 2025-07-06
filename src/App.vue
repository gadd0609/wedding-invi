<template>
  <welcome-component/>
  <video-component/>
  <countdown-component/>
  <fiances-photos/>
  <info-component/>
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

