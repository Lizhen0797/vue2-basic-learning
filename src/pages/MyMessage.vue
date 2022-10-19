<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link> -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >
      </li>
    </ul>
    <hr />
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'MyNews',

  data() {
    return {
      messageList: [
        { id: '001', title: 'message001' },
        { id: '002', title: 'message002' },
        { id: '003', title: 'message003' },
      ],
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped></style>
