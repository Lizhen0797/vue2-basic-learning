import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const actions = {
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
}

const mutations = {
  INCREMENT(state, value) {
    state.sum += value
  },
  DECREMENT(state, value) {
    state.sum -= value
  },
}

const state = {
  sum: 0,
  school: '111',
  subject: 'js'
}

const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}
export default new VueX.Store({
  actions,
  mutations,
  state,
  getters
})
