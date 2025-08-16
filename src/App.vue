<template>
  <div>
    <welcome-component/>
    <SectionFade class="bg-beige">
      <video-component/>
    </SectionFade>
    <SectionFade class="bg-blue-custom">
      <countdown-component/>
      <fiances-photos/>
    </SectionFade>
    <SectionFade class="bg-orange-custom">
      <info-component/>
    </SectionFade>
    <SectionFade>
      <gift-table-component/>
    </SectionFade>
    <SectionFade>
      <form-component
        name="rsvp"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      />
    </SectionFade>
  </div>
</template>
<script>
import { ref, onMounted, defineComponent, h } from 'vue'
import WelcomeComponent from './components/welcome/index.vue'
import VideoComponent from './components/VideoComponent/index.vue'
import FiancesPhotos from './components/fiances/index.vue'
import InfoComponent from './components/info/index.vue'
import GiftTableComponent from './components/giftTable/index.vue'
import FormComponent from './components/form/index.vue'
import CountdownComponent from './components/countdown/index.vue'

const SectionFade = defineComponent({
  name: 'SectionFade',
  props: {
    class: { type: String, default: '' }
  },
  setup(props, { slots }) {
    const el = ref(null)
    const visible = ref(false)
    onMounted(() => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) visible.value = true
        },
        { threshold: 0.15 }
      )
      if (el.value) observer.observe(el.value)
    })
    return () =>
      h(
        'div',
        {
          ref: el,
          class: [
            'min-h-screen w-full flex flex-col transition-all duration-700 ease-out',
            visible.value
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12',
            props.class
          ]
        },
        slots.default && slots.default()
      )
  }
})

export default {
  name: 'IndexPage',
  components: {
    WelcomeComponent,
    VideoComponent,
    FiancesPhotos,
    InfoComponent,
    GiftTableComponent,
    FormComponent,
    CountdownComponent,
    SectionFade
  }
}
</script>


