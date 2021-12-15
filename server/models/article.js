'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // users와의 관계 (N:1)
      models.articles.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      // comments와의 관계 (1:N)
      models.articles.hasMany(models.comments, {
        foreignKey: 'article_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // article_likes와의 관계 (1:N)
      models.articles.hasMany(models.article_likes, {
        foreignKey: 'article_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // sayings와의 관계 (N:1)
      models.articles.belongsTo(models.sayings, {
        foreignKey: 'saying_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  articles.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.BLOB,
    total_like: DataTypes.INTEGER,
    total_comment: DataTypes.INTEGER,
    view: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    saying_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'articles',
  });
  return articles;
};