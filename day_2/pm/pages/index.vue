<template>
  <b-container>
    <counter></counter>
  </b-container>
</template>

<script>
import counter from '@/components/counter.vue'
export default {
  name: 'Homepage',
  data () {
    return {
      title: 'Bonjour'
    }
  },
  components: {
    counter
  }
}
</script>