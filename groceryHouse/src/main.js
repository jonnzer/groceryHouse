import Vue from 'vue'
import App from './App'
import router from './router'
import moJs from 'mo-js'

Vue.config.productionTip = false
Vue.use(moJs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
