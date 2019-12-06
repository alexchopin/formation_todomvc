<template>
  <div>
    <pre>{{ forms }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const forms = await $axios.$get("/forms.json")
    return {
      forms
    }
  }
}
</script>