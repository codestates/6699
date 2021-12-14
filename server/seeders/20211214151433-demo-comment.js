'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comment', [
    {
      id: 1,
      content: '정말 웃기다 너, 하하하하하하',
      createdAt: new Date(),
      user_id: 1,
      post_id: 1
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comment', null, {})
  }
};
