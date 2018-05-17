/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grocery_movie', {
    movie_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    movie_create_data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    movie_name: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    movie_actor: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    movie_tag: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    movie_sum: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    movie_high_pic: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    movie_simple_pic: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    movie_content: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    movie_seed: {
      type: DataTypes.CHAR(255),
      allowNull: false
    }
  }, {
    tableName: 'grocery_movie'
  });
};
