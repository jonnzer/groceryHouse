import db from '../config/db'
const grocery_comic = '../schema/grocery_comic.js'
const allTable = db.groceryHouse  // 引入数据库
const instance_comic = allTable.import(grocery_comic)
// 引入表结构，实例化

const modelNewComic = async function () {
  const comicInfo = await instance_comic.findAll({
    limit: 1,
    order: ['comic_id','DESC']
  })
  return comicInfo
}

export default {
  modelNewComic
}
