// db.js: 初始化和数据库的连接

import '../../env'
import Sequelize from 'sequelize'

const groceryHouse = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/groceryHouse`,{
  define: {
    timestamps: false,
  }
})

groceryHouse
  .authenticate()
  .then(() => { // test connect 数据库 状态
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
export default {
  groceryHouse    //  导出为数据库的model
}
