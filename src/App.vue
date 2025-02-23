<template>
  <fiances-photos/>
  <gift-table-component/>
  <form-component/>
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

