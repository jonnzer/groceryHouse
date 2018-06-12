import db from '../config/db'
const grocery_comic = '../schema/grocery_comic.js'
const allTable = db.groceryHouse  // 引入数据库
const instance_comic = allTable.import(grocery_comic)
// 引入表结构，实例化

const modelNewComic = async function () {    //  取出倒序的最新的数据
  const comicInfo = await instance_comic.findAll({
    limit: 1,
    order: [['comic_id','DESC']]
  })
  return comicInfo
}

const comicTagModel = async function () {   // 取出漫画的标签
  const tagInfo = await instance_comic.findAll({
    attributes: ['comic_tag']
  })
  return tagInfo
}

// 总长度 倒数20 倒数1 分类

export default {
  modelNewComic,
  comicTagModel,

}
