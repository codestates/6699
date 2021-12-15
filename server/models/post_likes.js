'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User와의 관계
      models.post_likes.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      // Post와의 관계
      models.post_likes.belongsTo(models.posts, {
        foreignKey: 'post_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  post_likes.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post_likes',
  });
  return post_likes;
};