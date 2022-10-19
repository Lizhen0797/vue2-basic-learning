<template>
  <div>
    <h1>求和组件的为{{ sum }}</h1>
    <h1>列表中第一个人的名字是 {{ firstPersonName }}</h1>
    <h1>人员列表</h1>
    <input placeholder="请输入名字" type="text" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人, 名字随机</button>
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
      this.$store.commit('personAbout/ADD_PERSON', personObj)
    },

    addWang() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      }
      //console.log(personObj)
      this.name = ''
      this.$store.dispatch('personAbout/addPersonWang', personObj)
    },
    addPersonServer() {
        this.$store.dispatch('personAbout/addPersonServer')
    }
  },

  computed: {
    // ...mapState(['personList', 'sum']),
    ...mapState('countAbout', ['sum']),
    ...mapState('personAbout', ['personList']),
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    },
  },
}
</script>

<style scoped></style>
