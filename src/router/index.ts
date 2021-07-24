/* eslint-disable import/no-unresolved */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from "@/modules/home/views/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: import('@/modules/home/views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: import('@/modules/login/views/login.vue')
  }
  // {
  //     path: "/vuex",
  //     name: "Vuex",
  //     component: Vuex,
  // },
  // {
  //     path: "/axios",
  //     name: "Axios",
  //     component: () => import("@/views/Axios.vue"), // lazy-load
  // },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
