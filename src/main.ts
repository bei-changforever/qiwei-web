import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import './assets/style/index.scss'
import '@/assets/front-style/pingFang.css'
import component from './components/component'
import { Swipe, SwipeItem } from 'vant'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(component)
app.use(Swipe);
app.use(SwipeItem);
app.mount('#app')
