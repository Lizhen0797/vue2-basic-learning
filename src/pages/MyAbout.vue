<template>
  <div>
    <h2>我是About内容</h2>
    <div></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MyAbout',

  data() {
    return {}
  },

  mounted() {},

  methods: {},

  beforeRouteEnter(_, __, next) {
    next()
  },
  beforeRouteLeave(_, __, next) {
    next()
  },
}
</script>

<style scoped></style>
