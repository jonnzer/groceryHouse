import axios from 'axios'
export const reqOneWord = (obj,okCB,errCB) => {
  axios({
    method: 'get',
    url: 'http://api.hitokoto.cn',           // 一言  https://hitokoto.cn/api   https://v1.hitokoto.cn/
    responseType: 'json',
  }).then(res => {
    okCB(res)
  }).catch(err => {
    errCB(err)
  })


}
