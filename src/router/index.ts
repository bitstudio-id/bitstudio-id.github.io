import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: defineAsyncComponent(() => import('@/modules/home/views/home.vue'))
  },
  {
    path: '/login',
    name: 'login',
    component: defineAsyncComponent(() => import('@/modules/login/views/login.vue'))
  },
  {
    path: '/blank',
    name: 'blank',
    component: defineAsyncComponent(() => import('@/modules/blank/views/blank.vue'))
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
