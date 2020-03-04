import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage/')
  },
  {
    path: '/send-code',
    name: 'SendCode',
    component: () => import('@/views/SendCodePage/')
  },
  {
    path: '/',
    name: 'Chats',
    component: () => import('@/views/ChatPage/'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/',
        name: 'ContactChat',
        component: () => import('@/components/ChatMessaging/')
      },
      {
        path: '/:id',
        name: 'ContactChat',
        component: () => import('@/components/ChatMessaging/')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     const user = store.getters['auth/user']
//     console.log(user)
//     if (!user && to.path !== '/login') {
//       next({
//         path: '/login',
//         params: { nextUrl: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
