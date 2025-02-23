<template>
  <fiances-photos/>
  <gift-table-component/>
  <form-component/>
  <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
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

