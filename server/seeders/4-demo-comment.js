'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
    {
      id: 1,
      content: '정말 웃기다 너, 하하하하하하',
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      article_id: 1
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {})
  }
};
