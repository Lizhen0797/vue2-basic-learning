<template>
  <ul>
    <li>消息编号 {{ $route.query.id }}</li>
    <li>消息标题 {{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'MyDetail',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped></style>
