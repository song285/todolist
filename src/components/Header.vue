<template>
  <el-row>
    <el-col :span="24">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable
        @keydown.enter="enterHander"
      ></el-input>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Header',
  props: {
    todos: {
      type: Object,
      required: true
    },
    addTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    let input = ref<string>('')
    const enterHander = () => {
      props.addTodo({
        id: new Date().getTime(),
        content: input.value,
        isCompleted: false
      })
      input.value = ''
    }
    return {
      input,
      enterHander
    }
  }
})
</script>

<style></style>
