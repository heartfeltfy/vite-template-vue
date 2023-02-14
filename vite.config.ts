import { defineConfig } from 'vite'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // eslintPlugin(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      // 生成配置文件路径
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true
      }
    }),
    Components({
      // 需要自动按需引入的文件夹组件
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver()],
      // 生成配置文件路径
      dts: 'src/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      // 配置路径别名
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 5000,
    // 监听所有地址
    host: '0.0.0.0',
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {}
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false
  }
})
