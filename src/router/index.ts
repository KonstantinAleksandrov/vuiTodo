import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TaskPage from '@/pages/TaskPage.vue'
import CategoryPage from '@/pages/CategoryPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TaskPage
  },
  {
    path: '/categories',
    component: CategoryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


