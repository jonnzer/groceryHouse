
/*
* 电影接口
* */

import axios from 'axios'
export const res_latestMovie = (obj,okCB,errCB) => {         //  获取最新电影
    axios ({
      method: 'get',
      url: '/movie/fetchMovie',
    })
      .then(res =>{
        okCB(res)
    })
      .catch(err => {
        errCB(err)
      })
}

