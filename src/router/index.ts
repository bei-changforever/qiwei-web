import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      meta: {
        keepAlive: true, //设置页面是否需要使用缓存
        title: '首页'
      },
      // component: () => import('@/views/index.vue')
      component: () => import('@/views/Home/index.vue')
    },
    {
      path: '/product',
      name: '',
      meta: {
        keepAlive: true, //设置页面是否需要使用缓存
        title: '产品中心'
      },

      component: () => import('@/views/Product/index.vue')
    }
  ]
})

export default router
