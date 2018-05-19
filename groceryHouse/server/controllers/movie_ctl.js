import movieModel from '../models/movie_model'

const getNewMovie = async function (ctx) {
    const result =  await movieModel.modelNewMovie()
  //  result.movie_high_pic = result.movie_high_pic.split(',') // split array 
    ctx.body = {
        status:  200,
        msg: 'success',
        data: result
    }
    
} 

export default {
    getNewMovie,
}