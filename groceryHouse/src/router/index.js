import Vue from 'vue'
import Router from 'vue-router'
import origin from '@/components/origin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'origin',
      component: origin
    },
    {
      path: '*',
      redirect: '/', // 重定向
    }
  ]
})
