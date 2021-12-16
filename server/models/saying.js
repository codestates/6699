'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sayings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // users와의 관계 (N:1)
      models.sayings.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'cascade'
      })
      // articles와의 관계 (1:N)
      models.sayings.hasMany(models.articles, {
        foreignKey: 'saying_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
      // saying_likes와의 관계 (1:N)
      models.sayings.hasMany(models.saying_likes, {
        foreignKey: 'saying_id',
        sourcekey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  sayings.init({
    content: DataTypes.STRING,
    category: DataTypes.STRING,
    total_like: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sayings',
  });
  return sayings;
};