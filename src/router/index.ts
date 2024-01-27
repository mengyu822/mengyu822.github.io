import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 管理路由
  routes: [
    {
      path: '/home',
      component: () => import('@/views/home/home-index.vue')
    },

    {
      path: '/scenics-spot',
      component: () => import('@/views/scenicsSpot/scenicsSpot-index.vue')
    },
    {
      path:'/',
      redirect:'/home'

    }
  ]

})

export default router
