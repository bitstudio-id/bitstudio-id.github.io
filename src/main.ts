import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'

createApp(App).use(router).mount('#app')
