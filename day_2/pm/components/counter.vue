<template>
  <div>
    <h2>Plus ou moins? De 0 à 1 000!</h2>
    <p>{{ message }}</p>
    <b-form-input type="number" v-model="guess" @keyup.enter="find"></b-form-input>
    <button v-if="reset" @click="secret = Math.floor((Math.random() * 1000) + 1)">Reset</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      secret: Math.floor((Math.random() * 1000) + 1),
      guess: 0,
      message: '',
      reset: false
    }
  },
  methods: {
    find () {
      if (this.guess > this.secret) {
        this.message = "C'est moins!"
      } else if (this.guess < this.secret) {
        this.message = "C'est plus!"
      } else {
        this.message = "Gagné!"
        this.reset = true
      }
    }
  }
}
</script>