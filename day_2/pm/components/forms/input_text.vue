<template>
  <input type="text" 
        :required="params.validator && params.validator.required" 
        :maxlength="params.validator.maxlength"/>
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