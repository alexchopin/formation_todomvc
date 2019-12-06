<template>
  <select :required="params.validator.required">
    <option v-for="option in params.options" :value="option" :key="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      required: true
    }
  }
}
</script>