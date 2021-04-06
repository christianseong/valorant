import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../components/Main.vue'),
    children:[
      {
        path: '/:board',
        name: 'Board',
        component: () => import('../components/Board.vue')
      },
      {
        path: '/',
        name: 'Mainvideo',
        component: () => import('../components/Mainvideo.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
