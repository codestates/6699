'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class saying_likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // users와의 관계 (N:1)
      models.saying_likes.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      // sayings와의 관계 (N:1)
      models.saying_likes.belongsTo(models.sayings, {
        foreignKey: 'saying_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  saying_likes.init({
    user_id: DataTypes.INTEGER,
    saying_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'saying_likes',
  });
  return saying_likes;
};