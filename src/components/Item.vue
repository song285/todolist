<template>
  <div
    class="items"
    @mouseover="mouseHander(true)"
    @mouseout="mouseHander(false)"
    :style="{ backgroundColor: backColor }"
  >
    <el-checkbox v-model="isComplete" :label="todo.content"></el-checkbox>
    <el-button
      type="danger"
      icon="el-icon-delete"
      size="mini"
      v-show="isEnter"
      @click="deleteHander"
    ></el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Todo } from '../utils/todo'
export default defineComponent({
  name: 'Item',
  props: {
    todo: {
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
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    let isEnter = ref<Boolean>(false)
    let backColor = ref<String>('#FFFFFF')

    const mouseHander = (val: Boolean) => {
      isEnter.value = val
      if (val) {
        backColor.value = '#FDE2E2'
      } else {
        backColor.value = '#FFFFFF'
      }
    }
    const deleteHander = () => {
      props.deleteTodo(props.index)
    }

    const isComplete = computed({
      get(){
        return props.todo.isCompleted
      },
      set(val){
        props.updateTodo(props.todo,val)
      }
    })

    return {
      isEnter,
      backColor,
      isComplete,
      mouseHander,
      deleteHander
    }
  }
})
</script>

<style scoped>
.items {
  border-radius: 4px;
}
.items label {
  width: 93%;
  padding: 5px 10px;
}
.items button {
  padding: 0 5px;
  min-height: 20px;
  vertical-align: text-bottom;
}
</style>
