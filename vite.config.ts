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
import { VantResolver } from 'unplugin-vue-components/resolvers'
//兼容低版本浏览器
import legacy from '@vitejs/plugin-legacy'
// import postcsspxtoviewport from 'postcss-px-to-viewport'

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
      resolvers: [ElementPlusResolver(), VantResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver(), VantResolver()]
    }),
    legacy({
      targets: ['defaults', 'ios < 14'], //需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.array.filter',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.for-each',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all'
      ]
    })
  ],
  css: {
    postcss: {
      plugins: [
        // postcsspxtoviewport({
        //   unitToConvert: 'px', // 要转化的单位
        //   viewportWidth: 1920, // UI设计稿的宽度
        //   unitPrecision: 6, // 转换后的精度，即小数点位数
        //   propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        //   viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        //   fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        //   selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
        //   minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        //   mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        //   replace: true, // 是否转换后直接更换属性值
        //   landscape: false // 是否处理横屏情况
        // })
      ]
    },

    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 在全局中使用 mixin.scss中预定义的变量
        // 给导入的路径最后加上 ;
        // additionalData: '@import "@/assets/style/mixin.scss";'
      }
    }
  },
  resolve: {
    alias
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/backend/api': {
        // 目标服务器的地址
        target: 'http://101.35.179.19:8066/',
        // 更改请求的origin为代理服务器的origin，以便与目标服务器交互
        changeOrigin: true,
        // 重写请求路径
        // rewrite: (path) => path.replace(/^\/backend/, '')
      }
    }
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
