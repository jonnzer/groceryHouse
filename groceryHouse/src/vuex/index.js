import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)                                               // first use
                                                            // start import modules
import oneWord from './modules/oneWord'                     // 一言


import * as getters from './getters'
import * as mutation from './mutation-types'
const store = new Vuex.Store({
  getters,
  mutation,
  modules: {
    oneWord,
  }
})

export default store
