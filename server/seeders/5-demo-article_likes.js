'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('article_likes', [
    {
      id: 1,
      user_id: 1,
      article_id: 1
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('article_likes', null, {})
  }
};