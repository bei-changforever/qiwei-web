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

import BaiduMap from 'vue-baidu-map-3x'
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
app.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'oei253vVub3Z48dQF1FaD5Wh6klyXz3X'
  // v:'2.0',  // 默认使用3.0
  // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
})
app.mount('#app')
