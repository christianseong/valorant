import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/Articlelist',
    name: 'Articlelist',
    component: () => import('../views/Articlelist.vue')
  },
  {
    path: '/ArticleView',
    name: 'Articleview',
    component: () => import('../views/Articleview.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
