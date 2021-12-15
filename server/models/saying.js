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
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'sayings',
  });
  return sayings;
};