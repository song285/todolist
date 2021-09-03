<template>
  <h2>Vue3 + TS + Vite + Element-plus 构建的todo list</h2>
  <div class="container">
    <Header :todos="todos" :addTodo="addTodo" />
    <template v-if="todos.length > 0">
      <List :todos="todos" :deleteTodo="onDeleteHander" :updateTodo="updateTodo" />
      <Footer :todos="todos" :chkAll="chkAll" :clearAllCompleted="clearAllCompleted"/>
    </template>
    <el-empty v-else description="快填满我"></el-empty>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import Header from '../components/Header.vue'
import List from '../components/List.vue'
import Footer from '../components/Footer.vue'
import { Todo } from '../utils/todo'
import { saveTodos, readTodos } from '../utils/storage'

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    List,
    Footer
  },

  setup() {
    const dataList = reactive<{ todos: Todo[] }>({ todos: [] })

    onMounted(() => {
      dataList.todos = readTodos()
    })

    // 添加数据
    const addTodo = (val: Todo) => {
      dataList.todos.unshift(val)
    }

    // 删除数据
    const onDeleteHander = (index: number) => {
      dataList.todos.splice(index, 1)
    }

    // 监听数据
    watch(() => dataList.todos, saveTodos, { deep: true })

    // 修改todo的状态
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted
    }

    // 全选/全不选
    const chkAll = (isCompleted: boolean) => {
      dataList.todos.forEach((todo) => {
        todo.isCompleted = isCompleted
      })
    }

    // 删除选中的数据
    const clearAllCompleted = () => {
      dataList.todos = dataList.todos.filter((todo) => !todo.isCompleted)
    }

    return {
      chkAll,
      addTodo,
      updateTodo,
      onDeleteHander,
      clearAllCompleted,
      ...toRefs(dataList)
    }
  }
})
</script>

<style scoped>
h2{text-align: center;}
.container {
  background: #fff;
  width: 40%;
  margin: 7% auto;
  margin-top: 0;
  padding: 30px 20px;
  min-height: 500px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
