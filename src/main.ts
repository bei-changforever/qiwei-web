import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入重置样式
import './assets/style/reset.scss'
import 'element-plus/dist/index.css'
import './assets/style/index.scss'
import '@/assets/front-style/pingFang.css'
import component from './components/component'
import layout from './layout/layout'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(component)
app.use(layout)
app.mount('#app')
