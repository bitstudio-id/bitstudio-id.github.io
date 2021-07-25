import { createApp } from 'vue'
import router from '@/router'
import mitt from 'mitt'
import 'ant-design-vue/dist/antd.css'

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   Layout,
//   LayoutHeader,
//   LayoutFooter,
//   LayoutSider,
//   Menu,
//   MenuItem,
//   Row,
//   SubMenu
// } from 'ant-design-vue'

import App from './App.vue'

const app = createApp(App)
const emitter = mitt()

app.config.globalProperties.emitter = emitter

// antd component register
// app.use(Breadcrumb)
// app.use(BreadcrumbItem)
// app.use(Layout)
// app.use(LayoutSider)
// app.use(LayoutHeader)
// app.use(LayoutFooter)
// app.use(Menu)
// app.use(MenuItem)
// app.use(Row)
// app.use(SubMenu)

app.use(router)
app.mount('#app')
