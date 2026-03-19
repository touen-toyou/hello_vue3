import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 全局样式
import './assets/styles/base.css'
import './assets/styles/variables.css'
import './assets/styles/theme.css'
import './assets/styles/global.css'

createApp(App).use(router).mount('#app')
