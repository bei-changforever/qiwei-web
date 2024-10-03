import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import './assets/style/index.scss'
import '@/assets/front-style/pingFang.css'
import component from './components/component'
// import "@popperjs/core";
// import "bootstrap";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(component)

app.mount('#app')
