export default {
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': 'https://jsonplaceholder.typicode.com'
  }
}