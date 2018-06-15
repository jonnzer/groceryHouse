import Vue from 'vue'
import App from './App'
import router from './router'
import moJs from 'mo-js'
import store from './vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(moJs)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
