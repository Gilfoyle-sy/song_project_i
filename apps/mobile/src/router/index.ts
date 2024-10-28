import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {
        hideNavBar: true
      },
      component: () => import('../views/LoginPage/index.vue')
    },
    {
      path: '/',
      name: 'Home',
      meta: {
        showTabBar: true,
        hideNavBar: false,
        navBarTitle: '首页'
      },
      component: () => import('../views/HomePage/index.vue')
    },
    {
      path: '/station',
      name: 'Station',
      meta: {
        showTabBar: true,
        hideNavBar: false,
        navBarTitle: '电站'
      },
      component: () => import('../views/StationPage/index.vue')
    },
    {
      path: '/workbench',
      name: 'Workbench',
      meta: {
        showTabBar: true,
        hideNavBar: false,
        navBarTitle: '工作台'
      },
      component: () => import('../views/WorkbenchPage/index.vue')
    },
    {
      path: '/backlog',
      name: 'Backlog',
      meta: {
        showTabBar: true,
        hideNavBar: false,
        navBarTitle: '待办'
      },
      component: () => import('../views/BacklogPage/index.vue')
    },
    {
      path: '/user',
      name: 'User',
      meta: {
        showTabBar: true,
        hideNavBar: false,
        navBarTitle: '我的'
      },
      component: () => import('../views/UserPage/index.vue')
    }
  ]
})

// router.beforeEach(to => {
//   const isLogined = false
//   if (!isLogined && to.name !== 'Login') {
//     return { name: 'Login' }
//   }
// })

export default router
