import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './app/router'
import App from './app/App.vue'

import './assets/index.css'

const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')
