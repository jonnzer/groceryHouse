import instance_movie from '../models/movie_model'

const getNewMovie = async function (ctx) {
    
    ctx.body = {
        success: true,
        content: '213'
    }
    
} 

export default {
    getNewMovie,
}