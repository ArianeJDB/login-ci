import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from '../components/AppHome.vue'
import AppLogin from '../components/AppLogin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppLogin',
    component: AppLogin
  },
  {
    path: '/home',
    name: 'AppHome',
    component: AppHome
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
