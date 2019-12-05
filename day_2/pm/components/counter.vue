<template>
  <div>
    <h2>Plus ou moins? De 0 à 1 000!</h2>
    <p>{{ game.message }}</p>
    <b-form-input type="number" v-model="game.guess" @keyup.enter="find"></b-form-input>
    <b-button v-if="reset" @click="play">Rejouer</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      game: {
        secret: Math.floor((Math.random() * 1000) + 1),
        guess: 0,
        message: ''
      },
      reset: false
    }
  },
  methods: {
    play () {
      this.game = {
        secret: Math.floor((Math.random() * 1000) + 1),
        message: '',
        guess: 0
      }
    },
    find () {
      if (this.game.guess > this.game.secret) {
        this.game.message = "C'est moins!"
      } else if (this.game.guess < this.game.secret) {
        this.game.message = "C'est plus!"
      } else {
        this.game.message = "Gagné!"
        this.reset = true
      }
    }
  }
}
</script>