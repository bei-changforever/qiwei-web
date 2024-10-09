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
      name: 'product',
      meta: {
        keepAlive: true, //设置页面是否需要使用缓存
        title: '产品中心'
      },

      component: () => import('@/views/Product/index.vue'),
      children: [
        {
          path: 'product-detail',
          name: 'product-detail',
          component: () => import('@/views/Product/product-container.vue'),
        },
        {
          path: 'product-info',
          name: 'product-info',
          component: () => import('@/views/Product/product-info.vue'),
        }
      ]
    }
  ],
  // 是否严格匹配路由
  strict: true,
  // 路由跳转完成后，页面滚动行为
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
