// Data
export const state = () => ({
  user: null
})
// Computed
export const getters = {
  isConnected (state) {
    return state.user
  }
}
export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}
// Methods
export const actions = {
  login ({ commit }) {
    // API = user
    var user = { name: 'alex '}
    commit('SET_USER', user)
  },
  logout ({ commit }) {
    commit('SET_USER', null)
  }
}
