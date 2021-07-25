import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/home/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/modules/login/views/Login.vue'),
    meta: {
      layout: 'default-app'
    }
  },
  {
    path: '/blank',
    name: 'blank',
    component: () => import('@/components/views/Blank.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
