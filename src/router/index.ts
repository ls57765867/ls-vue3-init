import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/hello' },
  { path: '/hello', component: () => import('../components/HelloWorld.vue') },
  { path: '/test', component: () => import('../views/test.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
