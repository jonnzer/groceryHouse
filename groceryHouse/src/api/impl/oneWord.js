
/*
*一言api接口
* */

import axios from 'axios'
export const reqOneWord = (obj,okCB,errCB) => {
  axios({
    method: 'get',
    url: 'http://v1.hitokoto.cn',           // 一言  https://hitokoto.cn/api   https://v1.hitokoto.cn/
    responseType: 'json',
  }).then(res => {
    okCB(res)
  }).catch(err => {
    errCB(err)
  })
}
