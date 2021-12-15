'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING 
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING 
      },
      image: {
        type: Sequelize.BLOB
      },
      total_like: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0 
      },
      total_comment: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      view: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }
      },
      saying_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'sayings', key: 'id' }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('articles');
  }
};