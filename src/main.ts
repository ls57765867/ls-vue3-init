import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

import 'element-plus/dist/index.css'
import 'vant/lib/index.css'
const store = createPinia()

createApp(App).use(router).use(store).mount('#app')
