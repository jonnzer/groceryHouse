import Vue from 'vue'
import Router from 'vue-router'

// 开始引入组件
import origin from '@/components/origin'
import homePage from '@/components/homePage'
import movieList from '@/components/movieList'
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
      name: 'movieList',
      component: movieList
    },
    {
      path: '/*',
      component: origin, // 重定向
      redirect: '/'
    }
  ]
})
