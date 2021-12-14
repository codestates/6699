'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User와의 관계
      models.Post_likes.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      // Post와의 관계
      models.Post_likes.belongsTo(models.Post, {
        foreignKey: 'post_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  Post_likes.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post_likes',
  });
  return Post_likes;
};