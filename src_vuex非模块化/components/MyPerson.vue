<template>
  <div>
    <h1>求和组件的为{{ sum }}</h1>
    <h1>人员列表</h1>
    <input placeholder="请输入名字" type="text" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
export default {
  name: 'MyPerson',

  data() {
    return {
      name: '',
    }
  },

  mounted() {},

  methods: {
    add() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      }
      //console.log(personObj)
      this.name = ''
      this.$store.commit('ADD_PERSON', personObj)
    },
  },

  computed: {
    ...mapState(['personList', 'sum']),
  },
}
</script>

<style scoped></style>
