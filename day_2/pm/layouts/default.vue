<template>
  <div>
    <div>
      <nuxt-link to="/">Accueil</nuxt-link> | 
      <nuxt-link to="/form">Formulaire</nuxt-link> | 
      <nuxt-link to="/login">Login</nuxt-link> | 
      <nuxt-link to="/users">Users</nuxt-link> | 
      <p v-if="$store.getters.isConnected">{{ $store.state.user.name }}</p>
    </div>
    <nuxt></nuxt>
  </div>
</template>
