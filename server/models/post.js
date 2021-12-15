'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User와의 관계
      models.posts.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      // Comment와의 관계
      models.posts.hasMany(models.comments, {
        foreignKey: 'post_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // Post_likes와의 관계
      models.posts.hasMany(models.post_likes, {
        foreignKey: 'post_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  posts.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.BLOB,
    total_like: DataTypes.INTEGER,
    total_comment: DataTypes.INTEGER,
    view: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};