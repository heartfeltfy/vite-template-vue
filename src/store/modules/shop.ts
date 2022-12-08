import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => {
    return { index: 1 }
  },
  getters: {
    getIndex (state) {
      return state.index + 100
    }
  },
  actions: {
    updateIndex () {
      this.index++
    }
  }
})
