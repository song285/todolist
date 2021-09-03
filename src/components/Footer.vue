<template>
  <el-row class="main">
    <el-col :span="20" justify="space-between">
      <el-checkbox label="全选" v-model="chkAll"></el-checkbox>
      <span class="total">已完成 {{ finished }} / 全部 {{ todos.length }}</span>
    </el-col>
    <el-col :span="4">
      <el-button type="danger" size="small" @click="clearAllCompleted">删除已完成任务</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Todo } from '../utils/todo'

export default defineComponent({
  name: 'Footer',
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true
    },
    chkAll: {
      type: Function,
      required: true
    },
    clearAllCompleted: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const finished = computed(() => {
      return props.todos.reduce((pre, todo, index) => pre + (todo.isCompleted ? 1 : 0), 0)
    })
    const chkAll = computed({
      get() {
        return finished.value > 0 && props.todos.length === finished.value
      },
      set(val) {
        props.chkAll(val)
      }
    })
    return {
      chkAll,
      finished
    }
  }
})
</script>

<style scoped>
.main {
  line-height: 32px;
}
.total {
  font-size: 13px;
  color: #606266;
  margin-left: 20px;
}
</style>
