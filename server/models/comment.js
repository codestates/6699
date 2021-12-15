'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // users와의 관계 (N:1)
      models.comments.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      // articles와의 관계 (N:1)
      models.comments.belongsTo(models.articles, {
        foreignKey: 'article_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  comments.init({
    content: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    article_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};