import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
const store = createPinia()

createApp(App).use(router).use(store).mount('#app')
