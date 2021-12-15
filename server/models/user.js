'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Saying_likes와의 관계
      models.users.hasMany(models.saying_likes, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // Post와의 관계
      models.users.hasMany(models.posts, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // Comment와의 관계
      models.users.hasMany(models.comments, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // Post_likes와의 관계
      models.users.hasMany(models.post_likes, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    image: DataTypes.BLOB,
    introduction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });

  return users;
};