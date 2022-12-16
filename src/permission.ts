import router from '@/router'

// 路由守卫全局
router.beforeEach((to, from, next) => {
  next()
})
