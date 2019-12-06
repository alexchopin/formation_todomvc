<template>
  <b-container>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="'/users/' + user.id">
          {{ user.name }}
        </nuxt-link>
        <button @click="$router.push('/users/' + user.id)">GO</button>
      </li>
    </ul>
    <nuxt-child></nuxt-child>
  </b-container>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const users = await $axios.$get("/users.json")
    return {
      users
    }
  }
}
</script>