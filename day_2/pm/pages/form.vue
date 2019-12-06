<template>
  <b-container>
    <form @submit.prevent="send">
      <div v-for="(form, index) in forms" :key="index">
        <label :for="index">{{ form.label }}</label>
        <component :is="'my-' + form.type" :id="index" :params="form"/>
      </div>
      <button type="submit">Valider</button>
    </form>
  </b-container>
</template>

<script>
import myInput_text from '@/components/forms/input_text.vue'
import mySelect from '@/components/forms/select.vue'

export default {
  components: {
    myInput_text,
    mySelect
  },
  async asyncData ({ $axios }) {
    const forms = await $axios.$get("/forms.json")
    return {
      forms
    }
  },
  methods: {
    send () {
      console.log('send')
    }
  }
}
</script>