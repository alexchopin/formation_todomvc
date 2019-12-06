<template>
  <div>
    <h3>Login</h3>
    <button v-if="$store.getters.isConnected" @click="$store.dispatch('logout')">Déconnexion</button>
    <button v-else @click="$store.dispatch('login')">Se connecter</button>
  </div>
</template>

<script>
export default {
  layout: 'noheader'
}
</script>