import db from '../config/db.js'
const movieModel = '../schema/grocery_movie.js'
const movieDb = db.groceryHouse     // 引入数据库
const instance_movie = movieDb.import(movieModel) // 引入表结构，实例化
console.log(db)

