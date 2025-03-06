<template>
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
import FiancesPhotos from './components/fiances/index.vue'
import GiftTableComponent from './components/giftTable/index.vue'
import FormComponent from './components/form/index.vue'
export default {
  name: 'IndexPage',
  components: {
    FiancesPhotos,
    GiftTableComponent,
    FormComponent
  }
}
</script>

