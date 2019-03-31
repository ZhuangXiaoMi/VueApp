import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('@/views/manage.vue'),
      children:[{
        path: '',
        component: Home,
        meta: [],
      },{
        path: '/about',
        component: () => import('@/views/About.vue'),
        meta: ['关于', '关于'],
      }]
    },
  ]
})
