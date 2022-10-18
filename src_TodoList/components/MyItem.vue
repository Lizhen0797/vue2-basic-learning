<template>
  <li>
    <!--      这里勾选和取消勾选可以使用change和click作为事件处理-->
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!--@click="handleCheck(todo.id) -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'MyItem',
  props: ['todo'],
  methods: {
    handleCheck(id) {
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    handleDelete(id) {
      //if (confirm('确定删除吗')) {
      // this.deleteTodo(id)
      // this.$bus.$emit('deleteTodo', id)
      pubsub.publish('deleteTodo', id)
      //}
    },
    handleEdit(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      // 这时候input框还没来到页面上，所以无法focus
      // this.$refs.inputTitle.focus()
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    },
  },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}
</style>
