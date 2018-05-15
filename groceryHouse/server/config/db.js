// db.js: 初始化和数据库的连接

const Sequelize = require('sequelize')

const groceryHouse = new Sequelize('mysql://root:123456@localhost/groceryHouse',{
  define: {
    timeStamp: false,
  }
})

module.exports = {
  groceryHouse    //  导出为数据库的model
}
