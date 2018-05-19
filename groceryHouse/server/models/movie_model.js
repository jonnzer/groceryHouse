import db from '../config/db.js'
const grocery_movie = '../schema/grocery_movie.js'
const movieDb = db.groceryHouse     // 引入数据库
const instance_movie = movieDb.import(grocery_movie) // 引入表结构，实例化

const modelNewMovie = async function (){
    const movieInfo = await instance_movie.findAll({
        limit: 1,
        order: [['movie_id', 'DESC']] // ASC 为递减  DESC 为递增
    })
    return movieInfo
}

export default{
    modelNewMovie
}