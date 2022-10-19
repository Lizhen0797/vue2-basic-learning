import Vue from 'vue'
import VueX from 'vuex'
import personOptions from './person'
import countOptions from './count'

Vue.use(VueX)

export default new VueX.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
})
// const actions = {
//   incrementOdd(context, value) {
//     if (context.state.sum % 2) {
//       context.commit('INCREMENT', value)
//     }
//   },
//   incrementWait(context, value) {
//     setTimeout(() => {
//       context.commit('INCREMENT', value)
//     }, 500)
//   },
// }

// const mutations = {
//   INCREMENT(state, value) {
//     state.sum += value
//   },
//   DECREMENT(state, value) {
//     state.sum -= value
//   },
//   ADD_PERSON(state, value) {
//     state.personList.unshift(value)
//   },
// }

// const state = {
//   sum: 0,
//   school: '111',
//   subject: 'js',
//   personList: [{ id: '001', name: '张三' }],
// }

// const getters = {
//   bigSum(state) {
//     return state.sum * 10
//   },
// }
// export default new VueX.Store({
//   actions,
//   mutations,
//   state,
//   getters,
// })
