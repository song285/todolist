import { createStore } from 'vuex'

const defaultSate = {
  count: 0
}

export default createStore({
  state() {
    return defaultSate
  },
  mutations: {
    increments(state: typeof defaultSate) {
      state.count++
    }
  },
  actions: {
    increments(context: any) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultSate) {
      return 2 * state.count
    }
  }
})
