
import { SAVE_ONEWORD } from "../mutation-types"
import { reqOneWord } from "@/api/impl/oneWord"

const state = {
  oneWObj: {},                                      //  接收返回的一言对象《词句》from && hitokoto
}

const mutations = {

  [SAVE_ONEWORD](state,obj) {                       //  保存返回的一言《词句》
    state.oneWObj = obj
  },


}

const actions = {
    act_oneWord: ({commit}) =>{
        reqOneWord(
          null,
           res => {
             commit(SAVE_ONEWORD,res.data)
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
