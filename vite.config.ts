import { fileURLToPath, URL } from 'node:url'
import pkg from './package.json'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dayjs from 'dayjs'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd()
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
}
/** 设置别名 */
const alias: Record<string, string> = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
  '@build': pathResolve('build')
}
// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 在全局中使用 mixin.scss中预定义的变量
        // 给导入的路径最后加上 ;
        additionalData: '@import "@/assets/style/mixin.scss";'
      }
    }
  },
  resolve: {
    alias
  },
  server: {
    port: 8080
  },
  build: {
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: pathResolve('index.html')
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  define: {
    __INTLIFY_PROD_DEVTOOLS__: false,
    __APP_INFO__: JSON.stringify(__APP_INFO__)
  }
})
