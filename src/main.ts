import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import 'element-plus/dist/index.css'
import './assets/style/index.scss'
import '@/assets/front-style/pingFang.css'
import component from './components/component'
// 引入模块后自动生效
import '@vant/touch-emulator'


const env = import.meta.env.VITE_APP_ENV // 获取配置信息
import Vconsole from 'vconsole' // 引入 vconsole

new Vconsole() // 如所有环境均需开启 则不需要判断
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(component)
app.mount('#app')
