export default {
  // we only need to commit method of context
  // 02:26:26: why use a payload
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
