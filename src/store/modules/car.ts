import { defineStore } from 'pinia'

export const useCarStore = defineStore('car', {
  state: () => {
    return { index: 1 }
  },
  getters: {
    getIndex(state) {
      return state.index + 100
    }
  },
  actions: {
    updateIndex() {
      this.index++
    }
  }
})
