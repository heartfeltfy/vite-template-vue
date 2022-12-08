import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/**
 * 引入全局样式初始化
 */
import 'normalize.css'
/**
 * 引入路由
 */
import router from './router'
/**
 * 引入状态管理pinia
 */
import store from '@/store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
