import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入重置样式
import './style/reset.scss'
import 'element-plus/dist/index.css'
// 导入字体图标
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
