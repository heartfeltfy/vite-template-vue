import axios from 'axios'

/**
 * 创建请求实例
 */
const instance = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 15 * 1000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
})

/**
 *
 * 前置拦截器（发起请求之前的拦截）
 */
instance.interceptors.request.use(config => {
  /**
   * 在这里一般会携带前台的参数发送给后台，token鉴权之类的
   */
  return config
}, async error => {
  return await Promise.reject(error)
})

/**
 *
 * 后置拦截器（获取到响应时的拦截）
 */
instance.interceptors.response.use(async response => {
  return await Promise.resolve(response.data)
}, async error => {
  /**
   * 错误处理，统一状态码响应
   */
  const { response } = error
  if (response && response.data) {
    return await Promise.reject(error)
  }
  const { message } = error
  console.error(message)
  return await Promise.reject(error)
})

export default instance
