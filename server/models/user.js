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
      // sayings와의 관계 (1:N)
      models.users.hasMany(models.sayings, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // saying_likes와의 관계 (1:N)
      models.users.hasMany(models.saying_likes, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // articles와의 관계 (1:N)
      models.users.hasMany(models.articles, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // comments와의 관계 (1:N)
      models.users.hasMany(models.comments, {
        foreignKey: 'user_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // article_likes와의 관계 (1:N)
      models.users.hasMany(models.article_likes, {
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