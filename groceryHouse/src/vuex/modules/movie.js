
import {res_latestMovie} from "@/api/impl/movie";

const state = {

}

const mutations = {

}

const actions = {
  act_latestMovie: ({commit}) => {
    res_latestMovie(
      null,
      res => {
        console.log(res)
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
