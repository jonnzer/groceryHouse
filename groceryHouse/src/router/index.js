import Vue from 'vue'
import Router from 'vue-router'

// 开始引入组件
import origin from '@/components/origin'
import homePage from '@/components/homePage'
import movie from '@/components/movie'
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
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/movieList',
      name: 'movie',
      component: movie
    },
    {
      path: '*',
      redirect: '/', // 重定向
    }
  ]
})
