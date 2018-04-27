import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // first use

import * as getters from './getters'
import * as mutation from './mutation-types'
const store = new Vuex.Store({
  getters,
  mutation,
  // modules
})

export default store
