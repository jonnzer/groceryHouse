/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grocery_comic', {
    comic_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comic_create_data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    comic_name: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    comic_tag: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    comic_pic: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    comic_link: {
      type: DataTypes.CHAR(255),
      allowNull: false
    }
  }, {
    tableName: 'grocery_comic'
  });
};
