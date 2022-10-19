<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
    <h1>当前求和为{{ bigSum }}</h1>
    <h1>我在{{ school }} 学习 {{ subject }}</h1>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <!-- 适用于mapMutation 和 mapAuction -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>

    <!-- 适用于普通方法
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'MyCount',
  data() {
    return {
      n: 1,
    }
  },
  methods: {
    // basic 方法
    // increment() {
    //   this.$store.commit('INCREMENT', this.n)
    // },
    // decrement() {
    //   this.$store.commit('DECREMENT', this.n)
    // },

    // 采用mapMutations生成对应的方法 方法中第一个参数为event 对象写法
    ...mapMutations({
      increment: 'INCREMENT',
      decrement:'DECREMENT'
    }),
    // basic写法
    // incrementOdd() {
    //   this.$store.dispatch('incrementOdd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('incrementWait', this.n)
    // },

    // 采用mapActions生成对应的方法 方法中第一个参数为event 对象写法
    ...mapActions({
      incrementOdd: 'incrementOdd',
      incrementWait: 'incrementWait'
    })
  },
  computed: {
    //借用mapState生成计算属性，从state中读取数据，对象写法
    // ...mapState({
    //   sum: 'sum',
    //   school: 'school',
    //   subject: 'subject'
    // }),

    //借用mapState生成计算属性，从state中读取数据，数组写法
    ...mapState(['sum', 'school', 'subject']),
    ...mapGetters(['bigSum']),
  },
  beforeDestroy() {},
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
