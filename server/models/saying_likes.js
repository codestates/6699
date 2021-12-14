'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saying_likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Saying_likes.init({
    user_id: DataTypes.INTEGER,
    saying_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Saying_likes',
  });
  return Saying_likes;
};