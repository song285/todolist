<template>
  <div class="list-title" v-if="todos.length > 0">待完成：</div>
  <el-scrollbar height="400px">
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      :deleteTodo="deleteTodo"
      :updateTodo="updateTodo"
    />
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Item from './Item.vue'
import { Todo } from '../utils/todo'

export default defineComponent({
  name: 'List',
  components: {
    Item
  },
  props: {
    todos: {
      type: Object as () => Todo,
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    },
    updateTodo:{
      type: Function,
      required: true
    },
  }
})
</script>

<style scoped>
.list-title {
  margin-top: 10px;
  font-size: 14px;
  width: 100%;
  padding: 5px 0;
  color: #409eff;
}
</style>
