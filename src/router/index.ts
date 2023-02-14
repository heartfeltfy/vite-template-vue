import { createRouter, createWebHistory } from 'vue-router'

import { base } from './modules/base'

const routes = [...base]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
