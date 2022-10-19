export default {
  namespaced: true,
  actions: {
    incrementOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit('INCREMENT', value)
      }
    },
    incrementWait(context, value) {
      setTimeout(() => {
        context.commit('INCREMENT', value)
      }, 500)
    },
  },
  mutations: {
    INCREMENT(state, value) {
      state.sum += value
    },
    DECREMENT(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0,
    school: '111',
    subject: 'js',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    },
  },
}
