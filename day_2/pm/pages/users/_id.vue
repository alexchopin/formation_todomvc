<template>
  <div>
    <h3>User</h3>
    <pre>
      {{ user }}
    </pre>
</div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    let users = await $axios.$get("/users.json")
    let user = users.find(function (u) {
      return u.id == params.id
    })
    return {
      user
    }
  }
}
</script>