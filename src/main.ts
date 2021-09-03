import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import 'element-plus/lib/theme-chalk/index.css'

const APP = createApp(App)

APP.use(router).use(ElementPlus)

APP.mount('#app')
