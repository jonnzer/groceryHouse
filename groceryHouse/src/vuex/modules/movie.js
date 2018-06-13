
import {res_latestMovie} from "@/api/impl/movie";
import {
       SAVE_LATESTMOVIE
      } from "../mutation-types";


const state = {
  latestMovie: '',                  //  最新的电影
}

const mutations = {
  [SAVE_LATESTMOVIE] (state,obj) {
      state.latestMovie = obj
  }
}

const actions = {
  act_latestMovie: ({commit}) => {
    res_latestMovie(
      null,
      res => {
        if (res.data.data){
          commit(SAVE_LATESTMOVIE,res.data.data[0])  // 默认数组中只有第一个对象
        }
      },
      err => {
        console.error(err)
      }
    )
  }
}

export default {
  state,
  mutations,
  actions
}
