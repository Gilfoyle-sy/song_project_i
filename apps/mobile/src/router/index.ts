import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginPage/index.vue')
    }
  ]
})

router.beforeEach(to => {
  const isLogined = false
  if (!isLogined && to.name !== 'Login') {
    return { name: 'Login' }
  }
})

export default router
