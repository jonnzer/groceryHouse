// db.js: 初始化和数据库的连接

import '../../.env'

const Sequelize = require('sequelize')

const groceryHouse = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/groceryHouse`,{
  define: {
    timeStamp: false,
  }
})

export default {
  groceryHouse    //  导出为数据库的model
}
